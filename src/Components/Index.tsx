import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../Styles/Index.css'
import Header from './Header.tsx'
import Hero from './Hero.tsx'
import Experience from './Experience.tsx'
import Projects from './Projects.tsx'
import Skills from './Skills.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="appContainer">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </div>
  </StrictMode>,
)
