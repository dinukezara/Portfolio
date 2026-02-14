import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { getAssetUrl } from "../utils/assetHelper";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 lg:py-32 text-white">
      <Reveal>
        <span className="text-purple-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Selected Works</span>
        <h2 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.9]">
          Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Studies</span>
        </h2>
        <p className="text-white/50 mt-10 text-xl max-w-2xl font-medium leading-relaxed">
          A showcase of my commitment to precision, scalability, and user-centric design across various technical domains.
        </p>
      </Reveal>

      <div className="mt-24 grid md:grid-cols-2 gap-12">
        {projects.map((p, index) => (
          <Reveal key={p.id} delay={0.2 + (index * 0.1)} width="100%">
            <motion.div
              whileHover={{ y: -12 }}
              className="rounded-[40px] border border-white/[0.05] bg-[#0c081a] overflow-hidden hover:border-purple-500/20 transition-all duration-500 group flex flex-col h-full shadow-2xl relative"
            >
              <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                {p.image ? (
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={getAssetUrl(p.image)}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black/20">
                    <span className="text-white/20 text-5xl">🖼️</span>
                  </div>
                )}

                <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-[10px] uppercase tracking-[0.3em] px-4 py-2 rounded-xl bg-[#0c081a]/90 backdrop-blur-md border border-white/10 text-white font-black shadow-2xl">
                    {p.tag}
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow relative z-20">
                <h3 className="text-3xl font-black group-hover:text-purple-400 transition-colors leading-tight tracking-tight">{p.title}</h3>

                <p className="mt-6 text-white/40 text-lg leading-relaxed font-medium flex-grow">
                  {p.desc}
                </p>

                <div className="mt-12 flex items-center justify-between">
                  <div className="flex gap-6">
                    <motion.a
                      whileHover={{ opacity: 0.7 }}
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-black uppercase tracking-[0.2em] text-white/30 border-b border-white/10 pb-1">
                      Check Source
                    </motion.a>
                    {p.live !== "#" && (
                      <motion.a
                        whileHover={{ opacity: 0.7 }}
                        href={p.live}
                        className="text-xs font-black uppercase tracking-[0.2em] text-purple-400 border-b border-purple-400/30 pb-1">
                        Live Preview
                      </motion.a>
                    )}
                  </div>

                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="h-10 w-10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
