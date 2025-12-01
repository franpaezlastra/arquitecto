import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import About from '../components/About';
import Services from '../components/Services';
import Workflow from '../components/Workflow';
import Testimonials from '../components/Testimonials';

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } },
};

const AboutPage = () => {
  return (
    <motion.main
      {...pageMotion}
      className="flex flex-col bg-gradient-to-b from-[#11171c] via-[#1b2127] to-[#2a3138] pt-24"
    >
      <section className="flex flex-col gap-8 px-6 pb-16 pt-12 text-white md:px-12 lg:px-20">
        <SectionTitle
          eyebrow="Estudio"
          title="Arquitectura, interiorismo y dirección integral."
          subtitle="Acompañamos a desarrolladores, familias y organizaciones que buscan resultados excepcionales, alineando estrategia, diseño y ejecución."
        />
        <p className="max-w-4xl text-lg text-grisClaro">
          Combinamos pensamiento crítico, sensibilidad material y tecnología
          contemporánea. Nuestro equipo senior lidera cada etapa con metodologías
          ágiles, documentación precisa y una sólida red de especialistas.
        </p>
      </section>
      <About />
      <Services />
      <Workflow />
      <Testimonials />
    </motion.main>
  );
};

export default AboutPage;

