export default function Integrations() {
  const categories = [
    {
      name: 'Collaboration',
      integrations: [
        'Microsoft Teams',
        'Slack',
        'Microsoft Outlook',
        'Google Workspace',
      ],
    },
    {
      name: 'Finance & ERP',
      integrations: ['SAP', 'Oracle', 'Sage', 'Xero', 'IRIS'],
    },
    {
      name: 'Contract & Legal',
      integrations: ['DocuSign', 'Adobe Sign', 'Ironclad'],
    },
    {
      name: 'IT & Security',
      integrations: ['ServiceNow', 'Jira', 'Okta'],
    },
    {
      name: 'Scottish Systems',
      integrations: [
        'Public Contracts Scotland (PCS)',
        'PCS-Tender',
        'Scottish Government Frameworks Portal',
      ],
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="section-eyebrow mb-3">INTEGRATIONS</p>
          <h2 className="mb-4">Works with the tools you already use</h2>
          <p className="text-lg text-cairn-slate-grey max-w-2xl mx-auto">
            CairnAI connects to your existing finance, IT, and collaboration systems — no rip-and-replace needed. Bring your stack, we orchestrate across it.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-bold text-cairn-navy uppercase tracking-wide">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.integrations.map((integration, iidx) => (
                  <div
                    key={iidx}
                    className="h-12 rounded-lg bg-cairn-mist-white border border-cairn-frost flex items-center px-4 text-cairn-slate-grey/60 text-sm font-medium"
                  >
                    {integration}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-cairn-mist-white rounded-lg p-8 text-center border border-cairn-frost">
          <p className="text-cairn-slate-grey mb-4">
            Don't see your system? Our open API connects to virtually any platform.
          </p>
          <a href="#contact" className="btn-secondary">
            Talk to our integrations team →
          </a>
        </div>
      </div>
    </section>
  );
}
