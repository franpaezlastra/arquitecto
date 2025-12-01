import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { services } from '../data/services';

const Services = () => {
  return (
    <section className="flex flex-col gap-12 bg-gradient-to-b from-[#11161c] via-[#1b222a] to-[#2b323a] px-6 py-16 sm:py-24 md:px-12 lg:px-20">
      <SectionTitle
        eyebrow="Servicios"
        title="Soluciones integrales con una mirada estratégica."
        subtitle="Acompañamos a nuestros clientes desde la idea inicial hasta la entrega final, articulando equipos multidisciplinarios y tecnología de vanguardia."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05, duration: 0.6, ease: 'easeOut' }}
            className="flex min-h-[260px] flex-col justify-between rounded-3xl border border-white/10 bg-[#1b242c]/80 p-6 transition hover:border-white/30"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-sm uppercase tracking-[0.3em] text-grisClaro">
                {String(service.id).padStart(2, '0')}
              </div>
              <h3 className="font-serif text-2xl text-white">{service.titulo}</h3>
            </div>
            <p className="mt-6 text-base text-grisClaro">
              {service.descripcion}
            </p>
            <div className="mt-6 w-full rounded-2xl border border-white/5 bg-black/20 p-2">
              <img
                src={service.imagen}
                alt={service.titulo}
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Services;

