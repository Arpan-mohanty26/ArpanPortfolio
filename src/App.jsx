import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-inter">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
