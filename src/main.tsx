import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BoasVindas } from './desafio_1'
import { Contador } from './desafio_2'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p>Desafio 1</p>
    <BoasVindas name='Maia' idade={20} />
  <Contador/>
  </StrictMode>,
)
