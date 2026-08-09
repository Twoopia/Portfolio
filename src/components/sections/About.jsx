import { GraduationCap, Database, Kanban, Network } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { personal } from '../../data/personal'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Formação',
    desc: 'IFSC — Gestão da TI, 4ª fase',
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
          {/* Text */}
          <AnimatedSection delay={0.1}>
            <p className="text-[#C9B99A] text-base leading-[1.8] mb-5">
              {personal.bio}
            </p>
            <p className="text-[#6B5E4E] text-sm leading-[1.8]">
              {personal.bioExtra}
            </p>
          </AnimatedSection>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.12 + i * 0.07}>
                <div className="card p-5 h-full">
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
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
