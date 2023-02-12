import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Pages from './pages'

const root = createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <Pages />
  </StrictMode>
)

