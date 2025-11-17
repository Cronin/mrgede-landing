import HeroScroll from './components/HeroScroll';
import ContentShowcase from './components/ContentShowcase';
import BrandCarousel from './components/BrandCarousel';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroScroll />
      <ContentShowcase />
      <BrandCarousel />
      <ContactCTA />
      <Footer />
    </main>
  );
}
