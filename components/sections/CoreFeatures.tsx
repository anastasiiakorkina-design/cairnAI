import { Sparkles, Workflow, Shield, Clipboard } from 'lucide-react';

export default function CoreFeatures() {
  const features = [
    {
      eyebrow: 'INTELLIGENT INTAKE',
      title: 'A front door that actually works',
      description:
        "Your employees don't need to understand procurement processes to buy what they need. CairnAI's conversational AI guides them through a simple, natural-language request — asking the right questions, applying your policies automatically, and routing the request to the correct workflow. No more \"who do I email for this?\" No more incomplete request forms sitting in inboxes for weeks.",
      points: [
        'Conversational request submission via Slack, Teams, or web portal',
        'Automatic policy application and category detection',
        'Smart routing to the right approver chain based on spend, category, and risk',
        'Duplicate detection that flags existing contracts and overlapping tools before a new purchase starts',
      ],
      icon: Sparkles,
      align: 'left' as const,
    },
    {
      eyebrow: 'NO-CODE WORKFLOWS',
      title: 'Your processes, your rules — without the IT ticket',
      description:
        "Every Scottish organisation runs procurement differently. CairnAI's drag-and-drop workflow builder lets you configure approval chains, risk thresholds, escalation rules, and compliance checkpoints without writing a line of code or filing an IT request. Build it once. Let the AI run it. Change it whenever your policies evolve.",
      points: [
        'Visual drag-and-drop workflow builder — no technical skills required',
        'Conditional logic for spend thresholds, supplier risk tiers, and category-specific rules',
        'Automatic escalation when approvals stall',
        'Full audit trail for every decision, timestamp, and action taken',
      ],
      icon: Workflow,
      align: 'right' as const,
    },
    {
      eyebrow: 'SUPPLIER INTELLIGENCE',
      title: 'Every supplier. Every risk. One view.',
      description:
        "CairnAI builds a living, 360-degree profile for every supplier — consolidating contracts, certifications, compliance documents, spend history, and risk assessments in one place. When a certification expires, you know. When a contract renewal approaches, you're ready. When due diligence questionnaires need to go out, the AI handles it. Stop chasing suppliers for paperwork. Start managing relationships strategically.",
      points: [
        'Centralised supplier database with automatic data enrichment',
        'Third-party risk management (TPRM) with AI-powered questionnaire generation and review',
        'Automated renewal alerts — never miss a contract deadline',
        'Continuous monitoring for adverse media, financial distress, and compliance red flags',
      ],
      icon: Shield,
      align: 'left' as const,
    },
    {
      eyebrow: 'SCOTTISH COMPLIANCE',
      title: 'Compliance that builds itself as you work',
      description:
        "Every procurement action in CairnAI creates a compliance record automatically. When it's time to produce your Annual Procurement Report, demonstrate community benefit delivery, or evidence your sustainable procurement duty — the data is already there, structured and audit-ready. Stop scrambling at year-end. Start generating reports with a click.",
      points: [
        'Automatic compliance evidence capture aligned to Procurement Reform (Scotland) Act 2014 requirements',
        'One-click Annual Procurement Report generation with exportable data matching SPPN templates',
        'Community benefit tracking and fair work practice reporting built in',
        'Real-time spend dashboards with breakdowns by supplier size, geography, category, and SME/third sector share',
      ],
      icon: Clipboard,
      align: 'right' as const,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="section-eyebrow mb-3">CORE FEATURES</p>
          <h2>Powerful capabilities, end-to-end</h2>
        </div>

        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isLeft = feature.align === 'left';

            return (
              <div
                key={idx}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isLeft ? '' : 'lg:auto-cols-reverse'
                }`}
              >
                {/* Content */}
                <div className={isLeft ? '' : 'lg:order-2'}>
                  <p className="section-eyebrow mb-3">{feature.eyebrow}</p>
                  <h3 className="mb-4">{feature.title}</h3>
                  <p className="text-lg text-cairn-slate-grey leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {feature.points.map((point, pidx) => (
                      <div key={pidx} className="flex gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cairn-gold/20 flex items-center justify-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-cairn-gold"></div>
                        </div>
                        <p className="text-cairn-slate-grey">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={`relative h-80 rounded-xl border border-cairn-frost bg-gradient-to-br from-cairn-blue/5 to-cairn-gold/5 flex items-center justify-center ${
                    isLeft ? '' : 'lg:order-1'
                  }`}
                >
                  <div className="text-center text-cairn-slate-grey/40">
                    <Icon className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">Product UI Mockup</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
