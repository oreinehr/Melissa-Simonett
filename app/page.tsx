import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E6E3D8] text-[#2a2a2a]">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
