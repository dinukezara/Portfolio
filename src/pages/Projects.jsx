import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { getAssetUrl } from '../utils/assetHelper'
import ScrollReveal from '../components/ui/ScrollReveal'
import { Github, ExternalLink } from 'lucide-react'

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const accentColors = [
    'from-signal/20 to-transparent',
    'from-ember/20 to-transparent',
    'from-purple-900/40 to-transparent',
    'from-blue-900/40 to-transparent',
  ]

  return (
    <ScrollReveal delay={index * 0.1}>
      <div style={{ perspective: 1500 }}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { x.set(0); y.set(0) }}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative overflow-hidden bg-ink-800 border border-white/5 group rounded-sm"
          data-cursor="view"
        >
          {/* Image */}
          <div className="aspect-video overflow-hidden relative">
            {project.image ? (
              <img
                src={getAssetUrl(project.image)}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
            ) : (
              <div className="w-full h-full bg-ink-700 flex items-center justify-center text-mist-700 font-mono text-sm">
                No preview
              </div>
            )}
            <div className={`absolute inset-0 bg-gradient-to-br ${accentColors[index % 4]} opacity-60`} />
          </div>

          {/* Info */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block border border-signal/30 text-signal font-mono text-xs px-3 py-1 rounded-full">
                {project.tag}
              </span>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-ink-900 rounded-full hover:bg-ink-700 transition-colors text-mist-700 hover:text-white"
                    onClick={e => e.stopPropagation()}
                    data-cursor="hover"
                  >
                    <Github size={14} />
                  </a>
                )}
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-ink-900 rounded-full hover:bg-ink-700 transition-colors text-mist-700 hover:text-white"
                    onClick={e => e.stopPropagation()}
                    data-cursor="hover"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-display text-2xl font-medium mb-3 tracking-tight group-hover:text-signal transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-mist-700 text-sm leading-relaxed">
              {project.desc}
            </p>
          </div>

          {/* Hover border glow */}
          <div className="absolute inset-0 border border-signal/0 group-hover:border-signal/30 transition-all duration-500 rounded-sm pointer-events-none" />
        </motion.div>
      </div>
    </ScrollReveal>
  )
}

export default function Projects() {
  const { projects } = portfolioData

  return (
    <div className="min-h-screen bg-ink-950">
      {/* Header */}
      <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Selected Work</p>
          <h1 className="font-display text-7xl md:text-[8rem] leading-[0.9] tracking-tight" data-cursor="hover">
            <span className="text-white">Projects</span><br />
            <span className="text-stroke">I've built.</span>
          </h1>
          <p className="text-mist-900 text-xl font-body mt-8 max-w-xl leading-relaxed">
            A selection of projects showcasing my passion for building intelligent, scalable digital solutions.
          </p>
        </ScrollReveal>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
