function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="text-white font-semibold">Intelligo Italy</p>
          <p className="text-blue-200/80 mt-2">Soluzioni legali, privacy e organizzative per PMI.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Link utili</p>
          <ul className="space-y-2 text-blue-200/80">
            <li><a href="#pilastri" className="hover:text-white">Servizi</a></li>
            <li><a href="#chi-siamo" className="hover:text-white">Chi siamo</a></li>
            <li><a href="#casi" className="hover:text-white">Casi di successo</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Legale</p>
          <ul className="space-y-2 text-blue-200/80">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-white">Termini</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3">Contatti</p>
          <p className="text-blue-200/80">Sede: Milano, Italia</p>
          <div className="mt-3 flex gap-3 text-blue-300/80">
            <a href="#" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
            <a href="#" aria-label="X" className="hover:text-white">X</a>
          </div>
        </div>
      </div>
      <div className="text-center text-blue-300/60 text-xs mt-6">© {new Date().getFullYear()} Intelligo Italy. Tutti i diritti riservati.</div>
    </footer>
  )
}

export default Footer
