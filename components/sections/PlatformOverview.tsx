import {
  FileText,
  CheckCircle,
  Search,
  Users,
  BarChart3,
} from 'lucide-react';

export default function PlatformOverview() {
  const steps = [
    {
      icon: FileText,
      title: 'REQUEST',
      description:
        'Employees submit procurement requests in plain language — via Slack, Teams, email, or the CairnAI portal. Our AI structures the request, applies policy, and routes it to the right workflow automatically. No forms. No guesswork.',
    },
    {
      icon: CheckCircle,
      title: 'APPROVE',
      description:
        "Intelligent approval routing based on your organisation's policies — spend thresholds, category rules, risk levels. Every approver sees only what they need. Bottlenecks are flagged and escalated automatically.",
    },
    {
      icon: Search,
      title: 'SOURCE',
      description:
        'AI-assisted sourcing — from generating compliant RFx documents to evaluating supplier responses. CairnAI benchmarks against existing suppliers and flags overlap, consolidation opportunities, and risk.',
    },
    {
      icon: Users,
      title: 'MANAGE',
      description:
        '360° supplier profiles with all contracts, certifications, risk assessments, and performance data in one place. Automatic renewal alerts. Continuous monitoring. No more surprises.',
    },
    {
      icon: BarChart3,
      title: 'REPORT',
      description:
        'Automated compliance reporting aligned to Scottish Government requirements. Generate Annual Procurement Reports, community benefit tracking, and sustainable procurement duty evidence at the click of a button.',
    },
  ];

  return (
    <section className="section-light py-16 md:py-24 lg:py-32" id="platform">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="section-eyebrow mb-3">THE PLATFORM</p>
          <h2 className="mb-4">One platform. Every procurement workflow. Fully orchestrated.</h2>
          <p className="text-lg text-cairn-slate-grey max-w-2xl mx-auto">
            CairnAI replaces fragmented tools with a single intelligent system that handles everything from initial request to supplier onboarding — with compliance baked into every step.
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-2 w-4 h-1 bg-cairn-frost"></div>
                )}

                <div className="card h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-cairn-blue/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cairn-blue" />
                  </div>

                  <h3 className="text-lg font-bold text-cairn-navy mb-3 uppercase tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-sm text-cairn-slate-grey leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
