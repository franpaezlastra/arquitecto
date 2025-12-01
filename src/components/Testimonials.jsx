import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  return (
    <section className="flex flex-col gap-12 bg-gradient-to-b from-[#0f1418] via-[#161b21] to-[#1f262d] px-6 py-16 sm:py-24 md:px-12 lg:px-20">
      <SectionTitle
        eyebrow="Testimonios"
        title="Confianza construida a través de cada entrega."
        subtitle="Las organizaciones con las que colaboramos valoran nuestra visión estratégica, calidad constructiva y acompañamiento cercano."
        align="center"
      />

      <div className="flex flex-wrap gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            className="flex flex-1 basis-full flex-col gap-6 rounded-3xl border border-white/10 bg-grisOscuro/70 p-8 lg:basis-[calc(33.333%-16px)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20">
                <img
                  src={testimonial.imagen}
                  alt={testimonial.nombre}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-grisClaro">
                {testimonial.nombre}
              </p>
            </div>
            <p className="text-xl text-white">{`"${testimonial.mensaje}"`}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

