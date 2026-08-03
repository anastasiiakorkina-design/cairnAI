import { FileCheck, Link as LinkIcon, Users as UsersIcon, TrendingUp, Leaf, BookOpen } from 'lucide-react';

export default function ScotlandSection() {
  const cards = [
    {
      icon: FileCheck,
      title: 'Procurement Reform (Scotland) Act 2014',
      description:
        "Full alignment with the Act's requirements — from sustainable procurement duty to regulated thresholds (£50K for goods/services, £2M for works). CairnAI automatically applies the right rules at the right spend level.",
    },
    {
      icon: LinkIcon,
      title: 'Public Contracts Scotland Integration',
      description:
        'Seamless connection with PCS and the upcoming Source-to-Contract (S2C) replacement platform. Publish opportunities, manage tenders, and pull contract data without leaving CairnAI.',
    },
    {
      icon: TrendingUp,
      title: 'Fair Work & Community Benefits',
      description:
        'Track fair work practices, real Living Wage commitments, and community benefit delivery across your entire supplier base. Generate evidence for reporting and audits automatically.',
    },
    {
      icon: UsersIcon,
      title: 'SME & Third Sector Access',
      description:
        "Built-in tools to lower barriers for Scottish SMEs, social enterprises, and supported businesses — aligned with the Scottish Government's SME & Third Sector Procurement Action Plan (2024-2026).",
    },
    {
      icon: Leaf,
      title: 'Sustainable Procurement Duty',
      description:
        'Embed sustainability considerations into every procurement decision. Track and report on environmental, social, and economic impact across your supply chain.',
    },
    {
      icon: BookOpen,
      title: 'Scottish Government Frameworks',
      description:
        'Pre-built integration with Scottish Government collaborative framework agreements and Dynamic Purchasing Systems (DPS). Access existing contracts and check compliance in seconds.',
    },
  ];

  return (
    <section
      className="section-dark py-16 md:py-24 lg:py-32 bg-contour-pattern"
      id="scotland"
    >
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="section-eyebrow text-cairn-gold mb-3">BUILT FOR SCOTLAND</p>
          <h2 className="text-white mb-4">
            Not a global platform with a Scottish flag bolted on.
            <br />A procurement system designed around how Scotland buys.
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Scottish procurement operates under its own legislation, its own reporting requirements, and its own policy priorities. CairnAI is the only platform that understands this natively — because we built it here, for here.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-cairn-navy-light border border-white/10 rounded-lg p-6 md:p-8 hover:border-cairn-gold/30 transition-colors"
              >
                <Icon className="w-8 h-8 text-cairn-gold mb-4" />
                <h3 className="text-white font-bold mb-3 text-lg">{card.title}</h3>
                <p className="text-white/70 leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
