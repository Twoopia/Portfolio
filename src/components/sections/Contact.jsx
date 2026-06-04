import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { personal } from '../../data/personal'

const contactLinks = [
  {
    label: 'E-mail',
    value: personal.email,
    href: personal.gmailCompose,
    icon: Mail,
    color: '#7C3AED',
    desc: 'Respondo em até 24h',
  },
  {
    label: 'GitHub',
    value: 'github.com/Twoopia',
    href: personal.github,
    icon: Github,
    color: '#C9B99A',
    desc: 'Repositórios e projetos',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rafael-b',
    href: personal.linkedin,
    icon: Linkedin,
    color: '#9D6EFF',
    desc: 'Conexão profissional',
  },
  {
    label: 'WhatsApp',
    value: `(48) 99181-1826`,
    href: `https://wa.me/${personal.whatsapp}`,
    icon: MessageCircle,
    color: '#4ADE80',
    desc: 'Contato rápido',
  },
]

export default function Contact() {
  return (
    <section id="contato" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#7C3AED]/20 to-transparent" />

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#7C3AED]/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-4">
          <span className="section-label">Contato</span>
        </AnimatedSection>

        <AnimatedSection delay={0.05} className="mb-6">
          <h2 className="section-title">Vamos conversar?</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-14">
          <p className="text-[#6B5E4E] text-sm leading-relaxed max-w-lg">
            Estou aberto a oportunidades de estágio, projetos freelance e colaborações. Se tiver alguma dúvida ou proposta, fique à vontade para entrar em contato.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((link, i) => (
            <AnimatedSection key={link.label} delay={i * 0.07}>
              <motion.a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="card p-5 flex flex-col gap-4 group relative overflow-hidden block"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl"
                  style={{
                    background: `radial-gradient(200px at 50% -10%, ${link.color}10, transparent 70%)`,
                  }}
                />

                <div className="flex items-start justify-between relative">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${link.color}12`,
                      border: `1px solid ${link.color}20`,
                    }}
                  >
                    <link.icon size={16} style={{ color: link.color }} />
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-[#6B5E4E] group-hover:text-[#C9B99A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <div className="font-syne font-semibold text-[#E8D5B5] text-sm mb-0.5">
                    {link.label}
                  </div>
                  <div className="text-[#6B5E4E] text-xs mb-2 truncate">{link.value}</div>
                  <div className="text-[10px] text-[#6B5E4E] uppercase tracking-wider">
                    {link.desc}
                  </div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA email */}
        <AnimatedSection delay={0.35} className="mt-12 text-center">
          <p className="text-[#6B5E4E] text-sm mb-4">
            Prefere enviar uma mensagem direta?
          </p>
          <a
            href={personal.gmailCompose}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <Mail size={15} />
            Enviar e-mail
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
