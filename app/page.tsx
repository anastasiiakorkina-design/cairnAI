import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import PlatformOverview from '@/components/sections/PlatformOverview';
import CoreFeatures from '@/components/sections/CoreFeatures';
import ScotlandSection from '@/components/sections/ScotlandSection';
import SocialProof from '@/components/sections/SocialProof';
import Integrations from '@/components/sections/Integrations';
import Solutions from '@/components/sections/Solutions';
import AICapabilities from '@/components/sections/AICapabilities';
import Security from '@/components/sections/Security';
import Pricing from '@/components/sections/Pricing';
import FinalCTA from '@/components/sections/FinalCTA';
import DemoForm from '@/components/forms/DemoForm';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        <Hero />
        <ProblemStatement />
        <PlatformOverview />
        <CoreFeatures />
        <ScotlandSection />
        <SocialProof />
        <Integrations />
        <Solutions />
        <AICapabilities />
        <Security />
        <Pricing />
        <FinalCTA />
        <DemoForm />
      </main>

      <Footer />
    </div>
  );
}
