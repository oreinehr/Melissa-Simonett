export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[#272726]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img src="/sobremim.jpg" alt="Sobre Melissa" className="w-full" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-8xl md:text-9xl font-black text-[#f5f1ed] mb-0">SOBRE MIM</h2>
            <p className="text-xl text-[#d4d4d4] leading-relaxed mb-4">
              I started Arc because I love building, not just the projects, but the process, the people, and the chance
              to make something properly. Something that lasts.
            </p>
            <button className="px-14 py-3 border border-white text-white rounded-lg text-base font-medium hover:bg-white hover:text-black transition-all duration-300">
                  Ver Currículo
                </button>
          </div>
        </div>
      </div>
    </section>
  )
}
