# Portfólio — Rafael Becker Carbonera

Portfólio pessoal desenvolvido com React, Vite e TailwindCSS. Design dark & editorial focado em Gestão de TI, Backend, Automação e Infraestrutura.

## Tecnologias

- **React 18** — UI componentizada
- **Vite 5** — build e dev server rápidos
- **TailwindCSS 3** — estilização utilitária
- **Framer Motion 11** — animações e transições
- **Lucide React** — ícones modernos

## Estrutura

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Technologies.jsx
│   │   └── Contact.jsx
│   └── ui/
│       └── AnimatedSection.jsx
└── data/
    ├── personal.js     ← suas informações pessoais
    ├── projects.js     ← seus projetos
    └── technologies.js ← suas tecnologias
```

## Requisitos

- Node.js 18+
- npm ou pnpm

## Instalação e execução

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:5173
```

## Build para produção

```bash
npm run build
npm run preview  # visualizar build localmente
```

## Personalização

### Informações pessoais
Edite [src/data/personal.js](src/data/personal.js):
```js
export const personal = {
  name: 'Rafael',
  lastName: 'Becker Carbonera',
  email: 'rafabcarbonera@gmail.com',
  github: 'https://github.com/Twoopia',
  linkedin: 'https://linkedin.com/in/SEU-USUARIO', // ← atualize aqui
  whatsapp: '5548991811826',
  // ...
}
```

### Seus projetos
Edite [src/data/projects.js](src/data/projects.js). Cada projeto suporta:
- `span: 1` — card normal (1 coluna)
- `span: 2` — card largo (2 colunas) — use para projetos em destaque
- `status`: `concluido` | `desenvolvimento` | `producao` | `beta`

### Tecnologias
Edite [src/data/technologies.js](src/data/technologies.js) para adicionar/remover tecnologias e grupos.

## Seções

| Seção | ID | Descrição |
|---|---|---|
| Hero | `#hero` | Apresentação principal com typewriter |
| Sobre | `#sobre` | Bio e destaques |
| Projetos | `#projetos` | Bento grid de projetos |
| Tecnologias | `#tecnologias` | Stack técnico por categoria |
| Contato | `#contato` | Links de contato |

## Deploy

O projeto gera arquivos estáticos, compatível com:
- **Vercel** — conecte o repositório e deploy automático
- **Netlify** — arraste a pasta `dist/` ou conecte via Git
- **GitHub Pages** — com `vite-plugin-gh-pages`
