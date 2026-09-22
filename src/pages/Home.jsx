import { useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ChevronDown, Github, ExternalLink, Award, ArrowRight, Download, Sparkles } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { getAssetUrl } from '../utils/assetHelper'
import ScrollReveal from '../components/ui/ScrollReveal'
import MagneticButton from '../components/ui/MagneticButton'
import MarqueeText from '../components/ui/MarqueeText'
import AnimatedCounter from '../components/ui/AnimatedCounter'

// ─────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────
function HeroSection() {
  const containerRef = useRef(null)
  const blobRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current) return
      const { clientX, clientY } = e
      blobRef.current.style.transform = `translate(${clientX - 400}px, ${clientY - 400}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const { hero } = portfolioData
  const nameParts = hero.name.split(' ')
  const firstName = nameParts[0] || 'Dinuka'
  const restName = nameParts.slice(1).join(' ') || 'Withanage'

  return (
    <section ref={containerRef} className="relative min-h-screen bg-ink-950 overflow-hidden flex flex-col justify-center pt-28 pb-20">
      {/* Dynamic light blob */}
      <div
        ref={blobRef}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-signal/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out z-0"
      />
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />
      <div className="grain absolute inset-0 z-[1]" />

      <motion.div style={{ opacity, scale, y }} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start mt-4 sm:mt-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-ink-800 border border-white/10 text-mist-900 font-mono text-xs px-4 py-2 rounded-full mb-8 flex items-center gap-2"
        >
          <div className="w-2 h-2 bg-signal rounded-full animate-pulse-slow" />
          {hero.badge}
        </motion.div>

        {/* Name headline */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-[7.5rem] lg:text-[9rem] leading-[0.92] tracking-tight mb-8 w-full select-none" data-cursor="hover">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white overflow-hidden pb-1"
          >
            {firstName}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-stroke opacity-90 overflow-hidden pb-1"
          >
            {restName}
          </motion.div>
        </h1>

        {/* Role tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-mono text-xs md:text-sm text-signal uppercase tracking-widest mb-4"
        >
          {hero.role.split(',')[0]} • CSE UoM
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-body text-mist-900 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          data-cursor="text"
        >
          {hero.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap items-center gap-5"
        >
          <MagneticButton
            className="px-8 py-4 bg-signal text-ink-950 font-display font-semibold rounded-full hover:shadow-[0_0_30px_rgba(232,255,71,0.35)] transition-all text-base relative overflow-hidden group"
            onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </MagneticButton>

          {hero.cvUrl && (
            <a
              href={getAssetUrl(hero.cvUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-mist-500 font-body rounded-full hover:border-white/60 hover:text-white transition-all text-sm inline-flex items-center gap-2"
              data-cursor="hover"
            >
              <Download size={15} />
              Download CV
            </a>
          )}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-wrap gap-2.5 mt-12"
        >
          {hero.tags.map(tag => (
            <span key={tag} className="font-mono text-xs text-mist-700 bg-ink-800 border border-white/10 px-3.5 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-mist-900 z-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─────────────────────────────────────────────
// SKILLS MARQUEE
// ─────────────────────────────────────────────
function SkillsMarquee() {
  const { skills } = portfolioData
  const capitalized = skills.map(s => s.charAt(0).toUpperCase() + s.slice(1))
  const reversed = [...capitalized].reverse()

  const SkillTag = ({ name }) => (
    <span className="font-display text-2xl md:text-4xl font-semibold text-white/30 hover:text-white transition-colors duration-300" data-cursor="hover">
      {name}
    </span>
  )

  const items1 = capitalized.map(s => <SkillTag key={s} name={s} />)
  const items2 = reversed.map(s => <SkillTag key={`r-${s}`} name={s} />)

  return (
    <section className="bg-ink-900 py-20 border-b border-white/5 relative overflow-hidden group">
      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <p className="text-center font-mono text-xs text-mist-900 uppercase tracking-widest">
          Technologies & Frameworks
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <MarqueeText items={items1} direction="forward" />
        <MarqueeText items={items2} direction="reverse" />
      </div>
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-36 bg-gradient-to-r from-ink-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-36 bg-gradient-to-l from-ink-900 to-transparent z-10 pointer-events-none" />
    </section>
  )
}

// ─────────────────────────────────────────────
// ABOUT SECTION
// ─────────────────────────────────────────────
function AboutSection() {
  const { about } = portfolioData

  return (
    <section className="bg-ink-950 py-32 md:py-40 relative overflow-hidden text-mist-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7 relative z-10">
            <ScrollReveal>
              <p className="font-mono text-xs text-signal uppercase tracking-widest mb-6">About Me</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
                {about.title}
              </h2>
              <div className="flex flex-col gap-6 text-mist-900 text-base md:text-lg leading-relaxed">
                <p>{about.description1}</p>
                <p className="text-mist-500 italic border-l-2 border-signal/50 pl-4">"{about.description2}"</p>
                <p>{about.description3}</p>
              </div>
              <div className="mt-10">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal hover:text-white transition-colors"
                  data-cursor="hover"
                >
                  Full Bio & Skills <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Profile image */}
          <div className="lg:col-span-5 relative z-0">
            <ScrollReveal delay={0.2}>
              <div className="relative group">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm bg-ink-900 border border-white/10">
                  <img
                    src={getAssetUrl(about.image)}
                    alt="Dinuka Withanage"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-mist-700 flex justify-between items-center">
                    <span>Dept. of CSE</span>
                    <span className="text-signal">Moratuwa, LK</span>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-signal/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border border-signal/20 rounded-full pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PROJECTS PREVIEW (3D Tilt Cards)
// ─────────────────────────────────────────────
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

  const accentGradients = [
    'from-signal/20 to-transparent',
    'from-ember/20 to-transparent',
    'from-purple-900/30 to-transparent',
    'from-blue-900/30 to-transparent',
  ]

  return (
    <ScrollReveal delay={index * 0.1}>
      <div style={{ perspective: 1200 }}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { x.set(0); y.set(0) }}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative overflow-hidden bg-ink-800 border border-white/5 group rounded-sm flex flex-col h-full hover:border-signal/30 transition-colors duration-500"
          data-cursor="view"
        >
          {/* Image preview */}
          <div className="aspect-video overflow-hidden relative bg-ink-900 border-b border-white/5">
            {project.image ? (
              <img
                src={getAssetUrl(project.image)}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-mist-900 font-mono text-xs">
                No Preview
              </div>
            )}
            <div className={`absolute inset-0 bg-gradient-to-br ${accentGradients[index % 4]} opacity-40 group-hover:opacity-70 transition-opacity`} />
          </div>

          {/* Project Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="inline-block border border-signal/30 text-signal font-mono text-xs px-3 py-1 rounded-full">
                  {project.tag}
                </span>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-ink-900 rounded-full hover:bg-ink-700 text-mist-700 hover:text-white transition-colors"
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
                      className="p-2 bg-ink-900 rounded-full hover:bg-ink-700 text-mist-700 hover:text-white transition-colors"
                      onClick={e => e.stopPropagation()}
                      data-cursor="hover"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display font-medium text-2xl mb-3 tracking-tight group-hover:text-signal transition-colors duration-300">
                {project.title}
              </h3>

              <p className="font-body text-mist-700 text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  )
}

function ProjectsPreview() {
  return (
    <section className="bg-ink-900 py-32 relative" id="projects-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-16">
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Selected Work</p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
              Projects I've<br />built.
            </h2>
            <Link
              to="/projects"
              className="font-mono text-xs uppercase tracking-widest text-mist-900 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 group shrink-0"
              data-cursor="hover"
            >
              All Projects <span className="text-signal inline-block group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// TECH STACK SECTION
// ─────────────────────────────────────────────
function TechStackSection() {
  const stack = [
    { cat: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'JavaScript'] },
    { cat: 'Backend', items: ['Node.js', 'Express', 'Python'] },
    { cat: 'Database', items: ['MySQL', 'MongoDB'] },
    { cat: 'ML / AI', items: ['Machine Learning', 'Pandas', 'NumPy', 'Kaggle'] },
    { cat: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Vivado FPGA'] },
  ]

  return (
    <section className="bg-ink-950 py-32 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-16">
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Capabilities</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">My Arsenal.</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {stack.map((category, i) => (
            <ScrollReveal key={category.cat} delay={i * 0.08}>
              <div className="flex flex-col">
                <h3 className="font-mono text-xs text-signal uppercase tracking-widest mb-5 border-b border-white/5 pb-3">
                  {category.cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map(tech => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05, backgroundColor: '#e8ff47', color: '#04040a', borderColor: '#e8ff47' }}
                      className="font-mono text-xs px-3.5 py-1.5 rounded-full border border-white/10 text-mist-500 cursor-default transition-colors"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// STATS SECTION
// ─────────────────────────────────────────────
function StatsSection() {
  const stats = [
    { num: 4, label: 'Projects Built', suffix: '+' },
    { num: 4, label: 'Society Roles', suffix: '+' },
    { num: 8, label: 'Events Organized', suffix: '+' },
    { num: 4, label: 'Certifications Earned' },
    { num: 4, label: 'Hackathons Competed', suffix: '+' },
    { num: 2, label: 'Hackathon Placements' },
  ]

  return (
    <section className="bg-signal py-20 md:py-28 w-full text-ink-950 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-y-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="flex flex-col items-start">
              <div className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter tabular-nums">
                <AnimatedCounter end={stat.num} suffix={stat.suffix || ''} />
              </div>
              <p className="font-mono text-xs md:text-sm uppercase tracking-widest mt-2 md:mt-3 opacity-80 font-bold">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// ACHIEVEMENTS PREVIEW
// ─────────────────────────────────────────────
function AchievementsPreview() {
  const { achievements } = portfolioData

  return (
    <section className="bg-ink-900 py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <p className="font-mono text-xs text-signal uppercase tracking-widest mb-4">Recognition</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Competitive<br />highlights.</h2>
          </div>
          <Link
            to="/achievements"
            className="font-mono text-xs uppercase tracking-widest text-mist-900 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 group"
            data-cursor="hover"
          >
            All Achievements <span className="text-signal inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((ach, i) => (
            <ScrollReveal key={ach.id} delay={i * 0.1}>
              <div className="bg-ink-800 border border-white/5 p-8 h-full group transition-all duration-500 hover:border-signal/30 hover:-translate-y-1 rounded-sm relative overflow-hidden" data-cursor="hover">
                <div className="absolute inset-0 bg-gradient-to-t from-signal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="inline-block border border-signal/30 text-signal font-mono text-xs px-3 py-1 rounded-full">
                        {ach.year}
                      </span>
                      <Award size={20} className="text-signal/40 group-hover:text-signal transition-colors" />
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-medium leading-snug mb-3 tracking-tight group-hover:text-signal transition-colors duration-300">
                      {ach.title}
                    </h3>
                    <p className="font-mono text-xs text-ember mb-4">{ach.org}</p>
                  </div>
                  <p className="text-mist-700 text-sm leading-relaxed mt-4">
                    {ach.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// CONTACT CTA
// ─────────────────────────────────────────────
function ContactCTA() {
  const { contact } = portfolioData
  const navigate = useNavigate()

  return (
    <section className="relative min-h-[85vh] bg-ink-950 flex flex-col justify-center items-center overflow-hidden py-28">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-800 via-ink-950 to-ink-950 opacity-60 z-0" />
      <div className="grain absolute inset-0 z-0 opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-signal/5 z-0 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <ScrollReveal>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-6">
            Ready to connect?
          </p>

          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-10 select-none" data-cursor="hover">
            <span className="text-white block">Let's build</span>
            <span className="text-stroke block">together.</span>
          </h2>

          <p className="text-mist-500 font-body text-lg md:text-xl mb-12 max-w-lg mx-auto">
            Open to internships, research collaborations, and impactful engineering opportunities.
          </p>

          <div className="flex flex-col items-center gap-6 w-full">
            <MagneticButton
              className="px-10 py-5 text-lg font-display font-medium bg-signal text-ink-950 rounded-full hover:shadow-[0_0_35px_rgba(232,255,71,0.35)] transition-all group overflow-hidden relative"
              onClick={() => navigate('/contact')}
            >
              <span className="relative z-10 flex items-center gap-3">
                Get In Touch
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </MagneticButton>

            <a
              href={`mailto:${contact.email}`}
              className="font-mono text-xs md:text-sm text-mist-900 hover:text-white transition-colors pb-1 border-b border-white/20 hover:border-white mt-2"
              data-cursor="text"
            >
              Direct signal: {contact.email}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsMarquee />
      <AboutSection />
      <ProjectsPreview />
      <TechStackSection />
      <StatsSection />
      <AchievementsPreview />
      <ContactCTA />
    </>
  )
}
