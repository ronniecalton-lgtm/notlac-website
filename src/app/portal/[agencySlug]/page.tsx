export const runtime = 'edge';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AgencyPortalView from './AgencyPortalView';

interface AgencyPortalProps {
  params: Promise<{
    agencySlug: string;
  }>;
}

function formatAgencyTitle(slug: string): string {
  const parts = slug.split('-');
  if (parts.length >= 3) {
    const state = parts.pop()?.toUpperCase();
    const entity = parts.pop()?.toUpperCase();
    const name = parts.join(' ').toUpperCase();
    return `${name} ${entity} (${state})`;
  }
  return slug.replace(/-/g, ' ').toUpperCase();
}

export default async function AgencyDashboard({ params }: AgencyPortalProps) {
  const { agencySlug } = await params;

  // Zero-Trust Perimeter Check at the Edge
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('notlac_session')?.value;

  if (!sessionToken) {
    redirect(`/login?redirect=/portal/${agencySlug}`);
  }

  const formattedAgency = formatAgencyTitle(agencySlug);

  const deliverables = [
    {
      id: 'DEL-01',
      title: 'NIST AI RMF 1.0 Baseline Assessment',
      category: 'Governance & Audit',
      version: 'v1.2',
      updated: 'Oct 2026',
      status: 'In Review',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      id: 'DEL-02',
      title: 'Generative AI Operational SOP',
      category: 'Policy Framework',
      version: 'v2.0 Draft',
      updated: 'Oct 2026',
      status: 'Ready for Sign-Off',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'DEL-03',
      title: 'CJIS Area 5 Cryptographic Verification Matrix',
      category: 'Compliance Audit',
      version: 'v1.0',
      updated: 'Sep 2026',
      status: 'Approved',
      badgeClass: 'bg-cyan-50 text-cyan-800 border-cyan-200',
    },
    {
      id: 'DEL-04',
      title: 'PSAP Ingestion & Model Safeguards Training Plan',
      category: 'Operational Enablement',
      version: 'v1.0',
      updated: 'Oct 2026',
      status: 'Scheduled',
      badgeClass: 'bg-slate-100 text-slate-700 border-slate-200',
    },
  ];

  return (
    <AgencyPortalView
      agencySlug={agencySlug}
      formattedAgency={formattedAgency}
      deliverables={deliverables}
    />
  );
}
