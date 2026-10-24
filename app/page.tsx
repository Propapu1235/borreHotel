import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Barra de Navegación Superior */}
      <header className="sticky top-0 z-50 border-b border-bagtaur-sand/40 bg-bagtaur-cream/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
    
          {/* Logo oficial BAGTAUR */}
          <a href="#inicio" className="flex items-center">
            <Image
            src="/bagtaur-headerr.png" /* Si guardaste en .svg, cambia aquí a .svg */
            alt="BAGTAUR - Spa y Paseos"
            width={300}
            height={100}
            className="h-12.5 w-auto object-contain"
            priority
          />
        </a>

        {/* Botón de acción */}
        <a
          href="https://wa.me/5213319697962?text=%C2%A1Hola!%20Quiero%20agendar%20mi%20paseo%20de%20prueba"
          target="_blank"
          className="rounded-full bg-bagtaur-green px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition duration-200"
        >
          Paseo de prueba
        </a>
      </div>
    </header>

      {/* Sección Hero (Portada principal) */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">    
        <h1 className="font-['Comfortaa',sans-serif] text-4xl sm:text-6xl font-bold text-bagtaur-dark mb-6 leading-tight">
          Experiencias diseñadas <br className="hidden sm:block" />
          para el bienestar de tu perro.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-[#44403D]/80 mb-10 leading-relaxed">
          Respetamos su ritmo, vigilamos su seguridad y nos aseguramos de que regrese a casa feliz. 
          Paseos estructurados y cuidado con amor y responsabilidad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-[#82A49E] text-white font-medium shadow-md hover:opacity-95 transition"
          >
            Agendar paseo de prueba
          </a>
          <a
            href="#servicios"
            className="inline-flex justify-center items-center px-8 py-3.5 rounded-full border border-[#82A49E] text-[#44403D] bg-white/60 font-medium hover:bg-white transition"
          >
            Conocer servicios
          </a>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section id="servicios" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-['Comfortaa',sans-serif] text-3xl font-bold text-[#44403D]">
            Nuestros Servicios
          </h2>
          <p className="text-sm text-[#44403D]/70 mt-2">
            Tranquilidad para ti, felicidad y salud para tu mejor amigo
          </p>
        </div>

        {/* Cuadrícula de tarjetas de servicios */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white/80 p-8 rounded-3xl border border-[#DBCEBE]/50 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-[#F1CEB5]/60 flex items-center justify-center text-2xl mb-6">
              🦮
            </div>
            <h3 className="font-['Comfortaa',sans-serif] text-xl font-bold mb-3 text-[#44403D]">
              Paseos Estructurados
            </h3>
            <p className="text-[#44403D]/80 text-sm leading-relaxed">
              Monitoreo del clima, equipo de seguridad, cuidado de temperatura y respeto del ritmo propio de cada perro.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white/80 p-8 rounded-3xl border border-[#DBCEBE]/50 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-[#82A49E]/20 flex items-center justify-center text-2xl mb-6">
              🛁
            </div>
            <h3 className="font-['Comfortaa',sans-serif] text-xl font-bold mb-3 text-[#44403D]">
              Spa & Estética
            </h3>
            <p className="text-[#44403D]/80 text-sm leading-relaxed">
              Atención personalizada a domicilio enfocada en reducir el estrés y mantener su higiene y bienestar integral.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white/80 p-8 rounded-3xl border border-[#DBCEBE]/50 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-2xl bg-[#DBCEBE]/60 flex items-center justify-center text-2xl mb-6">
              ✨
            </div>
            <h3 className="font-['Comfortaa',sans-serif] text-xl font-bold mb-3 text-[#44403D]">
              Bienestar & Cuidado
            </h3>
            <p className="text-[#44403D]/80 text-sm leading-relaxed">
              Compromiso profesional y calidez en cada visita, brindándote reportes y la tranquilidad de saberlo protegido.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}