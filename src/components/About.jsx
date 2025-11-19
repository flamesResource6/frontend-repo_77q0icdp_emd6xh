function About() {
  return (
    <section id="chi-siamo" className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Chi siamo</h2>
          <p className="text-blue-200/80 mt-4">Siamo consulenti che credono nella trasparenza e nella protezione delle imprese.</p>
          <div className="mt-6">
            <a href="#contatti" className="inline-flex items-center px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition">
              Scopri di più
            </a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-800/40 h-64 grid place-items-center text-blue-200/70">
          Foto team / founders
        </div>
      </div>
    </section>
  )
}

export default About
