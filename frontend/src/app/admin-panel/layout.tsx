import { AdminProviders } from '@/components/admin/AdminProviders';

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminProviders>{children}</AdminProviders>;
}
