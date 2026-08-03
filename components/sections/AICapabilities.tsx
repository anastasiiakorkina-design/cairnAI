import { Brain, FileText, Send } from 'lucide-react';

export default function AICapabilities() {
  const capabilities = [
    {
      icon: FileText,
      title: 'CONTRACT INTELLIGENCE',
      description:
        'Upload any supplier contract. CairnAI extracts key terms — pricing, renewal dates, termination clauses, SLA commitments — and populates your supplier profile automatically. It flags unfavourable terms against your playbook and highlights what to negotiate.',
    },
    {
      icon: Send,
      title: 'AUTONOMOUS RFx GENERATION',
      description:
        'Describe what you need in plain language. CairnAI generates a complete, compliant RFx document — with evaluation criteria, weighted scoring, and terms appropriate for the procurement category and Scottish regulatory requirements.',
    },
    {
      icon: Brain,
      title: 'SUPPLIER RESPONSE ANALYSIS',
      description:
        'When suppliers submit questionnaire responses or tender submissions, CairnAI reviews them against your requirements. It summarises each response, flags gaps and risks, and gives you a structured comparison — turning days of reading into minutes of decision-making.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="section-eyebrow mb-3">CAIRNAI INTELLIGENCE</p>
          <h2 className="mb-6">AI that does the work — not just the demos</h2>
          <p className="text-lg text-cairn-slate-grey max-w-3xl mx-auto">
            Every AI procurement vendor shows a chatbot in their pitch deck. CairnAI's AI is different because it's embedded into every layer of the platform — not bolted on as a chat window. It reads your contracts, understands your policies, generates your documents, and reviews your suppliers' responses. Autonomously.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((capability, idx) => {
            const Icon = capability.icon;
            return (
              <div
                key={idx}
                className="bg-cairn-mist-white rounded-lg p-8 border border-cairn-frost hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-cairn-blue/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-cairn-blue" />
                </div>

                <h3 className="text-lg font-bold text-cairn-navy mb-4 uppercase tracking-wide">
                  {capability.title}
                </h3>

                <p className="text-cairn-slate-grey leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
