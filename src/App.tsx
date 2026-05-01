import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Academics } from './components/Academics'
import { Athletics } from './components/Athletics'
import { Admissions } from './components/Admissions'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Academics />
      <Athletics />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  )
}
