import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../Styles/Index.css'
import Header from './Header.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="appContainer">
      <Header />
    </div>
  </StrictMode>,
)
