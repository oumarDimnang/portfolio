import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}