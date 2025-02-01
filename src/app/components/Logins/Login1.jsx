"use client";
import { useState } from "react";
import anim from "../../../../public/Anim/Animation_Home.json";
import Lottie from "lottie-react";

export default function Login1() {
  const InputClass =
    "dark:bg-transparent hover:border-blue-600 p-2 w-full border-[2px] rounded-lg  border-gray-400 bg-white dark:bg-gray-800 focus:outline-none ";
  const aClass = "hover:bg-slate-200 p-3 rounded-lg dark:hover:bg-[#111213]";
  const [Login, SetLogin] = useState({
    usuario: "",
    password: "",
  });
  //variable para mostrar el loader cuando carga una peticion
  const HandleChange = (e) => {
    SetLogin({ ...Login, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className=" rounded-3xl p-4 
        bg-white dark:bg-black flex flex-col md:flex-row w-full md:w-[160vh]"
      >
        <div className=" content-center flex-1">
          <Lottie animationData={anim} className="h-[40vh] mx-auto" />
        </div>

        <div className="w-96">
          <form
            onSubmit={(e) => e.preventDefault()}
            className=" p-10 z-10 text-slate-700 dark:text-slate-50 gap-6 flex flex-col text-left "
          >
            <h2 className="text-4xl text-slate-800 font-semibold dark:text-white text-center">
              Iniciar sesión
            </h2>

            <div className="w-full gap-2  flex flex-col">
              <p>Usuario</p>
              <input
                placeholder="ejemplo: user1"
                className={`${InputClass} `}
                name="usuario"
                onChange={HandleChange}
                required
              />
              <p>Contraseña</p>
              <input
                placeholder="****"
                className={`${InputClass}`}
                name="password"
                onChange={HandleChange}
                required
                type="password"
              />
            </div>
            <button
              className="bg-blue-700 hover:bg-blue-900 font-semibold text-lg w-28 p-2 text-white rounded-3xl self-end"
              type="submit"
            >
              Aceptar
            </button>
          </form>
        </div>
      </div>
      {/* FOOTER DEL CUADRO DE INICIO DE SESION  */}
      <div className="flex flex-row text-slate-800 text-sm dark:text-white w-full">
        <div className="text-left flex-1 p-3">
          <a href="#" className={`${aClass}`}>
            Hospital Munoz
          </a>
        </div>
        <div className="flex-row flex mr-3">
          <a href="#" className={`${aClass}`}>
            Extintor
          </a>
          <a href="#" className={`${aClass}`}>
            Licencia
          </a>
          <a href="#" className={`${aClass}`}>
            Acerca de
          </a>
        </div>
      </div>
    </div>
  );
}
