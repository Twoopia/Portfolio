import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Technologies from './components/sections/Technologies'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

function Grain() {
  return (
    <div className="grain" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
