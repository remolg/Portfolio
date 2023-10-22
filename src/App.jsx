import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { About } from './components/about/About'
import { Skills } from './components/skills/Skills'
import { Contact } from './components/contact/Contact'
import './App.css'
import { Footer } from './components/footer/Footer'

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
        <Footer />
      </main>
    </>
  )
}

export default App
