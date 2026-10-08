import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Differentials } from '../components/Differentials';
import { Gallery } from '../components/Gallery';
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { Ticker } from '../components/Ticker';

export function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Menu />
      <Gallery />
      <About />
      <Stats />
      <Differentials />
      <Testimonials />
      <Contact />
    </>
  );
}
