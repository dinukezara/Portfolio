import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Users, CalendarDays, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { getAssetUrl } from "../utils/assetHelper";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("societies");
  const { societies, events } = portfolioData;

  const activeData = activeTab === "societies" ? societies : events;

  return (
    <section id="experience" className="py-24 text-white">
      <Reveal>
        <span className="text-purple-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block text-center">Journey & Impact</span>
        <h2 className="text-5xl sm:text-7xl font-black text-center mb-16 tracking-tighter">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Milestones</span>
        </h2>
      </Reveal>

      {/* Premium Tab Switcher */}
      <div className="flex justify-center mb-24">
        <div className="glass p-1.5 rounded-full border border-white/10 flex items-center gap-1 shadow-2xl">
          <button
            onClick={() => setActiveTab("societies")}
            className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-2 ${activeTab === "societies" ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30" : "text-white/40 hover:text-white"
              }`}
          >
            <Users size={16} /> Societies
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-2 ${activeTab === "events" ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30" : "text-white/40 hover:text-white"
              }`}
          >
            <CalendarDays size={16} /> Events
          </button>
        </div>
      </div>

      {/* Modern Journey Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-40"
        >
          {activeData.map((exp, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-12 lg:gap-24">
              {/* Left Side: Sticky Header */}
              <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-px w-12 bg-purple-500/50"></span>
                  <span className="text-purple-400 font-black tracking-widest uppercase text-sm">
                    {exp.year}
                  </span>
                </div>
                <h3 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-6">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-white/40 font-bold uppercase tracking-widest text-xs">
                  <Building2 size={16} className="text-purple-500" />
                  {exp.org}
                </div>
              </div>

              {/* Right Side: Detailed Content */}
              <div className="lg:w-2/3">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative p-8 sm:p-12 rounded-[40px] glass border border-white/5 hover:border-purple-500/20 transition-all duration-500 shadow-2xl">
                    <p className="text-white/60 text-xl leading-relaxed mb-10 font-medium italic">
                      "{exp.note}"
                    </p>

                    {exp.images && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/9] mt-8"
                      >
                        <img
                          src={getAssetUrl(exp.images)}
                          alt={exp.role}
                          className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                        />
                      </motion.div>
                    )}

                    <div className="flex flex-wrap gap-3 mt-10 pt-10 border-t border-white/5">
                      {["Leadership", "Teamwork", "Impact"].map((tag) => (
                        <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/30 flex items-center gap-2">
                          <Sparkles size={10} className="text-purple-500/50" /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Photo Gallery Marquee */}
      <div className="mt-40">
        <Reveal>
          <h3 className="text-center text-xs font-black uppercase tracking-[0.4em] text-white/20 mb-12 italic">Snapshots from the journey</h3>
        </Reveal>
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-10">
          <div className="flex animate-marquee gap-8">
            {[...portfolioData.experiencePhotos, ...portfolioData.experiencePhotos].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-80 h-52 rounded-3xl overflow-hidden border border-white/5 shadow-2xl group relative">
                <img src={getAssetUrl(img)} alt="Gallery" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

