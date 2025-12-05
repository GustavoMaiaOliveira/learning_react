import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Contador } from './desafio_2'
import { BoasVindas } from './desafio_1'
// import { Calculadora } from './desafio_3'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p className='flex justify-center'>Desafio 1</p><br />
    <BoasVindas name='Maia' idade={20} />
    <br /><p>Desafio 2</p><br />
  <Contador/>
  </StrictMode>,
)

