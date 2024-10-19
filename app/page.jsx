
import About from '@/components/About';
import Hero from '@/components/Hero'
import Reviews from '@/components/Reviews';
import Service from '@/components/Service';
import Work from '@/components/Work';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Work />
      <Reviews />
    </main>
  );
}
