import { motion } from 'framer-motion'
import { GraduationCap, Database, Kanban, Network } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { personal } from '../../data/personal'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Formação',
    desc: 'IFSC — Gestão da TI, 3ª fase',
    color: '#9D6EFF',
  },
  {
    icon: Database,
    title: 'Dados & BD',
    desc: 'Análise, modelagem e MySQL',
    color: '#7C3AED',
  },
  {
    icon: Kanban,
    title: 'Gestão',
    desc: 'Projetos, qualidade e processos',
    color: '#4ADE80',
  },
  {
    icon: Network,
    title: 'Redes & Infra',
    desc: 'Cisco Packet Tracer e protocolos',
    color: '#FBBF24',
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-14">
          <span className="section-label">Sobre mim</span>
          <h2 className="section-title mt-2">Quem sou eu</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Text + stats */}
          <AnimatedSection delay={0.1}>
            {/* Foto de perfil */}
            <div className="flex items-center gap-4 mb-7">
              <div className="relative flex-shrink-0">
                <img
                  src="/foto.png"
                  alt={`${personal.name} ${personal.lastName}`}
                  className="w-16 h-16 rounded-2xl object-cover"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                />
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ boxShadow: '0 0 24px rgba(124,58,237,0.2)' }}
                />
              </div>
              <div>
                <div className="font-syne font-bold text-[#E8D5B5] text-base leading-tight">
                  {personal.name} {personal.lastName}
                </div>
                <div className="text-[#6B5E4E] text-xs mt-0.5">{personal.role}</div>
                <div className="text-[#6B5E4E] text-xs">📍 {personal.location}</div>
              </div>
            </div>

            <p className="text-[#C9B99A] text-base leading-[1.8] mb-5">
              {personal.bio}
            </p>
            <p className="text-[#6B5E4E] text-sm leading-[1.8] mb-10">
              {personal.bioExtra}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.05]">
              {personal.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-syne font-bold text-2xl text-[#E8D5B5] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[#6B5E4E] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.12 + i * 0.07}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="card p-5 h-full group"
                  style={{ '--hover-border': `${item.color}25` }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${item.color}12`,
                      border: `1px solid ${item.color}20`,
                    }}
                  >
                    <item.icon size={16} style={{ color: item.color }} />
                  </div>
                  <div className="font-syne font-semibold text-[#E8D5B5] text-sm mb-1">
                    {item.title}
                  </div>
                  <div className="text-[#6B5E4E] text-xs leading-relaxed">{item.desc}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
