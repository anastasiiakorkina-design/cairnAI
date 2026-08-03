import { Lock, Shield, CheckCircle, Key } from 'lucide-react';

export default function Security() {
  const trustPoints = [
    {
      icon: Lock,
      title: 'UK-hosted infrastructure',
      description: 'Your data never leaves the UK.',
    },
    {
      icon: Shield,
      title: 'SOC 2 Type II certified',
      description: 'Enterprise-grade security standards.',
    },
    {
      icon: CheckCircle,
      title: 'GDPR & UK Data Protection Act 2018 compliant',
      description: 'Full legal compliance built in.',
    },
    {
      icon: Key,
      title: 'Role-based access controls',
      description: 'With full audit logging for every action.',
    },
  ];

  return (
    <section className="section-light py-16 md:py-24 lg:py-32">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="section-eyebrow mb-3">SECURITY</p>
          <h2 className="mb-6">Your data stays in your control</h2>
          <p className="text-lg text-cairn-slate-grey max-w-2xl mx-auto">
            Scottish public sector data requires the highest standards of protection. CairnAI is built on UK-hosted infrastructure with enterprise-grade security — because trust isn't a feature, it's the foundation.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div key={idx} className="card text-center">
                <div className="w-12 h-12 rounded-lg bg-cairn-blue/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-cairn-blue" />
                </div>
                <h3 className="text-lg font-bold text-cairn-navy mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-cairn-slate-grey">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Certifications */}
        <div className="mt-12 md:mt-16 bg-white rounded-lg p-8 border border-cairn-frost text-center">
          <p className="text-cairn-slate-grey mb-4">
            Additionally certified with:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-cairn-slate-grey">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cairn-glen-green" />
              Cyber Essentials Plus
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cairn-glen-green" />
              Regular Penetration Testing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
