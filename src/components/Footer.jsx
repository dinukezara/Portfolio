import { Link } from 'react-router-dom'
import { Github, Linkedin, Instagram, Mail, MapPin } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()
  const { contact } = portfolioData

  return (
    <footer className="bg-ink-950 border-t border-white/5 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">

          {/* Col 1 — Brand */}
          <div className="col-span-1 border-r-0 md:border-r md:border-white/5 pr-8">
            <div className="group inline-block mb-6 relative" data-cursor="hover">
              <span className="font-display text-3xl font-bold tracking-tight text-white group-hover:text-signal transition-colors duration-500">
                DK.
              </span>
              <div className="absolute top-1/2 left-full ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-mist-900 text-xs text-nowrap">
                Dinuka Keshara
              </div>
            </div>
            <p className="text-mist-900 text-sm mb-8 leading-relaxed max-w-xs">
              Data Scientist & Software Engineer.<br />
              Building intelligent, scalable solutions.
            </p>
            <div className="flex gap-4 text-mist-900">
              <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 -ml-2 rounded-full hover:bg-white/5" data-cursor="hover">
                <Github size={20} />
              </a>
              <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5" data-cursor="hover">
                <Linkedin size={20} />
              </a>
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5" data-cursor="hover">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="col-span-1">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Navigate</h4>
            <ul className="flex flex-col gap-4 text-sm text-mist-500">
              <li><Link to="/about" className="hover:text-white transition-colors" data-cursor="text">About Me</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors" data-cursor="text">Projects</Link></li>
              <li><Link to="/experience" className="hover:text-white transition-colors" data-cursor="text">Experience</Link></li>
              <li><Link to="/achievements" className="hover:text-white transition-colors" data-cursor="text">Achievements</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors" data-cursor="text">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 — Skills */}
          <div className="col-span-1">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Tech Stack</h4>
            <ul className="flex flex-col gap-4 text-sm text-mist-500">
              {portfolioData.skills.slice(0, 6).map(skill => (
                <li key={skill} className="hover:text-white transition-colors capitalize">{skill}</li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="col-span-1">
            <h4 className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-mist-500">
              <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors flex items-center gap-2" data-cursor="hover">
                <Mail size={14} />
                {contact.email}
              </a>
              <p className="flex items-center gap-2 text-mist-700 leading-relaxed">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                {contact.location}
              </p>
              <a
                href={portfolioData.hero.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-signal hover:underline mt-2 inline-block font-mono text-xs"
                data-cursor="hover"
              >
                Download CV →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-mist-900">
          <p>© {year} Dinuka Keshara Withanage. All rights reserved.</p>
          <p>Designed with <span className="text-ember">♥</span> in {contact.location}</p>
          <div className="flex gap-4">
            <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <span>·</span>
            <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
