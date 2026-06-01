import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../../data/personal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[#6B5E4E] text-xs">
          © {year} {personal.name} {personal.lastName}. Todos os direitos reservados.
        </span>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B5E4E] hover:text-[#C9B99A] transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B5E4E] hover:text-[#C9B99A] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-[#6B5E4E] hover:text-[#C9B99A] transition-colors duration-300"
            aria-label="E-mail"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
