import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Portfolio from './sections/portfolio/Portfolio'
import Contact from './sections/contacts/Contact'
import Footer from './sections/footer/Footer'
import FloatingNav from './sections/floating-nav/FloatingNav'

export default function App () {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  )
}
