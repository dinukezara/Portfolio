import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Folder, Mail, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Projects", path: "/projects", icon: Folder },
    { name: "Achievements", path: "/achievements", icon: Trophy },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit">
      <nav className="glass rounded-full px-4 py-2 flex items-center gap-2 border border-white/10 shadow-2xl backdrop-blur-xl">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 rounded-full transition-all duration-500 group flex items-center gap-2 ${isActive ? "text-white" : "text-white/50 hover:text-white"
                }`}
            >
              <Icon size={18} className={`${isActive ? "text-purple-400" : ""}`} />
              <span className="text-sm font-bold hidden sm:block">
                {link.name}
              </span>

              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-purple-500/10 rounded-full border border-purple-500/20 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
