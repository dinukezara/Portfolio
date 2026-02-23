import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal, Target, ExternalLink, FileCheck } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { getAssetUrl } from "../utils/assetHelper";

const iconMap = {
    Trophy: Trophy,
    Award: Award,
    Star: Star,
    Medal: Medal,
    Target: Target,
};

export default function Achievements() {
    const { achievements, certificates } = portfolioData;

    return (
        <section id="achievements" className="py-24 text-white">
            <Reveal>
                <span className="text-purple-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block text-center">Recognition & Excellence</span>
                <h2 className="text-5xl sm:text-7xl font-black text-center mb-16 tracking-tighter">
                    Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Achievements</span>
                </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => {
                    const Icon = iconMap[achievement.icon] || Award;

                    return (
                        <Reveal key={achievement.id} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="relative group h-full"
                            >
                                {/* Decorative Background Glow */}
                                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative h-full p-8 rounded-[32px] glass border border-white/10 hover:border-purple-500/30 transition-all duration-500 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Icon size={32} className="text-purple-400" />
                                    </div>

                                    <span className="text-purple-400/60 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{achievement.year}</span>
                                    <h3 className="text-2xl font-black mb-3 group-hover:text-purple-400 transition-colors">{achievement.title}</h3>
                                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4 italic">{achievement.org}</p>
                                    <p className="text-white/60 text-sm leading-relaxed font-medium">
                                        {achievement.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </Reveal>
                    );
                })}
            </div>

            {/* Certificates Section */}
            {certificates && certificates.length > 0 && (
                <div className="mt-40">
                    <Reveal>
                        <div className="flex items-center gap-4 mb-16">
                            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
                                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Certifications</span>
                            </h2>
                            <div className="h-px flex-grow bg-white/5"></div>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {certificates.map((cert, index) => (
                            <Reveal key={cert.id} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="group relative flex flex-col sm:flex-row gap-8 p-6 rounded-[32px] glass border border-white/5 hover:border-purple-500/20 transition-all duration-500"
                                >
                                    <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                                        <img
                                            src={getAssetUrl(cert.image)}
                                            alt={cert.title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center flex-grow">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FileCheck size={14} className="text-purple-400" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{cert.org}</span>
                                        </div>
                                        <h3 className="text-xl font-black mb-2 group-hover:text-purple-400 transition-colors">{cert.title}</h3>
                                        <p className="text-white/40 text-xs font-bold mb-6 italic">{cert.year}</p>

                                        <motion.a
                                            whileHover={{ x: 5 }}
                                            href={cert.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-purple-400 group-hover:text-purple-300"
                                        >
                                            View Certificate <ExternalLink size={14} />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
