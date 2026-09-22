import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl bg-ink-950/80 border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer z-50" data-cursor="hover">
            <span className="font-display text-2xl font-bold tracking-tight text-white hover:text-signal transition-colors duration-300">
              DK.
            </span>
            <div className="w-2 h-2 rounded-full bg-signal animate-pulse-slow"></div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-body text-sm transition-colors relative group ${
                    isActive ? 'text-white' : 'text-mist-900 hover:text-white'
                  }`}
                  data-cursor="hover"
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-signal transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={portfolioData.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-ember text-ember text-sm hover:bg-ember hover:text-ink-950 transition-colors inline-flex items-center gap-2"
              data-cursor="hover"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink-900 z-40 flex flex-col justify-center px-6"
          >
            <nav className="flex flex-col gap-6 mt-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Link
                    to={link.href}
                    className="font-display text-6xl text-white hover:text-signal transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-6 flex gap-6 text-mist-900"
            >
              <a href={portfolioData.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={20} /></a>
              <a href={portfolioData.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href={portfolioData.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
