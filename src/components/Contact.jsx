import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";

const ContactIcon = ({ label }) => {
  const getPath = () => {
    switch (label) {
      case "Email":
        return <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>;
      case "LinkedIn":
        return <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>;
      case "GitHub":
        return <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></>;
      case "Instagram":
        return <><rect width="16" height="16" x="4" y="4" rx="4" /><circle cx="12" cy="12" r="3" /><line x1="16.5" x2="16.5" y1="7.5" y2="7.5" /></>;
      default:
        return <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>;
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {getPath()}
    </svg>
  );
};

export default function Contact() {
  const { contact } = portfolioData;
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const contactItems = [
    { label: "Email", value: contact.email, url: `mailto:${contact.email}`, color: "#A855F7" },
    { label: "LinkedIn", value: contact.linkedin, url: contact.linkedinUrl, color: "#A855F7" },
    { label: "GitHub", value: contact.github, url: contact.githubUrl, color: "#A855F7" },
    { label: "Instagram", value: contact.instagram, url: contact.instagramUrl, color: "#A855F7" }
  ];

  return (
    <section id="contact" className="py-24 text-white">
      <Reveal>
        <span className="text-purple-500 font-bold tracking-[0.4em] uppercase text-xs mb-3 block">Available for Hire</span>
        <h2 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.9]">
          <span className="opacity-30">Let's</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Collaborate</span>
        </h2>
        <p className="text-white/50 mt-8 text-xl max-w-xl font-medium leading-relaxed">
          I'm currently seeking new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </Reveal>

      <div className="mt-20 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <Reveal delay={0.2} width="100%">
            <div className="rounded-[40px] bg-[#0c081a] border border-white/[0.05] p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-1000">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" /></svg>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="h-20 w-20 rounded-full bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3 className="text-4xl font-black mb-4">Message Received</h3>
                    <p className="text-white/50 text-lg">I've sent your message into the digital ether. Talk soon!</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">Your Name</label>
                        <input
                          required
                          className="w-full px-0 py-4 bg-transparent border-b border-white/10 outline-none focus:border-purple-500 transition-all font-medium text-lg placeholder:text-white/10"
                          placeholder="What can I call you?"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          className="w-full px-0 py-4 bg-transparent border-b border-white/10 outline-none focus:border-purple-500 transition-all font-medium text-lg placeholder:text-white/10"
                          placeholder="Where can I reach you?"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-1">Your Message</label>
                      <textarea
                        required
                        className="w-full px-0 py-4 bg-transparent border-b border-white/10 outline-none focus:border-purple-500 transition-all font-medium text-lg placeholder:text-white/10 min-h-[150px] resize-none"
                        placeholder="What's on your mind?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-4 px-12 py-5 rounded-2xl bg-white text-[#070313] font-black text-lg tracking-tight hover:bg-purple-500 hover:text-white transition-all duration-300 disabled:opacity-50"
                    >
                      {status === "sending" ? "Sending..." : "Send it over"}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center">
          <Reveal delay={0.4} width="100%">
            <div className="space-y-12">
              <div className="relative p-8 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:border-purple-500/20 transition-all duration-500">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-8 flex items-center gap-2">
                  <span className="h-px w-6 bg-purple-500/30 font-black"></span>
                  Social Links
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  {contactItems.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="flex flex-col gap-3 group/item"
                    >
                      <span className="text-white/20 group-hover/item:text-purple-400 transition-colors">
                        <ContactIcon label={item.label} />
                      </span>
                      <span className="text-sm font-bold text-white group-hover/item:text-white/80 transition-colors">{item.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-[32px] bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-500/10">
                <p className="text-purple-300/60 text-base font-medium leading-relaxed">
                  Based in <span className="text-white font-bold">{contact.location}</span>. <br />
                  Working remotely with teams worldwide.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
