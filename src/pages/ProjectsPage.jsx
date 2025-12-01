import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const pageMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } },
};

const ProjectsPage = () => {
  return (
    <motion.main
      {...pageMotion}
      className="flex flex-col gap-12 bg-gradient-to-b from-[#141a20] via-[#1d242b] to-[#2b3239] px-6 pb-24 pt-32 md:px-12 lg:px-20"
    >
      <SectionTitle
        eyebrow="Portafolio"
        title="Proyectos destacados en Latinoamérica y Europa."
        subtitle="Cada obra refleja nuestra búsqueda constante por la proporción, la luz natural y el detalle constructivo."
        align="center"
      />

      <div className="flex flex-wrap gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-1 basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </motion.main>
  );
};

export default ProjectsPage;

