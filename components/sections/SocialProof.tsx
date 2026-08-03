import { Star } from 'lucide-react';

export default function SocialProof() {
  const stats = [
    {
      value: '26 days',
      label: 'Average reduction in procurement cycle time',
    },
    {
      value: '73%',
      label: 'Less time spent on manual admin and chasing approvals',
    },
    {
      value: '94%',
      label: 'Of spend brought under structured governance and visibility',
    },
  ];

  const testimonials = [
    {
      quote:
        'CairnAI transformed how we handle procurement across the council. What used to take weeks of emails and spreadsheets now happens in days — with a full audit trail our auditors actually praise.',
      author: 'Head of Procurement',
      organization: 'Scottish Local Authority',
    },
    {
      quote:
        'We needed a platform that understood Scottish legislation, not one where we had to explain our reporting requirements to a support team in San Francisco. CairnAI gets it because they built it for us.',
      author: 'Procurement Director',
      organization: 'NHS Scotland Board',
    },
    {
      quote:
        "The Annual Procurement Report used to consume our team for a full month. With CairnAI, the data is just there — structured, accurate, and ready to export. It's given us back weeks of strategic time.",
      author: 'Category Manager',
      organization: 'Scottish University',
    },
  ];

  return (
    <section className="section-light py-16 md:py-24 lg:py-32">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="section-eyebrow mb-3">RESULTS</p>
          <h2>What happens when procurement actually works</h2>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24 lg:mb-32">
          {stats.map((stat, idx) => (
            <div key={idx} className="card text-center">
              <p className="text-4xl md:text-5xl font-bold text-cairn-gold mb-3">
                {stat.value}
              </p>
              <p className="text-cairn-slate-grey">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="card flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-cairn-gold text-cairn-gold"
                  />
                ))}
              </div>

              <p className="text-cairn-ink-dark leading-relaxed mb-6 flex-1 italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-cairn-frost pt-4">
                <p className="font-semibold text-cairn-navy text-sm">
                  {testimonial.author}
                </p>
                <p className="text-cairn-slate-grey text-sm">
                  {testimonial.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
