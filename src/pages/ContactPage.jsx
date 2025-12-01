import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Contact from '../components/Contact';

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } },
};

const ContactPage = () => {
  return (
    <motion.main
      {...pageMotion}
      className="flex flex-col bg-gradient-to-b from-grisOscuro via-grisMedio to-grisClaro pt-24"
    >
      <section className="flex flex-col gap-6 px-6 pb-10 pt-12 md:px-12 lg:px-20">
        <SectionTitle
          eyebrow="Contacto directo"
          title="Estamos listos para iniciar una nueva colaboración."
          subtitle="Coordinamos workshops iniciales, visitas a obra y sesiones estratégicas. Agenda una conversación personalizada."
          align="center"
        />
      </section>
      <Contact />
    </motion.main>
  );
};

export default ContactPage;

