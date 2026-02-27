import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Folder, Mail, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const location = useLocation();
  const { theme } = useTheme();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Projects", path: "/projects", icon: Folder },
    { name: "Achievements", path: "/achievements", icon: Trophy },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit drop-shadow-xl">
      <nav className="glass rounded-full px-2 py-2 flex items-center gap-1 border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl shadow-lg transition-all duration-500">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = link.icon;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 group flex items-center gap-2 ${isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
            >
              <Icon size={18} className={`${isActive ? "text-[var(--accent-primary)]" : "opacity-70"}`} />
              <span className="text-sm font-semibold hidden sm:block">
                {link.name}
              </span>

              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-purple-500/10 dark:bg-purple-500/20 rounded-full border border-purple-500/20 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </Link>
          );
        })}
        <div className="h-6 w-[1px] bg-[var(--glass-border)] mx-1" />
        <ThemeToggle />
      </nav>
    </header>
  );
}
