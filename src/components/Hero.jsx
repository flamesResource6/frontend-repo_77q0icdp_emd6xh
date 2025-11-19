import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            Proteggiamo la tua azienda con soluzioni legali e organizzative su misura.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100/90 max-w-2xl">
            Esperti in GDPR, contrattualistica e consulenza aziendale per PMI e professionisti.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contatti" className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition shadow-lg shadow-blue-500/20">
              Richiedi una consulenza gratuita
            </a>
            <a href="#pilastri" className="px-6 py-3 rounded-xl border border-white/10 text-blue-100 hover:bg-white/5 transition">
              Scopri i nostri servizi
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/60 to-slate-900"></div>
    </section>
  )
}

export default Hero
