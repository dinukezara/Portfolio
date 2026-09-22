import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { getAssetUrl } from '../utils/assetHelper'
import ScrollReveal from '../components/ui/ScrollReveal'
import { Users, CalendarDays, Building2 } from 'lucide-react'
import MarqueeText from '../components/ui/MarqueeText'

export default function Experience() {
  const [activeTab, setActiveTab] = useState('societies')
  const { societies, events, experiencePhotos } = portfolioData
  const activeData = activeTab === 'societies' ? societies : events

  return (
    <div className="min-h-screen bg-ink-950">
      {/* Header */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Journey & Impact</p>
          <h1 className="font-display text-7xl md:text-[8rem] leading-[0.9] tracking-tight" data-cursor="hover">
            <span className="text-white">Professional</span><br />
            <span className="text-stroke">Milestones.</span>
          </h1>
        </ScrollReveal>
      </section>

      {/* Tab switcher */}
      <div className="flex justify-center mb-20 px-6">
        <div className="bg-ink-800 p-1.5 rounded-full border border-white/10 flex items-center gap-1">
          <button
            onClick={() => setActiveTab('societies')}
            className={`px-8 py-3 rounded-full text-sm font-body uppercase tracking-widest transition-all duration-500 flex items-center gap-2 ${
              activeTab === 'societies'
                ? 'bg-signal text-ink-950 font-semibold'
                : 'text-mist-900 hover:text-white'
            }`}
            data-cursor="hover"
          >
            <Users size={16} /> Societies
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-8 py-3 rounded-full text-sm font-body uppercase tracking-widest transition-all duration-500 flex items-center gap-2 ${
              activeTab === 'events'
                ? 'bg-signal text-ink-950 font-semibold'
                : 'text-mist-900 hover:text-white'
            }`}
            data-cursor="hover"
          >
            <CalendarDays size={16} /> Events
          </button>
        </div>
      </div>

      {/* Experience List */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-32"
          >
            {activeData.map((exp, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* Left: Header */}
                <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="h-px w-12 bg-signal/50" />
                    <span className="text-signal font-mono tracking-widest uppercase text-xs">{exp.year}</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-medium leading-tight tracking-tight mb-6">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-mist-900 text-xs font-mono uppercase tracking-widest">
                    <Building2 size={14} className="text-signal" />
                    {exp.org}
                  </div>
                  <span className="inline-block mt-4 border border-white/10 text-mist-700 font-mono text-xs px-3 py-1 rounded-full">
                    {exp.note}
                  </span>
                </div>

                {/* Right: Image card */}
                <div className="lg:w-2/3">
                  <ScrollReveal>
                    <div className="bg-ink-800 border border-white/5 p-8 rounded-sm hover:border-signal/20 transition-all duration-500 group">
                      {exp.images && (
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="rounded-sm overflow-hidden border border-white/5 aspect-[16/9] bg-ink-900 mb-6"
                        >
                          <img
                            src={getAssetUrl(exp.images)}
                            alt={exp.role}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                        </motion.div>
                      )}
                      <div className="flex flex-wrap gap-3">
                        {['Leadership', 'Teamwork', 'Impact'].map(tag => (
                          <span key={tag} className="font-mono text-xs px-4 py-2 rounded-full border border-white/10 text-mist-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Photo Marquee */}
      <div className="py-16 border-t border-white/5 overflow-hidden">
        <ScrollReveal>
          <p className="text-center font-mono text-xs text-mist-900/30 uppercase tracking-[0.4em] mb-12 italic">
            Snapshots from the journey
          </p>
        </ScrollReveal>
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-marquee">
            {[...experiencePhotos, ...experiencePhotos].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-72 h-48 overflow-hidden border border-white/5 group relative bg-ink-800">
                <img
                  src={getAssetUrl(img)}
                  alt="Journey"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-signal/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
