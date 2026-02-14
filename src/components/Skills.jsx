import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((s, index) => (
        <motion.span
          key={s}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white/90 hover:border-purple-500/30 hover:bg-white/10 transition-all cursor-default shadow-lg shadow-purple-500/5"
        >
          {s}
        </motion.span>
      ))}
    </div>
  );
}
