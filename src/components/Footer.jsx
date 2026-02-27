import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { hero, contact } = portfolioData;

  return (
    <footer className="mt-32 pb-12 border-t border-[var(--glass-border)] transition-colors duration-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-black mb-6 text-[var(--text-primary)]">
              {hero.name.split(" ")[0]}<span className="text-[var(--accent-primary)]">.</span>
            </h3>
            <p className="text-[var(--text-secondary)] opacity-60 text-sm font-medium leading-relaxed mb-6">
              Crafting pixel-perfect, engaging, and accessible digital experiences.
            </p>
            <div className="flex items-center gap-2 text-[var(--text-secondary)] opacity-40 text-xs font-bold uppercase tracking-wider">
              <MapPin size={14} className="text-[var(--accent-primary)]" />
              {contact.location}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-[var(--text-primary)] opacity-80 mb-6 font-outfit">Explore</h4>
            <ul className="space-y-4 font-inter">
              {["Home", "About", "Projects", "Experience", "Achievements"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] text-sm font-medium transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume/Education could go here */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-[var(--text-primary)] opacity-80 mb-6 font-outfit">Resume</h4>
            <ul className="space-y-4 font-inter">
              <li>
                <a href={hero.cvUrl} className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] text-sm font-medium transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <Link to="/about" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] text-sm font-medium transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] text-sm font-medium transition-colors">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-[var(--text-primary)] opacity-80 mb-6 font-outfit">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Github, href: contact.githubUrl },
                { icon: Linkedin, href: contact.linkedinUrl },
                { icon: Instagram, href: contact.instagramUrl },
                { icon: Mail, href: `mailto:${contact.email}` }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all shadow-sm"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 border-t border-[var(--glass-border)] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[var(--text-secondary)] opacity-30">
          <span>© {new Date().getFullYear()} {hero.name.toUpperCase()}. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-1">
            DESIGNED & BUILT WITH <span className="text-[var(--accent-primary)] text-base">♥</span>
          </div>
        </div>
      </div>
    </footer>

  );
}
