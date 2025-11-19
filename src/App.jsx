import Header from './components/Header'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import About from './components/About'
import Testimonials from './components/Testimonials'
import RelatedServices from './components/RelatedServices'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Header />
      <Hero />
      <Pillars />
      <WhyUs />
      <Process />
      <About />
      <Testimonials />
      <RelatedServices />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
