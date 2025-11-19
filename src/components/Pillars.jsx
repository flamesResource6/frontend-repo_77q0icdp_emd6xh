import { ShieldCheck, FileText, Briefcase } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Adeguamento GDPR',
    desc: 'Ti aiutiamo ad adeguare la tua azienda alla normativa privacy in modo rapido e completo.',
    href: '#gdpr'
  },
  {
    icon: FileText,
    title: 'Contrattualistica aziendale',
    desc: 'Redigiamo, analizziamo e ottimizziamo contratti commerciali, societari e di lavoro.',
    href: '#contratti'
  },
  {
    icon: Briefcase,
    title: 'Consulenza aziendale',
    desc: 'Supportiamo la tua crescita con analisi organizzativa e strategie su misura.',
    href: '#consulenza'
  }
]

function Pillars() {
  return (
    <section id="pilastri" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">I nostri 3 pilastri</h2>
          <p className="text-blue-200/80 mt-2">Presentiamo i servizi principali con un linguaggio semplice e concreto.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc, href }) => (
            <a key={title} href={href} className="group rounded-2xl border border-white/10 bg-slate-800/50 hover:bg-slate-800/70 transition p-6 shadow-lg">
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-400/20 grid place-items-center text-blue-400 mb-4 group-hover:scale-105 transition">
                <Icon />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{desc}</p>
              <span className="inline-block mt-4 text-blue-400 group-hover:text-blue-300">Scopri di più →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pillars
