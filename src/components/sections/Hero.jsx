import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { personal } from '../../data/personal'
import { projects } from '../../data/projects'

const roles = [
  'Análise e Modelagem de Dados',
  'Gestão de Projetos de TI',
  'Desenvolvimento de Sistemas',
  'Buscando Estágio em TI',
]

function Typewriter() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]
    const speed = deleting ? 28 : 65

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1))
        } else {
          setDeleting(false)
          setIndex((i) => (i + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <span>
      <span className="text-[#9D6EFF]">{text}</span>
      <span className="inline-block w-0.5 h-5 bg-[#9D6EFF] ml-0.5 animate-pulse align-middle" />
    </span>
  )
}

const socialLinks = [
  { href: personal.github, icon: Github, label: 'GitHub' },
  { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: personal.gmailCompose, icon: Mail, label: 'E-mail' },
  {
    href: `https://wa.me/${personal.whatsapp}`,
    icon: MessageCircle,
    label: 'WhatsApp',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[480px] h-[480px] bg-[#7C3AED]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#9D6EFF]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">

          {/* ── Left — main content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]" />
              </span>
              <span className="text-[10px] text-[#6B5E4E] tracking-[0.18em] uppercase">
                Disponível para oportunidades
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-3">
              <span className="text-[#6B5E4E] text-lg font-light">Olá, sou</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-syne font-bold text-[#E8D5B5] leading-none tracking-tight mb-2"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}
            >
              {personal.name}
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="font-syne font-semibold text-[#C9B99A]/60 leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)' }}
            >
              {personal.lastName}
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="font-syne font-medium text-lg mb-7 h-7 flex items-center"
            >
              <Typewriter />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[#C9B99A] text-base leading-relaxed mb-9 max-w-[480px]"
            >
              {personal.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-9">
              <a href="#projetos" className="btn-primary">
                Ver Projetos
              </a>
              <a href="#contato" className="btn-ghost">
                Entre em Contato
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/[0.07] flex items-center justify-center text-[#6B5E4E] hover:text-[#C9B99A] hover:border-white/[0.14] hover:bg-white/[0.03] transition-all duration-400"
                >
                  <Icon size={16} />
                </a>
              ))}
              <div className="h-4 w-px bg-white/[0.07] mx-1" />
              <span className="text-[#6B5E4E] text-xs">{personal.email}</span>
            </motion.div>
          </motion.div>

          {/* ── Right — info cards ── */}
          <div className="hidden lg:flex flex-col gap-3">
            {/* Profile card com foto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="card p-4 flex items-center gap-4"
            >
              <div className="relative flex-shrink-0">
                <img
                  src="/foto.png"
                  alt={`${personal.name} ${personal.lastName}`}
                  className="w-14 h-14 rounded-xl object-cover"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#4ADE80] rounded-full border-2 border-[#111111]" />
              </div>
              <div className="min-w-0">
                <div className="font-syne font-bold text-[#E8D5B5] text-sm truncate">
                  {personal.name} {personal.lastName}
                </div>
                <div className="text-[#6B5E4E] text-[11px] mt-0.5">{personal.institution} — {personal.institutionRole}</div>
                <div className="text-[#6B5E4E] text-[10px] mt-0.5">📍 {personal.location}</div>
              </div>
            </motion.div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {personal.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.58 + i * 0.08 }}
                  className="card p-4 text-center"
                >
                  <div className="font-syne font-bold text-xl text-[#E8D5B5] mb-0.5">
                    {stat.label === 'Projetos' ? projects.length : stat.value}
                  </div>
                  <div className="text-[10px] text-[#6B5E4E] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Status card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
              className="card p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] text-[#6B5E4E] uppercase tracking-wider">
                  Foco atual
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ADE80]" />
                  </span>
                  <span className="text-[10px] text-[#4ADE80] font-medium">Online</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {personal.focuses.map((f) => (
                  <span key={f} className="tag">{f}</span>
                ))}
              </div>
            </motion.div>

            {/* Disponibilidade */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.88 }}
              className="card p-4 border-[#7C3AED]/20 bg-[#7C3AED]/[0.055] flex items-center justify-between"
            >
              <div>
                <div className="text-[10px] text-[#6B5E4E] uppercase tracking-wider mb-1">
                  Situação
                </div>
                <div className="font-syne font-semibold text-[#E8D5B5] text-sm">
                  Buscando estágio em TI
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ADE80]" />
                </span>
                <span className="text-[10px] text-[#4ADE80] font-medium">Disponível</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] text-[#6B5E4E] uppercase tracking-[0.2em]">Rolar</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={13} className="text-[#6B5E4E]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
