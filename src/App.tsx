import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { CampusLife } from './components/CampusLife'
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
      <CampusLife />
      <Academics />
      <Athletics />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  )
}
