import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MovieCard from './components/Movie-card'
import App from './Pages/HOme.jsx'
// import Conditonal_Rendering from './components/Conditional-Rendering.jsx'
// import C_rendering from './Pages/C_rendering.jsx'



createRoot(document.getElementById('root')).render(
  <>
   
   <App />
  {/* <C_rendering/>, */}
  </>
)
