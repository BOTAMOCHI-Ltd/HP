import KityouNavbar from './components/KityouNavbar';
import KityouHeroSection from './components/KityouHeroSection';
import KityouAboutSection from './components/KityouAboutSection';
import KityouCompareSection from './components/KityouCompareSection';
import KityouProsConsSection from './components/KityouProsConsSection';
import KityouFAQSection from './components/KityouFAQSection';
import KityouServiceCTASection from './components/KityouServiceCTASection';
import KityouContactSection from './components/KityouContactSection';
import KityouFooter from './components/KityouFooter';

export default function KityouPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
      <KityouNavbar />
      <main>
        <KityouHeroSection />
        <KityouAboutSection />
        <KityouCompareSection />
        <KityouProsConsSection />
        <KityouFAQSection />
        <KityouServiceCTASection />
        <KityouContactSection />
      </main>
      <KityouFooter />
    </div>
  );
}