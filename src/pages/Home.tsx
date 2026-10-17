import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import Market from '@/sections/Market'
import Process from '@/sections/Process'
import Cases from '@/sections/Cases'
import Faq from '@/sections/Faq'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Market />
        <Process />
        <Cases />
        <Faq />
        <Contact />
      </main>
    </>
  )
}
