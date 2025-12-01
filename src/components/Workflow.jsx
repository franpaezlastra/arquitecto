import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { workflow } from '../data/workflow';

const Workflow = () => {
  return (
    <section className="flex flex-col gap-12 bg-grisClaro px-6 py-16 text-grisOscuro sm:py-24 md:px-12 lg:px-20">
      <SectionTitle
        eyebrow="Proceso"
        title="Un recorrido claro de principio a fin."
        subtitle="Priorizamos la transparencia y la comunicación constante para que cada hito del proyecto avance con certeza."
        tone="light"
      />

      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto flex w-full max-w-5xl flex-col gap-4 overflow-hidden rounded-3xl border border-grisMedio bg-white/90 p-10 text-center shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-grisClaro to-white opacity-60" />
          <div className="relative flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.4em] text-grisMedio">
              Metodología
            </p>
            <p className="text-3xl text-grisOscuro">
              Transformamos desafíos complejos en procesos claros, combinando
              investigación, creatividad y gestión rigurosa.
            </p>
            <p className="text-base text-grisMedio">
              Cada proyecto cuenta con un equipo senior dedicado, sesiones de
              revisión semanales y tableros colaborativos para mantener el foco y la
              trazabilidad de decisiones.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {workflow.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                ease: 'easeOut',
              }}
              className="flex items-start gap-4 rounded-2xl border border-grisMedio/40 bg-white/70 p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-grisMedio text-sm font-medium tracking-[0.3em] text-grisOscuro">
                  {String(step.id).padStart(2, '0')}
                </div>
                {index !== workflow.length - 1 && (
                  <div className="h-12 w-px bg-grisMedio/60 md:hidden" />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.4em] text-grisMedio">
                  {step.titulo}
                </p>
                <p className="text-lg text-grisOscuro">{step.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;

