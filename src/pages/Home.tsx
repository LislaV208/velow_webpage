
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import MusicSection from '../components/sections/MusicSection';
import MediaSection from '../components/sections/MediaSection';
import MerchSection from '../components/sections/MerchSection';
import ShowsSection from '../components/sections/ShowsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white snap-y snap-mandatory overflow-y-auto">
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <ShowsSection />
      <MediaSection />
      <MerchSection />
      <ContactSection />
    </div>
  );
};

export default Home;