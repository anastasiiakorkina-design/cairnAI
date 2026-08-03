'use client';

import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

export default function Hero() {
  const benefits = [
    { icon: Zap, text: '73% less manual admin' },
    { icon: CheckCircle, text: 'Full compliance built-in' },
    { icon: ArrowRight, text: '26 days faster cycles' },
  ];

  return (
    <section className="relative overflow-hidden pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32 text-white" style={{ background: 'linear-gradient(135deg, #0D1F3C 0%, #162D50 100%)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cairn-blue/20 rounded-full mix-blend-multiply filter blur-3xl animate-fade-in"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cairn-gold/20 rounded-full mix-blend-multiply filter blur-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cairn-glen-green/10 rounded-full mix-blend-multiply filter blur-3xl animate-fade-in" style={{ animationDelay: '0.4s' }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-block">
              <div className="flex items-center gap-2 mb-6 bg-white/10 px-4 py-2 rounded-full border border-white/20 w-fit">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--cairn-gold)' }}></div>
                <p style={{ color: 'var(--cairn-gold)' }} className="text-sm font-bold uppercase tracking-wider">
                  Scotland's First AI-Native Platform
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Stop Managing Procurement.
                <br />
                <span style={{ color: 'var(--cairn-gold)' }}>Start Orchestrating It.</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl font-light">
              CairnAI unifies intake, approvals, supplier management, and compliance into one intelligent platform — purpose-built for Scottish procurement.
            </p>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                    <Icon className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--cairn-gold)' }} />
                    <span className="text-sm font-medium text-white/90">{benefit.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#demo-form"
                className="btn-primary font-semibold py-4 px-8 text-lg inline-flex items-center justify-center gap-2 group"
                style={{ backgroundColor: 'var(--cairn-blue)' }}
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#platform"
                className="btn-ghost border-2 border-white text-white font-semibold py-4 px-8 text-lg inline-flex items-center justify-center gap-2 group"
              >
                Watch Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Indicator */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-white/70 mb-4 font-medium">
                ✓ Trusted by Scottish public sector, NHS boards & leading businesses
              </p>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:flex items-center justify-center relative h-[500px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              {/* Gradient Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-cairn-blue/30 via-transparent to-cairn-gold/20 rounded-2xl border border-white/10 backdrop-blur-sm"></div>

              {/* Floating Elements */}
              <div className="absolute top-12 left-12 w-32 h-32 bg-white/5 rounded-lg border border-white/20 flex items-center justify-center backdrop-blur-sm transform hover:scale-105 transition-transform">
                <div className="text-center">
                  <Zap className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--cairn-gold)' }} />
                  <p className="text-xs font-semibold">AI-Powered</p>
                </div>
              </div>

              <div className="absolute bottom-12 right-12 w-32 h-32 bg-white/5 rounded-lg border border-white/20 flex items-center justify-center backdrop-blur-sm transform hover:scale-105 transition-transform" style={{ animationDelay: '0.2s' }}>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--cairn-glen-green)' }} />
                  <p className="text-xs font-semibold">Compliant</p>
                </div>
              </div>

              <div className="absolute top-1/2 right-12 transform -translate-y-1/2 w-32 h-32 bg-white/5 rounded-lg border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <svg
                    className="w-8 h-8 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <p className="text-xs font-semibold">Fast</p>
                </div>
              </div>

              {/* Center accent */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-white/20" style={{ borderColor: 'var(--cairn-gold)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10">
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--cairn-gold)' }}>
              £13B+
            </p>
            <p className="text-white/70">Annual Scottish procurement spend</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--cairn-gold)' }}>
              108
            </p>
            <p className="text-white/70">Public bodies needing APR compliance</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--cairn-gold)' }}>
              60%
            </p>
            <p className="text-white/70">Time spent on manual admin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
