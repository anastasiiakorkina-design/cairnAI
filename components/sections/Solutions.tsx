import { Building2, Heart, BookOpen, TrendingUp } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: Building2,
      title: 'LOCAL AUTHORITIES',
      description:
        'Managing complex procurement across multiple departments with tight budgets and heavy compliance requirements. CairnAI centralises everything from social care commissioning to capital works — with full Procurement Reform Act compliance built in.',
    },
    {
      icon: Heart,
      title: 'NHS SCOTLAND',
      description:
        'Healthcare procurement demands rigorous supplier due diligence, strict regulatory compliance, and speed. CairnAI streamlines everything from medical supplies sourcing to IT services procurement — while managing third-party risk across your entire supply chain.',
    },
    {
      icon: BookOpen,
      title: 'HIGHER & FURTHER EDUCATION',
      description:
        'Universities and colleges juggle research procurement, estates management, and IT purchasing across semi-autonomous departments. CairnAI provides a single front door with the flexibility to handle diverse buying needs.',
    },
    {
      icon: TrendingUp,
      title: 'SCOTTISH PRIVATE SECTOR',
      description:
        'Growing Scottish businesses need procurement structure without enterprise-grade complexity and cost. CairnAI scales from first procurement hire to full team — with pricing that reflects the Scottish market, not Silicon Valley.',
    },
  ];

  return (
    <section className="section-light py-16 md:py-24 lg:py-32" id="solutions">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="section-eyebrow mb-3">SOLUTIONS</p>
          <h2>Purpose-built for every type of Scottish organisation</h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <div key={idx} className="card flex flex-col group hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-cairn-blue/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cairn-blue" />
                </div>

                <h3 className="text-lg font-bold text-cairn-navy mb-3 uppercase tracking-wide">
                  {solution.title}
                </h3>

                <p className="text-cairn-slate-grey leading-relaxed mb-6 flex-1">
                  {solution.description}
                </p>

                <a
                  href={`#solution-${idx}`}
                  className="inline-flex items-center gap-2 text-cairn-blue font-semibold hover:gap-3 transition-all no-underline"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
