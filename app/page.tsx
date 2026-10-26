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
      <section className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12">
      {/* ========================================================
                   BLOQUE 1: BAGHEERA (sticky con z-10)
      ======================================================== */}    
        <div id="bagheera" className="sticky top-24 z-10 bg-bagtaur-cream rounded-3xl p-8 sm:p-12 border border-bagtaur-sand/60 shadow-lg min-h-[125] flex flex-col justify-between overflow-hidden ">
          {/*Contenedor del texto superior */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/bagtaur-headerr.png"
              alt="Logo BAGTAUR"
              width={300}
              height={100}
              className="h-14 sm:h-18 w-auto object-contain"
              priority
            />

            <h3 className="font-comfortaa text-5xl sm:text-5xl text-bagtaur-peach font-bold mt-6">
              ¿Qué es BAGTAUR?
            </h3>

            <p className="font-varela text-bagtaur-dark/90 text-sm sm:text-base mt-2">
              Nace de la unión de tres nombres muy especiales para nosotros...
            </p>

            {/*Contenedor de imagen y fondo decorativo */}
            <div className="relativo mt-8 flex flex-col sm:flex-row items-center justify-between">
              {/*HUESITO decorativo*/}
              <span className="text-3xl text-bagtaur-sand select-none hidden sm:block">🦴</span>
              <div className="w-64 sm:w-80 h-auto z-10">
                <Image 
                src="/bagheerafoto.png"
                alt="Bagheera foto"
                width={400}
                height={300}
                className="w-full h-auto object-contain drop-shadow-md"
                priority
                />

              <p className="font-comfortaa text-xl sm:text-2xl font-bold text-bagtaur-green mt-4 sm:mt-0">
                ¡Hola soy Bagheera! 🐾
              </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      
    </main>
  );
}