import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import { techGroups } from '../../data/technologies'

function TechItem({ name }) {
  return (
    <motion.div
      whileHover={{ y: -2, borderColor: 'rgba(124,58,237,0.25)' }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="card flex items-center px-4 py-3"
    >
      <span className="text-[#C9B99A] text-sm font-medium">{name}</span>
    </motion.div>
  )
}

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#7C3AED]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-14">
          <span className="section-label">Tecnologias</span>
          <h2 className="section-title mt-2">Stack técnico</h2>
          <p className="text-[#6B5E4E] text-sm mt-3 max-w-md leading-relaxed">
            Ferramentas e tecnologias que utilizo no dia a dia dos meus projetos.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techGroups.map((group, gi) => (
            <AnimatedSection key={group.category} delay={gi * 0.08}>
              <div className="mb-4 flex items-center gap-2">
                <div
                  className="w-1 h-4 rounded-full"
                  style={{ background: group.color }}
                />
                <span
                  className="font-syne font-semibold text-sm"
                  style={{ color: group.color }}
                >
                  {group.category}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {group.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: gi * 0.06 + ii * 0.05,
                    }}
                  >
                    <TechItem name={item.name} />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
