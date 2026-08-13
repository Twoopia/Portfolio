import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, X } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { certifications } from '../../data/certifications'

function CertCard({ cert, i, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
      onClick={() => cert.image && onOpen(cert)}
      className={`card p-5 flex items-center gap-4 ${cert.image ? 'cursor-pointer' : ''}`}
    >
      {cert.image ? (
        <img
          src={cert.image}
          alt={cert.title}
          className="w-14 h-10 object-cover rounded-md flex-shrink-0 border border-white/[0.08]"
        />
      ) : (
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `${cert.color}12`,
            border: `1px solid ${cert.color}22`,
          }}
        >
          <Award size={18} style={{ color: cert.color }} />
        </div>
      )}
      <div className="min-w-0">
        <h3 className="font-syne font-semibold text-[#E8D5B5] text-sm leading-snug truncate">
          {cert.title}
        </h3>
        <p className="text-[#6B5E4E] text-xs mt-1">
          {cert.issuer} · {cert.date}
        </p>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificacoes" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#7C3AED]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-14">
          <span className="section-label">Certificações</span>
          <h2 className="section-title mt-2">Formação complementar</h2>
          <p className="text-[#6B5E4E] text-sm mt-3 max-w-md leading-relaxed">
            Cursos e certificações que venho concluindo fora da grade do IFSC.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} i={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Fechar"
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 p-2 text-[#C9B99A] hover:text-white transition-colors"
              >
                <X size={22} />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full rounded-xl border border-white/[0.08] shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
