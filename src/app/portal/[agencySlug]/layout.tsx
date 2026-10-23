export const runtime = 'edge';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface TenantLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    agencySlug: string;
  }>;
}

export default async function TenantPortalLayout({
  children,
  params,
}: TenantLayoutProps) {
  const { agencySlug } = await params;
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('notlac_session')?.value;

  if (!sessionToken) {
    redirect(`/login?redirect=/portal/${agencySlug}`);
  }

  return <>{children}</>;
}
