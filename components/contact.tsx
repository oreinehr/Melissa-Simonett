export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#272726]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-7xl font-bold text-[#E6E3D8] mb-6">CONTATO</h2>
        <p className="text-[#c9c9c9] text-lg mb-10">
          Quer conversar sobre um projeto, parceria ou orçamento?  
          Fale comigo diretamente pelo WhatsApp!
        </p>

        <div className="bg-[#3a3a3a] rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-5xl font-semibold text-[#E6E3D8] mb-4">
            Vamos conversar?
          </h3>
          <p className="text-[#bdbdbd] mb-8">
            Clique no botão abaixo e me chame no WhatsApp.
          </p>

          <a
            href="https://wa.me/555198568545?text=Oi%20Melissa!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E6E3D8] text-[#272726] font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#dcd8cf] transition-all"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
