export default function Laboratorio() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
        <header className="flex flex-row justify-between items-center h-16 bg-gray-800 text-white px-4 rounded-2xl mb-8">
            <div className="flex font-sans text-lg">
                Como están?
            </div>

            <button className="bg-gray-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                María está a 4 km de distancia
            </button>
        </header>
      
        <h1 className="text-2xl font-bold text-slate-800 mt-8 mb-8">
        🧪 Área de Pruebas
        </h1>

        <div className="border-2 border-red-600 bg-white p-4 rounded-xl flex flex-col sm:flex-row mb-8 gap-6">

        </div>

        {/* Aquí adentro puedes empezar a crear tus <div> para practicar la Fórmula de las 3 capas */}
        <div className="border-2 border-red-800 bg-white p-4 rounded-xl">
             <p className="text-slate-600">Mi primera caja de prueba</p>
        </div>

    </main>
  );
}