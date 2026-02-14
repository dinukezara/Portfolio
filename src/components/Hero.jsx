import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section id="home" className="pt-12 sm:pt-20 pb-12 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
              {hero.badge}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="mt-6 text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight text-white">
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">
                {hero.name}
              </span>
              <br />
              <span className="text-white/90">{hero.role}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl font-medium">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] font-bold transition-shadow duration-300"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={hero.cvUrl}
                download="Dinuka_Withanage_CV.pdf"
                className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 font-bold transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Download CV
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 rounded-2xl border border-white/10 text-white/50 hover:text-white font-bold transition-all"
              >
                Contact Me
              </motion.a>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-wrap gap-2">
              {hero.tags.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="relative group lg:ml-10"
        >
          {/* Decorative rings */}
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-20 group-hover:opacity-40 blur-lg transition duration-1000 group-hover:duration-200"></div>

          <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-[#0c081a] aspect-[4/5] shadow-2xl glass transition-all duration-700">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="/images/profile.png"
              alt={hero.name}
              className="w-full h-full object-cover object-top grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Stats/Floating items could go here */}
        </motion.div>
      </div>
    </section>
  );
}
