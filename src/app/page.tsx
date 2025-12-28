import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}
