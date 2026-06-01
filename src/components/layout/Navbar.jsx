import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X, Menu } from 'lucide-react'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#0D0D0D]/75 backdrop-blur-[16px] border-b border-white/[0.05]'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/15 border border-[#7C3AED]/25 flex items-center justify-center transition-all duration-500 group-hover:bg-[#7C3AED]/25 group-hover:border-[#7C3AED]/40">
            <Terminal size={13} className="text-[#9D6EFF]" />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#6B5E4E] hover:text-[#C9B99A] text-sm transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className="btn-primary text-xs px-4 py-2">
            Contato
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-[#6B5E4E] hover:text-[#C9B99A] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#111111]/95 backdrop-blur-xl border-b border-white/[0.05]"
          >
            <div className="px-6 pt-2 pb-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-[#C9B99A] border-b border-white/[0.04] last:border-0 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
