import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { getAssetUrl } from "../utils/assetHelper";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 lg:py-32">
      <Reveal>
        <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-sm">Professional Journey</span>
        <h2 className="text-5xl sm:text-7xl font-black tracking-tight mt-4 text-white leading-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Experience</span>
        </h2>
        <p className="text-white/60 mt-6 text-xl max-w-2xl font-medium leading-relaxed">
          A record of my professional contributions, community involvements, and leadership roles.
        </p>
      </Reveal>

      {/* Experience Photos Marquee - Highlight Section */}
      <Reveal delay={0.3} width="100%">
        <div className="mt-20 relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-16 bg-white/[0.01] border-y border-white/5 backdrop-blur-3xl">
          <div className="flex animate-marquee gap-10 px-4">
            {[...portfolioData.experiencePhotos, ...portfolioData.experiencePhotos].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                className="flex-shrink-0 w-96 h-56 rounded-[32px] overflow-hidden border border-white/10 glass shadow-2xl shadow-purple-500/5 transition-all duration-700"
              >
                <img src={getAssetUrl(img)} alt="Experience" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Vertical Timeline */}
      <div className="mt-32 relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Central Line */}
        <div className="timeline-line hidden md:block" />
        <div className="absolute left-[21px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-fuchsia-500/10 to-transparent md:hidden" />

        <div className="space-y-20 relative">
          {experience.map((x, index) => (
            <div key={x.role + x.org} className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center md:justify-between w-full`}>

              {/* Timeline Dot */}
              <div className="timeline-dot" />

              {/* Content Card */}
              <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-14 md:pl-0`}>
                <Reveal delay={0.2} width="100%">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <span className="text-purple-400 font-black text-sm tracking-widest uppercase mb-2 block">{x.year}</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-purple-400 transition-colors leading-tight">{x.role}</h3>
                    <p className="text-white/80 font-bold text-lg mt-1">{x.org}</p>

                    <div className={`mt-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-sm group-hover:bg-white/[0.05] group-hover:border-purple-500/20 transition-all duration-500 shadow-xl`}>
                      <p className="text-white/60 text-base leading-relaxed font-medium">
                        {x.note}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              </div>

              {/* Spacer for desktop */}
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
