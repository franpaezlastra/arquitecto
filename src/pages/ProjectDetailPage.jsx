import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const pageMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } },
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <motion.main
        {...pageMotion}
        className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-b from-[#0d1114] via-[#181e24] to-[#2c3238] px-6 text-center text-white"
      >
        <p className="font-serif text-2xl">Proyecto no encontrado.</p>
        <Link
          to="/proyectos"
          className="rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white transition hover:bg-white hover:text-black"
        >
          Volver a proyectos
        </Link>
      </motion.main>
    );
  }

  return (
    <motion.main
      {...pageMotion}
      className="flex flex-col bg-gradient-to-b from-[#0d1114] via-[#181e24] to-[#2c3238] pt-24"
    >
      {/* Main Content - Compact */}
      <section className="flex flex-col px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex flex-col gap-1"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-grisClaro">
              {project.categoria}
            </p>
            <h1 className="font-serif text-2xl text-white sm:text-3xl md:text-4xl">
              {project.titulo}
            </h1>
            <p className="text-sm text-grisClaro">{project.ubicacion}</p>
          </motion.div>

          {/* Image and Metadata Side by Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex flex-col gap-4 md:flex-row md:gap-6"
          >
            {/* Featured Image - Smaller */}
            <div className="w-full overflow-hidden rounded-lg md:w-2/3">
              <img
                src={project.imagenPortada || project.imagenPrincipal}
                alt={project.titulo}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Metadata - Side */}
            <div className="flex w-full flex-col justify-center gap-4 border-t border-white/10 pt-4 md:w-1/3 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.3em] text-grisClaro">
                  Año
                </p>
                <p className="font-serif text-xl text-white">{project.ano}</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.3em] text-grisClaro">
                  Superficie
                </p>
                <p className="font-serif text-xl text-white">{project.superficie}</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.3em] text-grisClaro">
                  Ubicación
                </p>
                <p className="font-serif text-xl text-white">{project.ubicacion}</p>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <p className="text-sm leading-relaxed text-grisClaro md:text-base">
              {project.descripcion}
            </p>
          </motion.div>

          {/* Gallery */}
          {project.galeria && project.galeria.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="mb-3 font-serif text-xl text-white">Galería</h2>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {project.galeria.slice(0, 4).map((image, index) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-lg"
                  >
                    <img
                      src={image}
                      alt={`${project.titulo} - Vista ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-between border-t border-white/10 pt-4"
          >
            <Link
              to="/proyectos"
              className="text-sm uppercase tracking-[0.3em] text-grisClaro transition-colors hover:text-white"
            >
              ← Volver
            </Link>
            <Link
              to="/contacto"
              className="rounded-full border border-white/30 px-6 py-2 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-black"
            >
              Contactar
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default ProjectDetailPage;
