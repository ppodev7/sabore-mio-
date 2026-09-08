import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Differentials } from '../components/Differentials';
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <About />
      <Differentials />
      <Testimonials />
      <Contact />
    </>
  );
}
