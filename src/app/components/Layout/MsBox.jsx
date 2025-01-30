"use client";
export default function MsBox({ Mensaje, Titulo, cerrar }) {
  const handleCloseOutside = (e) => {
    // Cuando se hace clic fuera del modal
    cerrar();
  };

  const handleInsideClick = (e) => {
    // Evita que el clic dentro del modal cierre el modal
    e.stopPropagation();
  };
  return (
    <div
      onClick={handleCloseOutside} // Cierra el modal si haces clic fuera de él
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 "
    >
      <div className="w-[55vh] " onClick={handleInsideClick}>
        <div className="bg-white dark:bg-gray-950 p-3  rounded-3xl animate-fade-in">
          <div className=" h-full w-full flex flex-col p-4">
            <h1 className=" flex-1 text-3xl font-semibold text-blue-800 dark:text-white">
              {Titulo}
            </h1>

            <p className="mt-4 mb-4">{Mensaje}</p>
            <button
              className="p-3 bg-blue-600 rounded-3xl font-semibold text-white self-end"
              onClick={cerrar}
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
