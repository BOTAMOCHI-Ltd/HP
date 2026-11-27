import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MeritSection from './components/MeritSection';
import PainPointsSection from './components/PainPointsSection';
import ServiceIntroSection from './components/ServiceIntroSection';
import BenefitsSection from './components/BenefitsSection';
import ComparisonSection from './components/ComparisonSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import ApplicationSection from './components/ApplicationSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import MessageSection from './components/MessageSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function HomePage() {
  useEffect(() => {
    const head = document.head;
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'squadbeyond:allow-boost');
    meta.setAttribute('content', 'team:218');

    // <head>の一番下に挿入
    head.appendChild(meta);

    return () => {
      if (meta.parentNode === head) {
        head.removeChild(meta);
      }
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      <Navbar />
      <main>
        <HeroSection />
        <MeritSection />
        <PainPointsSection />
        <ServiceIntroSection />
        <BenefitsSection />
        <ComparisonSection />
        <ProblemSolutionSection />
        <ApplicationSection />
        <CaseStudiesSection />
        <MessageSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
