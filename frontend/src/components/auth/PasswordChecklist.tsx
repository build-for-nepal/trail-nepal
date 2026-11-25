import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { checkPassword } from '@/lib/authValidation';

type PasswordChecklistProps = {
  id: string;
  password: string;
};

/** Live list of the backend password rules; unmet ones are red. */
export function PasswordChecklist({ id, password }: PasswordChecklistProps) {
  const { results } = checkPassword(password);
  return (
    <ul id={id} className="mt-2 grid grid-cols-1 gap-y-1">
      {results.map((rule) => (
        <li
          key={rule.key}
          className={cn(
            'flex items-center gap-1.5 font-poppins text-[11px] leading-tight transition-colors',
            rule.met ? 'text-[#88B112]' : 'text-[#EF4444]',
          )}
        >
          {rule.met ? (
            <Check className="size-3.5 shrink-0" aria-hidden="true" />
          ) : (
            <X className="size-3.5 shrink-0" aria-hidden="true" />
          )}
          <span>{rule.label}</span>
        </li>
      ))}
    </ul>
  );
}
