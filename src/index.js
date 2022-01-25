import { Suspense } from 'react'
import { createRoot } from 'react-dom'
import './styles.css'
import React from 'react'
import App from './App'
import img from './assets/img/photo26.png'
import about from './assets/img/about.png'
import skill from './assets/img/skill.png'
import Underlay from './Underlay'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './Projects/Projects'
import Contacts from './Contacts/Contacts'


const images = [

  { position: [0, 0.25, 3.0], rotation: [0, 0, 0], url: img, title: '' },
  { position: [-2, 0.25, 2.75], rotation: [0, Math.PI / 3, 0], url: about, title: 'About me' },
  { position: [2, 0.25, 2.75], rotation: [0, -Math.PI / 3, 0], url: skill, title: 'Skills' }
]

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={null}>
      <Underlay />
      <Routes>
        <Route path='home' element={<App images={images} />} />
        <Route path='Portfolio' element={<App images={images} />} />
        <Route path='/' element={<App images={images} />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contacts' element={<Contacts />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)
