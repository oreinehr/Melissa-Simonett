export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Casa Lar",
      image: "/projeto2.png",
      alt: "Projeto circular",
    },
    {
      id: 2,
      title: "Escadas Urbanas",
      image: "/projeto1.png",
      alt: "Projeto escadas",
    },
    {
      id: 3,
      title: "Sala de Estar",
      image: "/hero.jpg",
      alt: "Projeto sala de estar",
    },
  ]

  return (
    <section id="projetos" className="py-20 bg-[#E6E3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-7xl font-extrabold text-[#2a2a2a] mb-8">PROJETOS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden aspect-square group cursor-pointer"
            >
              {/* Imagem */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center">
                <h3
  className="text-8xl font-black mb-1 drop-shadow-lg"
  style={{
    WebkitTextStroke: '1px #E6E3D8',
    color: 'transparent',
  }}
>
  Casa Lar
</h3>
                <button className="px-14 py-3 border border-white text-white rounded-lg text-base font-medium hover:bg-white hover:text-black transition-all duration-300">
                  Ver projeto
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
