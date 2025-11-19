import { Search, FileSignature, Headset } from 'lucide-react'

const steps = [
  { icon: Search, title: 'Analisi iniziale gratuita', desc: 'Comprensione dei bisogni, valutazione rischi e priorità.' },
  { icon: FileSignature, title: 'Proposta personalizzata', desc: 'Soluzione su misura con tempi, costi e deliverable chiari.' },
  { icon: Headset, title: 'Implementazione e supporto', desc: 'Esecuzione operativa e affiancamento continuo.' }
]

function Process() {
  return (
    <section id="processo" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Come lavoriamo</h2>
        <ol className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-slate-800/50 p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-400/20 grid place-items-center text-blue-400">
                  <Icon />
                </div>
                <div>
                  <p className="text-xs text-blue-300/60">Step {i + 1}</p>
                  <h3 className="text-white font-semibold">{title}</h3>
                </div>
              </div>
              <p className="text-blue-200/80 mt-4 text-sm">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
