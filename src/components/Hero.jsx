import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink, User } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { getAssetUrl } from "../utils/assetHelper";

export default function Hero() {
  const { hero, contact } = portfolioData;

  return (
    <section id="home" className="pt-24 sm:pt-32 pb-12 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold">
              <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
              {hero.badge}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="mt-6 text-6xl sm:text-7xl font-black leading-[1.1] tracking-tight text-white">
              <span className="text-white/70">I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">
                {hero.name}
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-white/90">
              {hero.role}
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl font-medium">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 rounded-full bg-white text-black font-black flex items-center gap-2 transition-shadow hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]"
              >
                Explore Work <ExternalLink size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={getAssetUrl(hero.cvUrl)}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full border border-white/10 glass text-white font-black flex items-center gap-2 transition-all hover:bg-white/5"
              >
                Download CV <Download size={18} />
              </motion.a>

              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: contact.githubUrl },
                  { icon: Linkedin, href: contact.linkedinUrl },
                  { icon: Mail, href: `mailto:${contact.email}` }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all shadow-xl"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-12 pt-10 border-t border-white/5 flex flex-wrap gap-3">
              {hero.tags.map((t) => (
                <span key={t} className="text-xs font-bold text-white/40 uppercase tracking-widest">
                  {t} •
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="relative lg:ml-auto"
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/20 blur-[120px] rounded-full -z-10"></div>

          <div className="relative rounded-full p-2 border border-white/5 bg-[#070313] shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src={getAssetUrl(hero.profileImage)}
              alt={hero.name}
              className="w-full h-full object-cover rounded-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700 aspect-square max-w-[450px]"
            />
          </div>

          {/* Floating Element Mockup */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl flex items-center gap-3 border border-white/10 shadow-2xl"
          >
            <div className="h-10 w-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/50">
              <User size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Interactive</p>
              <p className="text-sm font-black">User Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
