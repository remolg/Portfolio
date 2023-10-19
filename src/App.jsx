import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { About } from './components/about/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
