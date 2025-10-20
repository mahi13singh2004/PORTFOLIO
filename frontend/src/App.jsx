import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import CodingPlatforms from './components/CodingPlatforms'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Hero />
      <About />
      <Projects />
      <CodingPlatforms />
      <Contact />
    </div>
  )
}

export default App