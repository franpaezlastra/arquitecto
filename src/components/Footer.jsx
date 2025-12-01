import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'Behance', url: 'https://behance.net', icon: 'behance' },
  ];

  const footerLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Proyectos', to: '/proyectos' },
    { label: 'Estudio', to: '/estudio' },
    { label: 'Contacto', to: '/contacto' },
  ];

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#0f1418] via-[#161b21] to-[#1a2026]">
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-8">
          {/* Información del estudio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="mb-4 font-serif text-2xl text-white">Estudio Arquitectos</h3>
              <p className="text-sm leading-relaxed text-grisClaro">
                Diseñamos espacios esenciales, precisos y con identidad.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm">
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.3em] text-grisClaro">
                  Dirección
                </p>
                <p className="text-white">Av. Libertador 2450, Buenos Aires</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.3em] text-grisClaro">
                  Email
                </p>
                <a
                  href="mailto:hola@estudioarquitectos.com"
                  className="text-white underline-offset-4 transition hover:underline"
                >
                  hola@estudioarquitectos.com
                </a>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.3em] text-grisClaro">
                  Teléfono
                </p>
                <a
                  href="tel:+541155552222"
                  className="text-white transition hover:text-grisClaro"
                >
                  +54 11 5555 2222
                </a>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.3em] text-grisClaro">
                  Horario
                </p>
                <p className="text-white">Lunes a viernes - 09:00 - 19:00</p>
              </div>
            </div>
          </motion.div>

          {/* Navegación y redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-8 lg:items-end"
          >
            {/* Navegación */}
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.4em] text-grisClaro">
                Navegación
              </p>
              <nav className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-white transition hover:text-grisClaro"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Redes sociales */}
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.4em] text-grisClaro">
                Redes sociales
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
                    aria-label={social.name}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      {social.icon === 'linkedin' && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      )}
                      {social.icon === 'instagram' && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      )}
                      {social.icon === 'behance' && (
                        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.94 2.49-5.92 5.564-5.92 3.06 0 4.914 1.618 5.389 4.242h-3.916c-.23-1.53-1.445-2.21-2.912-2.21-2.209 0-3.29 1.433-3.29 3.888 0 2.576 1.13 3.895 3.29 3.895 1.702 0 2.709-1.033 3.061-2.388h3.913zm-6.428-4.169h5.067c-.06-1.687-1.225-2.766-2.816-2.766-1.705 0-2.771 1.214-2.771 2.881 0 .557.159 1.103.52 1.885zM2 11h7v-1H2v1zm0 4h7v-1H2v1zm0-8h7V6H2v1zm9.348 8.539c-1.577 0-2.873-1.234-2.873-2.919 0-1.636 1.243-2.978 2.873-2.978 1.689 0 2.849 1.383 2.873 2.978H9.277c.057 1.178 1.144 1.803 2.071 1.803 1.416 0 1.967-.771 2.101-1.342H14.1c-.252 1.67-1.666 2.92-3.752 2.92z" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="mt-12 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.3em] text-grisClaro md:flex-row md:items-center md:justify-between">
            <span>© 2025 Estudio Arquitectos - Todos los derechos reservados.</span>
        <span>Diseño minimalista - Flexbox system</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
