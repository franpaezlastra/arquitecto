import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import interiorImage from '../assets/img/interior.png';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col gap-10 bg-gradient-to-b from-[#141a20] via-[#1b232a] to-[#262d35] px-6 py-16 sm:py-24 md:px-12 lg:px-20"
    >
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1">
          <SectionTitle
            eyebrow="Sobre el estudio"
            title="Diseñamos espacios esenciales, precisos y con identidad."
            subtitle="Nuestro proceso combina investigación, visión estratégica y una estética depurada para materializar proyectos que dialogan con su entorno."
          />
          <p className="mt-8 text-base leading-relaxed text-grisClaro sm:text-lg">
            Este sitio fue concebido y diseñado por un Diseñador UX/UI Senior con
            más de 10 años de experiencia, priorizando una experiencia visual limpia,
            intuitiva y contemporánea. Cada pantalla responde a un sistema modular
            que refuerza la narrativa del estudio y su compromiso con la excelencia.
          </p>
          <div className="mt-8 flex flex-wrap gap-8 text-sm uppercase tracking-[0.4em] text-grisClaro">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-serif text-white">+15</span>
              <span>años de trayectoria</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-serif text-white">+120</span>
              <span>proyectos entregados</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-negro">
            <img
              src={interiorImage}
              alt="Interior minimalista del estudio"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

