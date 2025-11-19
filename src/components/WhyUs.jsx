function Stat({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-extrabold text-white">{value}</p>
      <p className="text-blue-200/80 mt-1 text-sm">{label}</p>
    </div>
  )
}

function WhyUs() {
  return (
    <section id="perche" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Perché scegliere Intelligo</h2>
            <p className="text-blue-200/80 mt-4">Approccio multidisciplinare, risposte rapide e un team legale e manageriale integrato.</p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-blue-100/90">
              <li className="rounded-xl bg-slate-800/50 border border-white/10 p-4">Approccio multidisciplinare</li>
              <li className="rounded-xl bg-slate-800/50 border border-white/10 p-4">Risposte rapide e concrete</li>
              <li className="rounded-xl bg-slate-800/50 border border-white/10 p-4">Team legale e manageriale integrato</li>
              <li className="rounded-xl bg-slate-800/50 border border-white/10 p-4">Certificazione ISO 9001</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-8">
            <div className="grid grid-cols-3 gap-6">
              <Stat value="1000+" label="Aziende assistite" />
              <Stat value="10+" label="Anni di esperienza" />
              <Stat value="ISO 9001" label="Certificazione" />
            </div>
            <div className="mt-6 text-blue-300/70 text-sm">
              Loghi clienti disponibili su richiesta.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
