import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Barra de Navegación Superior */}
      <header className="sticky top-0 z-50 border-b border-bagtaur-sand/40 bg-bagtaur-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          {/* Logo oficial BAGTAUR */}
          <a href="#inicio" className="flex items-center">
            <Image
              src="/bagtaur-headerr.png"
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
            className="rounded-full bg-bagtaur-green px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:opacity-90"
          >
            Paseo de prueba
          </a>
        </div>
      </header>

      {/* Contenedor principal:
        flex flex-col: Apila los elementos de arriba hacia abajo.
        gap-[70vh]: Crea un espacio vacío equivalente al 70% del alto de la pantalla de tu computadora entre cada tarjeta, obligando a que la siguiente tarjeta espere escondida abajo hasta que hagas scroll.
      */}
      <section className="mx-auto flex max-w-4xl flex-col gap-[70vh] px-6 py-12">
        {/* ========================================================
            TARJETA 1: BAGHEERA (Fondo Crema)
            ======================================================== */}
        {/* sticky top-24: Se detiene a 96px del límite superior.
            z-10: Capa base.
            min-h-[75vh]: Ocupa al menos el 75% del alto de la pantalla para verse como un póster completo en tu monitor. */}
        <div
          id="bagheera"
          className="sticky top-24 z-10 flex min-h-[75vh] flex-col justify-between overflow-hidden rounded-3xl border border-bagtaur-sand/60 bg-bagtaur-cream p-8 shadow-lg sm:p-12"
        >
          <div className="flex flex-col items-center text-center">
            <Image
              src="/bagtaur-headerr.png"
              alt="Logo Bagtaur"
              width={300}
              height={100}
              className="h-12 w-auto object-contain sm:h-16"
              priority
            />
            <h3 className="mt-6 font-comfortaa text-2xl font-bold text-bagtaur-peach sm:text-4xl">
              ¿Qué es Bagtaur?
            </h3>
            <p className="mt-2 font-varela text-sm text-bagtaur-dark/80 sm:text-base">
              Nace de la unión de tres nombres muy especiales para nosotros...
            </p>
          </div>

          <div className="relative mt-8 flex flex-col items-center justify-between sm:flex-row">
            <span className="hidden text-3xl text-bagtaur-sand select-none sm:block">🦴</span>
            <div className="z-10 h-auto w-64 sm:w-80">
              <Image
                src="/bagheerafoto.png"
                alt="Bagheera - Boxer de Bagtaur"
                width={400}
                height={300}
                className="h-auto w-full object-contain drop-shadow-md"
                priority
              />
            </div>
            <p className="mt-4 font-comfortaa text-xl font-bold text-bagtaur-green sm:mt-0 sm:text-2xl">
              ¡Hola soy Bagheera!
            </p>
          </div>
        </div>

        {/* ========================================================
            TARJETA 2: TADEO (Fondo Verde)
            ======================================================== */}
        {/* sticky top-28: Frena ligeramente más abajo que Bagheera (112px).
            z-20: Un nivel por encima de Bagheera para taparla al subir. */}
        <div
          id="tadeo"
          className="sticky top-28 z-20 flex min-h-[75vh] flex-col justify-between overflow-hidden rounded-3xl border border-bagtaur-dark/10 bg-bagtaur-green p-8 text-white shadow-xl sm:p-12"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-varela text-lg leading-relaxed sm:text-2xl">
              Tenemos el propósito de darle a tus peluditos el trato, dedicación y cariño que se merecen
            </p>
          </div>

          <div className="relative mt-8 flex flex-col items-center justify-around sm:flex-row">
            <p className="z-10 mb-6 font-comfortaa text-2xl font-bold text-bagtaur-cream sm:mb-0 sm:text-4xl">
              Yo Tadeo
            </p>
            <div className="z-10 h-auto w-64 sm:w-80">
              <Image
                src="/tadeofoto.png"
                alt="Tadeo de Bagtaur"
                width={400}
                height={300}
                className="h-auto w-full object-contain drop-shadow-lg"
              />
            </div>
            <span className="absolute bottom-10 right-10 hidden text-4xl select-none opacity-30 sm:block">🐾</span>
          </div>
        </div>

        {/* ========================================================
            TARJETA 3: AURELIO (Fondo Durazno)
            ======================================================== */}
        {/* sticky top-32: Frena aún más abajo (128px) formando un tercer escalón visual.
            z-30: La capa más alta de todas, se montará sobre Tadeo y Bagheera. */}
        <div
          id="aurelio"
          className="sticky top-32 z-30 flex min-h-[75vh] flex-col justify-between overflow-hidden rounded-3xl border border-white/50 bg-bagtaur-peach p-8 shadow-2xl sm:p-12"
        >
          <div className="relative mt-4 flex flex-col-reverse items-center justify-center gap-8 sm:flex-row">
            <div className="z-10 h-auto w-64 sm:w-80">
              <Image
                src="/aureliofoto.png"
                alt="Aurelio de Bagtaur"
                width={400}
                height={300}
                className="h-auto w-full object-contain drop-shadow-md"
              />
            </div>
            <p className="text-center font-comfortaa text-2xl font-bold text-white drop-shadow-sm sm:text-right sm:text-4xl">
              y mi nombre <br /> es Aurelio
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center rounded-2xl border border-white bg-white/60 p-6 text-center backdrop-blur-sm sm:p-8">
            <p className="mb-4 font-varela text-xs uppercase tracking-widest text-bagtaur-dark/70 sm:text-sm">
              SPA CANINO • PASEOS PERSONALIZADOS • SERVICIO A DOMICILIO
            </p>
            <p className="max-w-xl font-varela text-lg leading-relaxed text-bagtaur-dark sm:text-xl">
              Nos encargamos de brindar servicios basados en la responsabilidad y respeto hacia los animales, ofreciéndote tranquilidad.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}