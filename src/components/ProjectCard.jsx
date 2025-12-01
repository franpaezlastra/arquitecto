import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative flex basis-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#151b22] md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
    >
      <Link to={`/proyecto/${project.id}`} className="relative flex flex-1 flex-col">
        <div className="w-full overflow-hidden rounded-t-3xl border-b border-white/10 bg-black/20">
          <img
            src={project.imagenPrincipal}
            alt={project.titulo}
            className="h-auto w-full  object-contain"
          />
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 bg-negro/40 px-6 py-6">
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.4em] text-grisClaro">
              {project.categoria}
            </p>
            <h3 className="font-serif text-2xl text-white">{project.titulo}</h3>
          </div>
          <p className="text-grisClaro">{project.descripcion}</p>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProjectCard;

