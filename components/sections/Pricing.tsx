import { Check } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: 'FOUNDATION',
      description: 'For organisations getting started with structured procurement.',
      price: 'From £X/month',
      cta: 'Get Started',
      ctaVariant: 'secondary' as const,
      features: [
        'AI-powered intake and request management',
        'Basic approval workflows',
        'Supplier database (up to 200 suppliers)',
        'PCS integration',
        'Standard reporting',
      ],
      highlighted: false,
    },
    {
      name: 'PROFESSIONAL',
      description: 'For procurement teams ready to orchestrate end-to-end.',
      price: 'From £X/month',
      cta: 'Book a Demo',
      ctaVariant: 'primary' as const,
      features: [
        'Everything in Foundation',
        'Advanced workflow orchestration (no-code builder)',
        'Full supplier lifecycle management',
        'Third-party risk management',
        'Contract intelligence and renewal alerts',
        'Annual Procurement Report automation',
        'Priority support',
      ],
      highlighted: true,
    },
    {
      name: 'ENTERPRISE',
      description: 'For large organisations with complex, multi-department procurement.',
      price: 'Custom',
      cta: 'Talk to Sales',
      ctaVariant: 'secondary' as const,
      features: [
        'Everything in Professional',
        'Unlimited suppliers and workflows',
        'Custom integrations (ERP, finance, legal)',
        'Dedicated customer success manager',
        'Advanced analytics and spend intelligence',
        'Multi-entity / multi-board support',
        'Custom SLAs and onboarding',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32" id="pricing">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="section-eyebrow mb-3">PRICING</p>
          <h2 className="mb-6">Transparent pricing for Scottish organisations</h2>
          <p className="text-lg text-cairn-slate-grey max-w-2xl mx-auto">
            No enterprise-only pricing walls. No "contact us for a quote" games. CairnAI is priced to be accessible for Scottish public sector bodies and mid-market businesses alike.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-lg overflow-hidden transition-all ${
                tier.highlighted
                  ? 'ring-2 ring-cairn-blue shadow-lg scale-105 md:scale-100 md:translate-y-0'
                  : 'border border-cairn-frost'
              }`}
            >
              <div
                className={`p-8 ${
                  tier.highlighted
                    ? 'bg-cairn-blue text-white'
                    : 'bg-cairn-mist-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-lg font-bold uppercase tracking-wide ${
                      tier.highlighted ? 'text-white' : 'text-cairn-navy'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.highlighted && (
                    <span className="bg-cairn-gold text-cairn-navy px-3 py-1 rounded-full text-xs font-bold">
                      POPULAR
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    tier.highlighted ? 'text-white/90' : 'text-cairn-slate-grey'
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <div className="p-8 bg-white">
                <p
                  className={`text-3xl md:text-4xl font-bold mb-6 ${
                    tier.highlighted ? 'text-cairn-blue' : 'text-cairn-gold'
                  }`}
                >
                  {tier.price}
                </p>

                <a
                  href="#demo"
                  className={`${
                    tier.ctaVariant === 'primary' ? 'btn-primary' : 'btn-secondary'
                  } block text-center mb-8 py-3`}
                >
                  {tier.cta}
                </a>

                <div className="space-y-3">
                  {tier.features.map((feature, fidx) => (
                    <div key={fidx} className="flex gap-3">
                      <Check className="w-5 h-5 text-cairn-glen-green flex-shrink-0 mt-0.5" />
                      <span className="text-cairn-ink-dark text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Info */}
        <div className="bg-cairn-mist-white rounded-lg p-8 border border-cairn-frost text-center">
          <p className="text-cairn-slate-grey mb-4">
            All plans include: UK-hosted data, GDPR compliance, and free onboarding support.
            <br />
            Special pricing available for Scottish public sector and third sector organisations.
          </p>
          <a href="#contact" className="btn-secondary inline-block">
            Ask about public sector pricing →
          </a>
        </div>
      </div>
    </section>
  );
}
