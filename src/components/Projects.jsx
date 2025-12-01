import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const destacados = projects.slice(0, 3);

  return (
    <section className="flex flex-col gap-12 bg-gradient-to-b from-[#13181e] via-[#1b2229] to-[#2a323a] px-6 py-16 sm:py-24 md:px-12 lg:px-20">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <SectionTitle
          eyebrow="Proyectos"
          title="Arquitectura precisa, pensada para perdurar."
          subtitle="Seleccionamos algunos de nuestros proyectos recientes que sintetizan nuestra aproximación contemporánea."
        />
        <Link
          to="/proyectos"
          className="inline-flex items-center gap-3 self-start rounded-full border border-white/30 px-8 py-4 text-xs uppercase tracking-[0.4em] text-white transition hover:bg-white hover:text-black lg:self-auto"
        >
          Ver todos
        </Link>
      </div>

      <div className="flex flex-wrap gap-6">
        {destacados.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            className="flex-1 basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

