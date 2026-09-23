import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StickyWidget from './Components/StickyWidget.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StickyWidget />
    <App />
  </StrictMode>,
)
