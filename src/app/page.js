"use client";
import anim from "../../public/Anim/backAnim.json";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-row p-4 gap-2">
        <div className="bg-slate-100 dark:bg-black/40  w-full rounded-2xl p-10 items-center justify-center content-center">
          <h1 className="text-8xl font-semibold p-2">Extintor Design</h1>
          <p className="text-xl p-2">
            Esta es una web que recopila diferentes componentes que puedes
            utilizar en React con Tailwind css, totalmente gratis.
          </p>
          <div className="mt-6 gap-2 flex">
            <a
              className=" p-4 rounded-3xl bg-blue-900 text-xl text-white "
              href="#empezar"
            >
              Requisitos
            </a>
          </div>
        </div>
        <div className="w-[100vh] bg-blue-200 dark:bg-black/20   rounded-2xl p-4 overflow-hidden relative">
          <div className=" content-end self-end justify-end relative">
            <Lottie animationData={anim} className="w-full scale-150  " />
          </div>
        </div>
      </div>
      <div className="p-4 gap-2 text-xl">
        Los componentes fueron realizados en Nextjs y necesitas lo siguiente
        para utilizarlos en tus proyectos:
      </div>
      <div
        className="p-4 bg-blue-100/80 mx-10 rounded-2xl dark:bg-black/20"
        id="empezar"
      >
        <ul className="list-disc ml-5">
          <li className="font-semibold">
            <a
              href="https://tailwindcss.com/docs/installation/framework-guides/nextjs"
              className="hover:underline"
            >
              Tailwind css 3.4.1 {"  "}
            </a>
            <span className="font-light">
              (Puedes utilizar versiones anteriores pero algunos estilos
              prodrían no aplicarse)
            </span>
          </li>
          <li className="font-semibold">
            <a
              href="https://www.npmjs.com/package/lottie-react"
              className="hover:underline"
            >
              Lottie-react
              {"  "}
            </a>
            <span className="font-light">
              (Algunos componentes utilizan animaciones en tipo lottie.json)
            </span>
          </li>
          <li className="font-semibold">
            <a
              href="https://www.npmjs.com/package/heroicons"
              className="hover:underline"
            >
              Heroicons
              {"  "}
            </a>
            <span className="font-light">(Paquete de íconos)</span>
          </li>
        </ul>
      </div>
    </>
  );
}
