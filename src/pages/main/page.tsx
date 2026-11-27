import MainNavbar from './components/MainNavbar';
import MainHeroSection from './components/MainHeroSection';
import MainAboutSection from './components/MainAboutSection';
import MainSupportSection from './components/MainSupportSection';
import MainContactSection from './components/MainContactSection';
import MainFAQSection from './components/MainFAQSection';
import MainCompanySection from './components/MainCompanySection';
import MainFooter from './components/MainFooter';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-white">
      <meta name="squadbeyond:allow-boost" content="team:218" />
      <MainNavbar />
      <main>
        <MainHeroSection />
        <MainAboutSection />
        <MainSupportSection />
        <MainContactSection />
        <MainFAQSection />
        <MainCompanySection />
      </main>
      <MainFooter />
    </div>
  );
}
