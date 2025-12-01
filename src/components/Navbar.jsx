import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Estudio', to: '/estudio' },
  { label: 'Contacto', to: '/contacto' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div
        className={`flex w-full items-center justify-between px-6 py-4 transition-all duration-300 md:px-12 md:py-5 ${
          scrolled
            ? 'border-b border-white/10 bg-grisOscuro/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <Link
          to="/"
          className="font-serif text-lg tracking-wide text-white transition hover:text-grisClaro md:text-xl"
          onClick={closeMenu}
        >
          Estudio Arquitectos
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.35em] text-grisClaro md:flex lg:gap-10">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative transition-colors hover:text-white ${
                  isActive
                    ? 'text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-white after:content-[""]'
                    : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            // X icon when open
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Hamburger icon when closed
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90"
            onClick={closeMenu}
          />

          {/* Menu Panel - Full Screen */}
          <div className="relative z-50 flex h-full flex-col bg-grisOscuro">
            {/* Header with close button */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <span className="font-serif text-lg text-white">Menú</span>
              <button
                type="button"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Cerrar menú"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-1 flex-col justify-center px-6 py-8">
              {links.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `mb-4 block border-b border-white/10 pb-4 text-center text-xl uppercase tracking-[0.4em] transition-colors ${
                      isActive ? 'text-white font-semibold' : 'text-grisClaro hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;

