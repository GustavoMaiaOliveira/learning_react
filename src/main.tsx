import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BoasVindas } from './BoasVindas'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BoasVindas name='Maia' idade={20} />
  </StrictMode>,
)
