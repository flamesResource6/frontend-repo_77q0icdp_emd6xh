import { Menu } from 'lucide-react'

function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-slate-900/70 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-blue-500/10 border border-blue-400/30 grid place-items-center">
            <span className="text-blue-400 font-bold">I</span>
          </div>
          <div>
            <p className="text-white font-semibold leading-none">Intelligo Italy</p>
            <p className="text-xs text-blue-200/70 leading-none mt-1">Legal • Privacy • Organization</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100/80">
          <a href="#servizi" className="hover:text-white transition">Servizi</a>
          <a href="#perche" className="hover:text-white transition">Perché noi</a>
          <a href="#processo" className="hover:text-white transition">Come lavoriamo</a>
          <a href="#casi" className="hover:text-white transition">Casi di successo</a>
          <a href="#contatti" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition shadow">Consulenza gratuita</a>
        </nav>

        <button className="md:hidden text-blue-100" aria-label="Apri menu">
          <Menu />
        </button>
      </div>
    </header>
  )
}

export default Header
