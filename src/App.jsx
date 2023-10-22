import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { About } from './components/about/About'
import { Skills } from './components/skills/Skills'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { Scrollup } from './components/scrollup/Scrollup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  )
}

export default App
