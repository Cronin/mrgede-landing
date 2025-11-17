import Hero from './components/Hero';
import SocialMetrics from './components/SocialMetrics';
import ContentShowcase from './components/ContentShowcase';
import BrandCarousel from './components/BrandCarousel';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialMetrics />
      <ContentShowcase />
      <BrandCarousel />
      <ContactCTA />
      <Footer />
    </main>
  );
}
