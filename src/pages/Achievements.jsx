import { motion } from 'framer-motion'
import { Trophy, Award, Medal, ExternalLink, FileCheck } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { getAssetUrl } from '../utils/assetHelper'
import ScrollReveal from '../components/ui/ScrollReveal'

const iconMap = {
  Trophy: Trophy,
  Award: Award,
  Medal: Medal,
}

export default function Achievements() {
  const { achievements, certificates } = portfolioData

  return (
    <div className="min-h-screen bg-ink-950">
      {/* Header */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Recognition & Honors</p>
          <h1 className="font-display text-7xl md:text-[8rem] leading-[0.9] tracking-tight" data-cursor="hover">
            <span className="text-white">Milestones &</span><br />
            <span className="text-stroke">Awards.</span>
          </h1>
          <p className="text-mist-900 text-xl font-body mt-8 max-w-xl leading-relaxed">
            Competitive programming, datathons, hackathons, and certifications achieved along the journey.
          </p>
        </ScrollReveal>
      </section>

      {/* Achievements Grid */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award
            return (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-ink-800 border border-white/5 hover:border-signal/30 p-8 sm:p-10 rounded-sm transition-all duration-500 relative group flex flex-col justify-between h-full"
                  data-cursor="hover"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-full bg-signal/10 flex items-center justify-center border border-signal/20 group-hover:scale-110 group-hover:bg-signal/20 transition-all duration-500">
                        <IconComponent size={24} className="text-signal" />
                      </div>
                      <span className="font-mono text-xs text-signal px-3 py-1 rounded-full border border-signal/20">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight mb-3 text-white group-hover:text-signal transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="font-mono text-xs text-mist-900 uppercase tracking-widest mb-6">
                      {item.org}
                    </p>

                    <p className="text-mist-700 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-mist-900">
                    <span>Award Verified</span>
                    <span className="text-signal opacity-0 group-hover:opacity-100 transition-opacity">Recognition #{item.id}</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* Certificates Section */}
      {certificates && certificates.length > 0 && (
        <section className="py-32 bg-ink-900 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal className="mb-16">
              <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Credentials</p>
              <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
                Certifications.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <ScrollReveal key={cert.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="bg-ink-800 border border-white/5 hover:border-signal/30 p-6 sm:p-8 rounded-sm transition-all duration-500 flex flex-col sm:flex-row gap-6 items-center group"
                    data-cursor="hover"
                  >
                    {cert.image && (
                      <div className="w-full sm:w-48 h-32 rounded-sm overflow-hidden border border-white/5 shrink-0 bg-ink-950">
                        <img
                          src={getAssetUrl(cert.image)}
                          alt={cert.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                    )}

                    <div className="flex flex-col justify-center flex-grow w-full">
                      <div className="flex items-center gap-2 mb-2">
                        <FileCheck size={14} className="text-signal" />
                        <span className="font-mono text-[11px] uppercase tracking-widest text-mist-900">
                          {cert.org} • {cert.year}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-medium tracking-tight mb-4 text-white group-hover:text-signal transition-colors duration-300">
                        {cert.title}
                      </h3>

                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-signal hover:text-white transition-colors"
                        data-cursor="hover"
                      >
                        View Credential <ExternalLink size={12} />
                      </a>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
