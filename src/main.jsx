import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "tailwindcss";
import Login from './page/login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
