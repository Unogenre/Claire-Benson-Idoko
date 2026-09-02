import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Books } from '@/components/sections/Books';
import { Experience } from '@/components/sections/Experience';
import { Blog } from '@/components/sections/Blog';
import { Newsletter } from '@/components/sections/Newsletter';
import { ImpactAtGlance } from '@/components/sections/ImpactAtGlance';
import { Mentorship } from '@/components/sections/Mentorship';
import { Press } from '@/components/sections/Press';

export function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Books />
        <ImpactAtGlance />
        <Experience />
        <Mentorship />
        <Blog />
        <Press />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
