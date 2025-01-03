import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import './App.css'
import { Aside } from './Components/Aside'
import { Features } from './Components/Features'
import { Banner } from './Components/Banner'
import { Collections } from './Components/Collections'
import { Footer } from './Components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
      <Hero />
      <Aside />
      <Features />
      <Banner />
      <Collections />
      </main>
      <footer className="mainFooter">
        <Footer />
      </footer>
    </>
  )
}

export default App
