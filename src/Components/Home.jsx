
import { Header } from './Header'
import { Hero } from './Hero'
import { Aside } from './Aside'
import { Features } from './Features'
import { Banner } from './Banner'
import { Collections } from './Collections'
import { Footer } from './Footer'
import '../css/App.css'

export function Home(){
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
};
