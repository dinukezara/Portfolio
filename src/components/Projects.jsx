import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { getAssetUrl } from "../utils/assetHelper";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 lg:py-32 text-[var(--text-primary)]">
      <Reveal>
        <h2 className="text-5xl sm:text-7xl font-black tracking-tighter text-center mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400">Projects</span>
        </h2>
        <p className="text-[var(--text-secondary)] opacity-60 text-center max-w-2xl mx-auto text-lg font-medium mb-20">
          A selection of projects that showcase my passion for building digital experiences.
        </p>
      </Reveal>

      <div className="space-y-32">
        {projects.map((p, index) => (
          <Reveal key={p.id} delay={0.2}>
            <div className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative group rounded-3xl overflow-hidden border border-[var(--glass-border)] shadow-2xl bg-[var(--glass-bg)] aspect-video"
                >
                  {p.image ? (
                    <img
                      src={getAssetUrl(p.image)}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-[var(--text-secondary)] opacity-10 flex items-center justify-center text-5xl">🖼️</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-transparent opacity-60"></div>
                </motion.div>
              </div>

              {/* Info Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest">
                    {p.tag}
                  </span>
                  <span className="text-[var(--text-secondary)] opacity-40 text-xs font-bold">2024 - 2025</span>
                </div>

                <h3 className="text-4xl sm:text-5xl font-black mb-6 leading-tight tracking-tight">
                  {p.title}
                </h3>

                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 font-medium">
                  {p.desc}
                </p>

                <div className="mb-10">
                  <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[var(--text-primary)] opacity-80 mb-4">
                    <CheckCircle2 size={16} className="text-purple-600 dark:text-purple-400" /> Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Modern UI/UX Design",
                      "Responsive Layout",
                      "High Performance",
                      "Scalable Architecture"
                    ].map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-[var(--text-secondary)] opacity-60 text-sm font-medium">
                        <span className="h-1 w-1 rounded-full bg-[var(--accent-primary)]"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--glass-border)]">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={p.live}
                    className="px-8 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-black flex items-center gap-2 shadow-xl"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-8 py-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] font-bold flex items-center gap-2 transition-all"
                  >
                    <Github size={18} /> Source Code
                  </motion.a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

  );
}
