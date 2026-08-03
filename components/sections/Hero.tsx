export default function Hero() {
  return (
    <section className="bg-gradient-hero bg-contour-pattern relative overflow-hidden py-20 md:py-32 lg:py-40 text-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <p className="section-eyebrow text-cairn-gold mb-4">
                Scotland's First AI-Native Procurement Platform
              </p>
              <h1 className="text-white leading-tight mb-4">
                Stop Managing Procurement.
                <br />
                Start Orchestrating It.
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
              CairnAI unifies intake, approvals, supplier management, and compliance into one intelligent platform — purpose-built for Scottish procurement legislation and the organisations that operate within it.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#demo" className="btn-primary bg-cairn-blue hover:bg-opacity-90">
                Book a Demo
              </a>
              <a href="#platform" className="btn-ghost border-white text-white hover:bg-white hover:text-cairn-navy">
                See the Platform →
              </a>
            </div>

            {/* Trust Strip */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-white/70 mb-4">
                Trusted by Scottish public sector bodies, NHS boards, and leading Scottish businesses
              </p>
              <div className="flex gap-6 flex-wrap">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-32 bg-white/10 rounded flex items-center justify-center text-white/50 text-sm"
                  >
                    [Client Logo]
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="hidden lg:block relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-cairn-gold/20 to-cairn-blue/20 rounded-xl flex items-center justify-center border border-white/10">
              <div className="text-center text-white/40">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-sm">Product UI Mockup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
