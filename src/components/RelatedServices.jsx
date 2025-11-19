const services = [
  { title: 'Pacchetto GDPR 48h', desc: 'Adeguamento rapido con checklist e documentazione pronta.', href: '#' },
  { title: 'Nomina DPO esterno', desc: 'Responsabile della protezione dei dati in outsourcing.', href: '#' },
  { title: 'Verifica contratti aziendali', desc: 'Analisi legale e suggerimenti di miglioramento.', href: '#' },
  { title: 'Audit organizzativo', desc: 'Mappatura processi e miglioramento operativo.', href: '#' },
]

function RelatedServices() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Servizi correlati</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {services.map(s => (
            <a key={s.title} href={s.href} className="rounded-2xl border border-white/10 bg-slate-800/50 p-6 hover:bg-slate-800/70 transition">
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm">{s.desc}</p>
              <span className="text-blue-400 inline-block mt-4">Scopri di più →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedServices
