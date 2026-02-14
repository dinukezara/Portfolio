import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-[#070313]/70 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 grid place-items-center font-black text-xl shadow-lg shadow-purple-500/20">
            {portfolioData.hero.name.charAt(0)}
          </div>
          <Link to="/" className="font-black text-xl tracking-tight brand-font hidden sm:block">
            {portfolioData.hero.name}
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-2 text-sm transition-all duration-300 ${location.pathname === link.path ? "text-white" : "text-white/60 hover:text-white/90"
                }`}>
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            className="text-sm px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-bold transition-all hover:border-purple-500/30 shadow-inner">
            Hire Me
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
