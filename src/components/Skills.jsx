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
            className="px-4 py-2 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] text-xs font-black uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all cursor-default shadow-sm"
          >
            {s}
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden py-10 border-y border-[var(--glass-border)]">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedSkills.map((s, index) => (
          <div key={index} className="flex items-center">
            <span className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[var(--text-primary)] opacity-20 dark:opacity-10 px-8 hover:opacity-100 hover:text-[var(--accent-primary)] transition-all cursor-default">
              {s}
            </span>
            <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)] opacity-20"></span>
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10"></div>
    </div>
  );
}
