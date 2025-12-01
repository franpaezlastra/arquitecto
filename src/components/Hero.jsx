import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../assets/img/principal.png';

const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#0c1013] via-[#11181f] to-[#172028]">
      <img
        src={heroImage}
        alt="Fachada moderna"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1118]/70 to-[#0f151b]" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <motion.p
          className="text-xs uppercase tracking-[0.6em] text-grisClaro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
        >
          Estudio Arquitectos
        </motion.p>
        <motion.h1
          className="mt-6 font-serif text-4xl text-white sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
        >
          Arquitectura que inspira. Espacios que trascienden.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl text-lg text-grisClaro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
        >
          Diseñamos proyectos residenciales, culturales y corporativos que
          articulan luz, materiales y proporción para crear experiencias
          memorables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          className="mt-10"
        >
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-3 rounded-full border border-white/40 px-8 py-4 text-sm uppercase tracking-[0.4em] text-white transition hover:bg-white hover:text-black"
          >
            Ver proyectos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

