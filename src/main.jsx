import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TranslationProvider } from './translations/TranslationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TranslationProvider>
 <BrowserRouter>
    <App />

    </BrowserRouter>

    </TranslationProvider>
   
  </StrictMode>,
)
