export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Barra de navegación superior */}
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-emerald-600">
            BorreHotel 🐾
          </span>
          <a
            href="#registro"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition"
          >
            Paseo de prueba
          </a>
        </div>
      </header>

      {/* Sección Portada (Hero) */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100 rounded-full">
          Cuidado & Paseo Canino Profesional
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-950 mb-6">
          Tu perrito en las mejores manos, <br className="hidden sm:block" />
          paseos seguros y felices.
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-neutral-600 mb-8">
          Atención personalizada, rutas diseñadas para su bienestar y seguimiento en tiempo real para tu tranquilidad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#registro"
            className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 transition"
          >
            Agendar paseo de prueba
          </a>
          <a
            href="#servicios"
            className="inline-flex justify-center items-center px-6 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-800 font-semibold hover:bg-neutral-100 transition"
          >
            Conocer servicios
          </a>
        </div>
      </section>
    </main>
  );
}