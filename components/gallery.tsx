export default function Gallery() {
  const galleryImages = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
  ]

  return (
    <section id="galeria" className="py-20 bg-[#E6E3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-7xl md:text-7xl font-bold text-[#272726] mb-1">GALERIA</h2>
        <p className="text-lg text-[#666] mb-12 max-w-2xl">
          I started Arc because I love building, not just the projects, but the process, the people, and the chance to
          make something properly. Something that lasts.
        </p>

        {/* 🧩 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryImages.map((image, index) => {
            // índices que serão altos (2 linhas)
            const tallItems = [1, 8] // removemos o 5 daqui
            const isTall = tallItems.includes(index)

            return (
              <div
                key={index}
                className={`relative overflow-hidden group cursor-pointer ${
                  isTall ? "md:row-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Galeria ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
