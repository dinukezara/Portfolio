import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { hero, contact } = portfolioData;

  return (
    <footer className="mt-32 pb-12 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-black mb-6">
              {hero.name.split(" ")[0]}<span className="text-purple-400">.</span>
            </h3>
            <p className="text-white/40 text-sm font-medium leading-relaxed mb-6">
              Crafting pixel-perfect, engaging, and accessible digital experiences.
            </p>
            <div className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase tracking-wider">
              <MapPin size={14} className="text-purple-400" />
              {contact.location}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-white/80 mb-6">Explore</h4>
            <ul className="space-y-4">
              {["Home", "About", "Projects", "Experience", "Achievements"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-white/40 hover:text-purple-400 text-sm font-medium transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume/Education could go here */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-white/80 mb-6">Resume</h4>
            <ul className="space-y-4">
              <li>
                <a href={hero.cvUrl} className="text-white/40 hover:text-purple-400 text-sm font-medium transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <Link to="/about" className="text-white/40 hover:text-purple-400 text-sm font-medium transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/40 hover:text-purple-400 text-sm font-medium transition-colors">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-white/80 mb-6">Connect</h4>
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
                  className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 border-t border-white/5 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white/20">
          <span>© {new Date().getFullYear()} {hero.name.toUpperCase()}. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-1">
            DESIGNED & BUILT WITH <span className="text-purple-500 text-base">♥</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
