function Testimonials() {
  return (
    <section id="casi" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Casi di successo</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <blockquote key={i} className="rounded-2xl border border-white/10 bg-slate-800/50 p-6 text-blue-100/90">
              “Grazie a Intelligo abbiamo implementato il GDPR in tempi rapidi e con un approccio molto pratico.”
              <footer className="mt-4 text-sm text-blue-300/70">Azienda {i}</footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-6">
          <a href="#" className="text-blue-400 hover:text-blue-300">Scopri tutti i casi →</a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
