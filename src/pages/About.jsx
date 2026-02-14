import Skills from "../components/Skills";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "../components/Reveal";
import { motion } from "framer-motion";

export default function About() {
    const { about } = portfolioData;

    return (
        <div className="pt-24 pb-32 min-h-screen text-white relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <span className="text-purple-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Designer & Engineer</span>
                    <h1 className="text-6xl sm:text-8xl font-black mb-16 tracking-tighter leading-[0.9] text-white">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Me</span>
                    </h1>
                </Reveal>

                <div className="grid lg:grid-cols-12 gap-20 items-start">
                    <div className="lg:col-span-5">
                        <Reveal delay={0.2} width="100%">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-[42px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-[#0c081a] aspect-[3/4] shadow-2xl overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8 }}
                                        src={about.image}
                                        alt={portfolioData.hero.name}
                                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c081a] via-transparent to-transparent opacity-60"></div>
                                </div>

                                <div className="absolute -bottom-8 -right-8 h-40 w-40 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-7 flex flex-col justify-center pt-8 lg:pt-0">
                        <div className="space-y-10">
                            <Reveal delay={0.3}>
                                <h3 className="text-2xl font-black tracking-tight text-white/90">Curating digital experiences with data and design.</h3>
                                <p className="mt-4 text-white/50 leading-relaxed text-xl font-medium">
                                    {about.description1}
                                </p>
                            </Reveal>

                            <Reveal delay={0.4}>
                                <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 relative group hover:border-purple-500/20 transition-all duration-500 shadow-xl shadow-black/40">
                                    <div className="absolute top-4 left-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V11C21.017 9.89543 20.1216 9 19.017 9H16.017C14.9124 9 14.017 8.10457 14.017 7V4H20.017V21H14.017ZM3.0166 21V4H9.0166V7C9.0166 8.10457 8.12117 9 7.0166 9H4.0166C2.91203 9 2.0166 9.89543 2.0166 11V14C2.0166 15.1046 2.91203 16 4.0166 16H7.0166C8.12117 16 9.0166 16.8954 9.0166 18V21H3.0166Z" /></svg>
                                    </div>
                                    <p className="text-white/60 leading-relaxed text-lg italic relative z-10">
                                        "{about.description2}"
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.5}>
                                <p className="text-white/50 leading-relaxed text-lg font-medium">
                                    {about.description3}
                                </p>
                            </Reveal>

                            <div className="pt-12">
                                <Reveal delay={0.6}>
                                    <div className="flex items-center gap-4 mb-8">
                                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/30">Technical Expertise</h3>
                                        <div className="h-px flex-grow bg-white/5"></div>
                                    </div>
                                    <Skills />
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
