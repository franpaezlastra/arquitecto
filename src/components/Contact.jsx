import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-[#12171c] via-[#1d242b] to-[#2d343c] px-6 py-16 sm:py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-grisClaro">
            Contacto
          </p>
          <h2 className="mb-4 font-serif text-4xl text-white md:text-5xl">
            Conversemos sobre tu próximo proyecto.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-grisClaro">
            Respondemos cada consulta con la misma dedicación que ponemos en nuestras obras. Cuéntanos qué necesitas y armemos un plan a medida.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#1c242c]/80 p-8 md:p-12"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="nombre"
                className="text-xs uppercase tracking-[0.4em] text-grisClaro"
              >
              Nombre completo
            </label>
            <input
                id="nombre"
              type="text"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-grisClaro/60 focus:border-white/40 focus:bg-white/10 focus:outline-none transition-colors"
              placeholder="Tu nombre"
            />
          </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.4em] text-grisClaro"
              >
              Email
            </label>
            <input
                id="email"
              type="email"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-grisClaro/60 focus:border-white/40 focus:bg-white/10 focus:outline-none transition-colors"
              placeholder="nombre@empresa.com"
            />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="telefono"
              className="text-xs uppercase tracking-[0.4em] text-grisClaro"
            >
              Teléfono
            </label>
            <input
              id="telefono"
              type="tel"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-grisClaro/60 focus:border-white/40 focus:bg-white/10 focus:outline-none transition-colors"
              placeholder="+54 11 5555 5555"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="mensaje"
              className="text-xs uppercase tracking-[0.4em] text-grisClaro"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              rows="6"
              className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-grisClaro/60 focus:border-white/40 focus:bg-white/10 focus:outline-none transition-colors"
              placeholder="Describe brevemente tu proyecto"
            />
          </div>

          <div className="mt-2 flex justify-start">
          <button
            type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-10 py-4 text-xs uppercase tracking-[0.4em] text-white transition-all hover:border-white/50 hover:bg-white hover:text-black"
          >
            Enviar mensaje
          </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

