export default function Hero() {
  return (
    <section className="relative h-screen md:h-[100vh] overflow-hidden flex items-center">
      {/* Background Image + Radial Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `

            url('hero.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 flex justify-center items-center text-left">
      
      </div>
    </section>
  )
}
