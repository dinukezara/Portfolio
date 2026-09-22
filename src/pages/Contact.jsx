import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import ScrollReveal from '../components/ui/ScrollReveal'
import MagneticButton from '../components/ui/MagneticButton'
import { Mail, Linkedin, Github, Instagram, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react'

export default function Contact() {
  const { contact } = portfolioData
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 1200)
  }

  const socialLinks = [
    { label: 'Email', value: contact.email, url: `mailto:${contact.email}`, icon: Mail },
    { label: 'LinkedIn', value: contact.linkedin, url: contact.linkedinUrl, icon: Linkedin },
    { label: 'GitHub', value: contact.github, url: contact.githubUrl, icon: Github },
    { label: 'Instagram', value: contact.instagram, url: contact.instagramUrl, icon: Instagram },
  ]

  return (
    <div className="min-h-screen bg-ink-950">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs text-signal uppercase tracking-widest mb-6">Let's Connect</p>
          <h1 className="font-display text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.9] tracking-tight" data-cursor="hover">
            <span className="text-white">Get in</span><br />
            <span className="text-stroke">Touch.</span>
          </h1>
          <p className="text-mist-900 text-xl font-body mt-8 max-w-xl leading-relaxed">
            Have a project in mind, a potential collaboration, or simply want to chat? Send a signal and I'll get back to you promptly.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Content */}
      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="bg-ink-800 border border-white/5 p-8 sm:p-12 rounded-sm relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-16 text-center flex flex-col items-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-signal/10 border border-signal/30 flex items-center justify-center text-signal mb-8">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="font-display text-4xl text-white font-medium mb-4">Signal Received</h3>
                      <p className="text-mist-700 text-base max-w-md mb-10 leading-relaxed">
                        Thank you for reaching out. Your transmission was received and I will respond to your message shortly.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="font-mono text-xs uppercase tracking-widest px-8 py-4 border border-white/20 text-white rounded-full hover:border-signal hover:text-signal transition-colors"
                        data-cursor="hover"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-8"
                    >
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="block font-mono text-xs uppercase tracking-widest text-mist-900">
                            Your Name <span className="text-signal">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full bg-ink-900 border border-white/10 px-5 py-4 text-white text-base rounded-sm outline-none focus:border-signal transition-colors placeholder:text-mist-900/40"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="block font-mono text-xs uppercase tracking-widest text-mist-900">
                            Email Address <span className="text-signal">*</span>
                          </label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full bg-ink-900 border border-white/10 px-5 py-4 text-white text-base rounded-sm outline-none focus:border-signal transition-colors placeholder:text-mist-900/40"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="block font-mono text-xs uppercase tracking-widest text-mist-900">
                          Your Message <span className="text-signal">*</span>
                        </label>
                        <textarea
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your project, idea, or inquiry..."
                          className="w-full bg-ink-900 border border-white/10 px-5 py-4 text-white text-base rounded-sm outline-none focus:border-signal transition-colors resize-none placeholder:text-mist-900/40"
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="inline-flex items-center gap-3 px-10 py-5 bg-signal text-ink-950 font-display font-semibold text-base rounded-full hover:shadow-[0_0_35px_rgba(232,255,71,0.35)] transition-all disabled:opacity-50"
                          data-cursor="hover"
                        >
                          {status === 'sending' ? 'Transmitting...' : 'Send Message'}
                          <Send size={16} />
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Socials & Location */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal delay={0.2}>
              <div className="bg-ink-800 border border-white/5 p-8 rounded-sm space-y-6">
                <h3 className="font-mono text-xs text-signal uppercase tracking-widest border-b border-white/5 pb-4">
                  Direct Channels
                </h3>

                <div className="space-y-4">
                  {socialLinks.map((link) => {
                    const IconComp = link.icon
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-ink-900 border border-white/5 hover:border-signal/30 rounded-sm group transition-all"
                        data-cursor="hover"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-ink-800 flex items-center justify-center text-mist-900 group-hover:text-signal transition-colors">
                            <IconComp size={18} />
                          </div>
                          <div>
                            <div className="font-mono text-[10px] uppercase tracking-widest text-mist-900">
                              {link.label}
                            </div>
                            <div className="text-sm text-white group-hover:text-signal transition-colors font-medium">
                              {link.value}
                            </div>
                          </div>
                        </div>
                        <ArrowRight size={16} className="text-mist-900 group-hover:text-signal group-hover:translate-x-1 transition-all" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-ink-800 border border-white/5 p-8 rounded-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-signal/10 flex items-center justify-center text-signal">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-white font-medium">Location</h4>
                    <p className="font-mono text-xs text-mist-900 uppercase tracking-widest">
                      {contact.location} • Available Globally (Remote)
                    </p>
                  </div>
                </div>
                <p className="text-mist-700 text-sm leading-relaxed mt-4">
                  Department of Computer Science and Engineering,<br />
                  University of Moratuwa.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
