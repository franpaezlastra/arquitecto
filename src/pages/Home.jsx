import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Workflow from '../components/Workflow';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } },
};

const Home = () => {
  return (
    <motion.main
      {...pageMotion}
      className="flex flex-col bg-gradient-to-b from-transparent via-[#11161b]/60 to-[#1c232a] pt-24"
    >
      <Hero />
      <About />
      <Services />
      <Projects />
      <Workflow />
      <Testimonials />
      <Contact />
    </motion.main>
  );
};

export default Home;

