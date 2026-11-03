export default function Laboratorio() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
        <header className="flex flex-row justify-between items-center h-16 bg-gray-800 text-white px-4 rounded-2xl mb-8">
            <div className="flex font-sans text-lg">
                Como están?
            </div>

            <button className="bg-gray-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                botón
            </button>
        </header>
      
        <h1 className="text-2xl font-bold text-slate-800 mt-8 mb-8">
        🧪 Área de Pruebas
        </h1>

        <div className="border-2 border-red-600 bg-white p-4 rounded-xl flex flex-col sm:flex-row mb-8 gap-8">
            <div className="bg-gray-600 h-48 w-full sm:w-1/2 rounded-xl"></div>
            <div className="w-full sm:w-1/2 flex flex-col justify-center items-center">foto polla</div>
        </div>

        {/* Aquí adentro puedes empezar a crear tus <div> para practicar la Fórmula de las 3 capas */}
        <div className="border-2 border-red-800 bg-white p-4 rounded-xl flex flex-col sm:flex-row justify-between mb-8 gap-8">
             <p className="text-slate-600">Mi primera caja de prueba</p>
             <p className="text-black">Este es otro parrafo de prueba</p>
        </div>

        <div className="border-2 border-red-800 bg-white p-6 mt-12 w-full max-w-lg mx-auto rounded-xl"> 
            <h2 className="text-xl font-bold text-center text-slate-800">
                Probar los limites
            </h2>
            <p className="text-slate-600 mt-2 text-center">
                Estira la pantalla. Esta caja dejará de crecer cuando alcance el tamaño "sm" y se mantendrá centrada.
            </p>
        </div>

        <div className="relative w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mx-auto mt-12 shadow-sm">
            <span className="text-gray-500 font-bold">Foto</span>

            <div className="absolute bottom-17 -right-1 w-6 h-6 bg-green-800 rounded-full border-4 border-white"></div>
        </div>

    </main>
  );
}