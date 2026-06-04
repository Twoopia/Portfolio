import { motion } from 'framer-motion'
import {
  Server,
  LayoutDashboard,
  Monitor,
  FileBarChart,
  Bot,
  Activity,
  Ticket,
  Users,
  Code2,
  Github,
  ExternalLink,
} from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { projects } from '../../data/projects'

const iconMap = {
  server: Server,
  'layout-dashboard': LayoutDashboard,
  monitor: Monitor,
  'file-bar-chart': FileBarChart,
  bot: Bot,
  activity: Activity,
  ticket: Ticket,
  users: Users,
  'code-2': Code2,
}

const statusConfig = {
  concluido:    { label: 'Concluído',    color: '#4ADE80', bg: 'rgba(74,222,128,0.08)'   },
  desenvolvimento: { label: 'Em Dev.',  color: '#FBBF24', bg: 'rgba(251,191,36,0.08)'   },
  producao:     { label: 'Produção',     color: '#9D6EFF', bg: 'rgba(157,110,255,0.08)'  },
  beta:         { label: 'Beta',         color: '#F87171', bg: 'rgba(248,113,113,0.08)'  },
}

function ProjectCard({ project }) {
  const Icon = iconMap[project.icon] || Server
  const status = statusConfig[project.status]

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="card p-6 h-full flex flex-col group relative overflow-hidden"
    >
      {/* Hover radial glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl"
        style={{
          background: `radial-gradient(360px at 50% -10%, ${project.color}10, transparent 70%)`,
        }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-5 relative">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `${project.color}12`,
            border: `1px solid ${project.color}22`,
          }}
        >
          <Icon size={18} style={{ color: project.color }} />
        </div>

        <span
          className="status-badge"
          style={{ background: status.bg, color: status.color }}
        >
          <span className="status-dot" style={{ background: status.color }} />
          {status.label}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 relative">
        <span className="text-[10px] text-[#6B5E4E] uppercase tracking-wider mb-1.5 block">
          {project.category}
        </span>
        <h3 className="font-syne font-semibold text-[#E8D5B5] text-[0.95rem] mb-2.5 group-hover:text-white transition-colors duration-300 leading-snug">
          {project.title}
        </h3>
        <p className="text-[#6B5E4E] text-sm leading-relaxed mb-5">
          {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2 relative">
        <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo"
              title="Ver demo"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[10px] font-medium transition-all duration-300"
              style={{
                background: `${project.color}15`,
                border: `1px solid ${project.color}25`,
                color: project.color,
              }}
            >
              <ExternalLink size={11} />
              Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="Ver no GitHub"
            className="p-1.5 text-[#6B5E4E] hover:text-[#C9B99A] transition-colors duration-300"
          >
            <Github size={15} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className="py-28 relative">
      {/* Subtle section separator glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#7C3AED]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-14">
          <span className="section-label">Projetos</span>
          <h2 className="section-title mt-2">O que construí</h2>
          <p className="text-[#6B5E4E] text-sm mt-3 max-w-md leading-relaxed">
            Projetos desenvolvidos ao longo da minha formação, focados em resolver problemas reais de gestão de TI.
          </p>
        </AnimatedSection>

        {/*
          Bento grid — 3 colunas no desktop:
          Row 1: API de Usuários(2) + Monitor(1)
          Row 2: Inventário(1)      + SLA(2)
          Row 3: Chatbot(1)         + Dashboard(2)
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {projects.map((project, i) => {
            const spanClass =
              project.span === 3
                ? 'lg:col-span-3 md:col-span-2'
                : project.span === 2
                  ? 'lg:col-span-2'
                  : 'lg:col-span-1'

            return (
              <AnimatedSection
                key={project.id}
                delay={i * 0.07}
                className={`${spanClass} min-h-[260px]`}
              >
                <ProjectCard project={project} />
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
