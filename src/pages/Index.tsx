import FloatingShapes from '@/components/FloatingShapes';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import BenefitCards from '@/components/BenefitCards';
import ModulesGrid from '@/components/ModulesGrid';
import FeatureSpotlight from '@/components/FeatureSpotlight';
import AnimatedStats from '@/components/AnimatedStats';
import VideoShowcase from '@/components/VideoShowcase';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TrustBadges />
        <BenefitCards />
        <ModulesGrid />
        <FeatureSpotlight />
        <AnimatedStats />
        <VideoShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;