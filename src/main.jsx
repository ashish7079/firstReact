
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Uper from './components/Uper.jsx'
import Uperone from './components/Uperone.jsx'
import Upertwo from './components/Upertwo.jsx'
import Uperthree from './components/Uperthree.jsx'
import Upperfive from './components/Upperfive.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Uper/>
    <Uperone/>
    <Upertwo/>
    <Uperthree/>
    <Upperfive/>
  </StrictMode>,
)
