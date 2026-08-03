export default function ProblemStatement() {
  const stats = [
    {
      value: '£13B+',
      label: 'Annual public procurement spend in Scotland',
    },
    {
      value: '60%',
      label: 'Of procurement time lost to manual admin and chasing approvals',
    },
    {
      value: '108',
      label: 'Scottish public bodies required to produce Annual Procurement Reports',
    },
    {
      value: '72%',
      label: "Of Scottish procurement teams say current tools don't meet their needs",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="section-eyebrow mb-3">THE PROBLEM</p>
          <h2 className="mb-6">Scottish procurement is stuck in the past</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-cairn-slate-grey leading-relaxed">
              Scotland spends over £13 billion annually through public procurement — one of the most powerful levers for economic and social progress in the country. But the tools used to manage that spend haven't kept up.
            </p>

            <p className="text-lg text-cairn-slate-grey leading-relaxed">
              Procurement teams across Scottish councils, NHS boards, and universities still rely on disconnected email chains, manual spreadsheets, and legacy systems that were never designed for the complexity of modern compliance requirements. The Procurement Reform (Scotland) Act 2014, the sustainable procurement duty, community benefit obligations, fair work practices — all of this demands structured, auditable processes. Instead, most teams are drowning in admin.
            </p>

            <p className="text-lg text-cairn-slate-grey leading-relaxed">
              The result? Missed renewals. Uncontrolled spend. Compliance gaps that surface only at audit time. And procurement professionals spending 60% of their time on manual busywork instead of strategic sourcing.
            </p>

            <p className="text-lg font-semibold text-cairn-navy pt-4">
              CairnAI changes that.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-1 space-y-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="card border-l-4 border-cairn-gold"
              >
                <p className="text-3xl md:text-4xl font-bold text-cairn-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-cairn-slate-grey leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
