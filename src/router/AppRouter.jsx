import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import useScrollToTop from '../hooks/useScrollToTop';

const AppRouter = () => {
  const location = useLocation();
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#0d1114] via-[#181e24] to-[#2c3238] text-white">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/proyecto/:id" element={<ProjectDetailPage />} />
            <Route path="/estudio" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default AppRouter;

