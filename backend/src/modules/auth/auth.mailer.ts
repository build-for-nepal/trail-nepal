import nodemailer from 'nodemailer';
import { env } from '../../config/env.js';

type Mail = { to: string; subject: string; text: string };

const transport = env.mail.smtp
  ? nodemailer.createTransport({
      host: env.mail.smtp.host,
      port: env.mail.smtp.port,
      secure: env.mail.smtp.port === 465,
      ...(env.mail.smtp.user && {
        auth: { user: env.mail.smtp.user, pass: env.mail.smtp.pass },
      }),
    })
  : null;

// Fire-and-forget: callers must not await this, so response time does not
// reveal whether an account exists (user enumeration via timing).
export function sendMail(mail: Mail): void {
  const task = transport
    ? transport.sendMail({ from: env.mail.from, ...mail })
    : Promise.resolve(
        console.log(`[mail:dev] to=${mail.to}\n${mail.subject}\n${mail.text}`),
      );

  task.catch((err: unknown) => console.error('[mail] send failed', err));
}
