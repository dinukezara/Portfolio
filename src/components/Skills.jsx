import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Skills({ mode = "marquee" }) {
  const { skills } = portfolioData;
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  if (mode === "grid") {
    return (
      <div className="flex flex-wrap gap-3">
        {skills.map((s, index) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-white/50 hover:text-white hover:border-purple-500/30 transition-all cursor-default"
          >
            {s}
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden py-10 border-y border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedSkills.map((s, index) => (
          <div key={index} className="flex items-center">
            <span className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white/20 px-8 hover:text-purple-500/50 transition-colors cursor-default">
              {s}
            </span>
            <span className="h-2 w-2 rounded-full bg-purple-500/20"></span>
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#070313] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#070313] to-transparent z-10"></div>
    </div>
  );
}
