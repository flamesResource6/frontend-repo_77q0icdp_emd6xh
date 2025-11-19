function FinalCTA() {
  return (
    <section id="contatti" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Pronto a mettere in sicurezza la tua azienda?</h2>
              <p className="mt-2 text-white/90">Richiedi una consulenza gratuita.</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input className="h-11 rounded-xl px-4 text-slate-900" placeholder="Nome" />
              <input className="h-11 rounded-xl px-4 text-slate-900" placeholder="Email" type="email" />
              <button className="h-11 rounded-xl bg-black/20 hover:bg-black/30 transition">Invia richiesta</button>
            </form>
          </div>
          <div className="mt-6 text-sm text-white/80">
            Telefono: +39 000 000 000 • Email: info@intelligo.it • Orari: Lun–Ven 9:00–18:00
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
