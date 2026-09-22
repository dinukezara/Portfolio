import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { getAssetUrl } from '../utils/assetHelper'
import ScrollReveal from '../components/ui/ScrollReveal'
import MagneticButton from '../components/ui/MagneticButton'
import { Link } from 'react-router-dom'
import { Download } from 'lucide-react'

export default function About() {
  const { about, hero, skills } = portfolioData

  const techCategories = [
    { cat: 'Frontend', items: ['React', 'HTML', 'CSS', 'JavaScript'] },
    { cat: 'Backend', items: ['Node.js', 'Express', 'Python'] },
    { cat: 'Database', items: ['MySQL', 'MongoDB'] },
    { cat: 'ML / AI', items: ['ML Basics', 'Pandas', 'NumPy'] },
  ]

  return (
    <div className="min-h-screen bg-ink-950">
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-6">About Me</p>
          <h1 className="font-display text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.9] tracking-tight mb-16" data-cursor="hover">
            <span className="text-white">Who</span><br />
            <span className="text-stroke">I am.</span>
          </h1>
        </ScrollReveal>

        {/* Bio + Image Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mt-16">
          {/* Image */}
          <ScrollReveal delay={0.1} className="lg:col-span-4">
            <div className="relative group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={getAssetUrl(about.image)}
                  alt={hero.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-signal/20 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-signal/20 rounded-full pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <ScrollReveal delay={0.2}>
              <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-6">
                Curating digital experiences with data and design.
              </h2>
              <div className="flex flex-col gap-6 text-mist-900 text-lg leading-relaxed">
                <p>{about.description1}</p>
                <p>"{about.description2}"</p>
                <p>{about.description3}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a
                  href={hero.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-signal text-ink-950 font-display font-semibold rounded-full hover:shadow-[0_0_30px_rgba(232,255,71,0.3)] transition-all"
                  data-cursor="hover"
                >
                  <Download size={16} />
                  Download CV
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-8 py-4 border border-white/20 text-mist-500 rounded-full hover:border-white/60 hover:text-white transition-all text-sm"
                  data-cursor="hover"
                >
                  Get In Touch →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-32 bg-ink-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ScrollReveal className="mb-20">
            <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Technical Skills</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">My tech stack.</h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {techCategories.map((cat, i) => (
              <ScrollReveal key={cat.cat} delay={i * 0.1}>
                <h3 className="font-mono text-xs text-signal uppercase tracking-widest mb-6 border-b border-white/5 pb-4">
                  {cat.cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05, backgroundColor: '#e8ff47', color: '#04040a', borderColor: '#e8ff47' }}
                      className="font-mono text-xs px-4 py-2 rounded-full border border-white/10 text-mist-500 cursor-default transition-colors"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
