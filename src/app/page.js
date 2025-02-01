"use client";
import anim from "../../public/Anim/backAnim.json";
import Lottie from "lottie-react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Notification from "./components/widgets/Notification";

export default function Home() {
  const [OpenNotification, setNotification] = useState({
    Open: false,
    Message: "",
    Derecha: false,
  });
  const copyToClipboard = async (text) => {
    try {
      setNotification({
        ...OpenNotification,
        Open: true,
        Message: "Código copiado",
      });
      await navigator.clipboard.writeText(text);
    } catch (err) {
      setNotification({
        ...OpenNotification,
        Open: true,
        Message: "Error al copiar",
      });
    }
  };
  const items = [
    {
      Title: "globals.css",
      Content: `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #fefbff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #fefbff;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}`,
    },
    {
      Title: "tailwind.config.mjs",
      Content: `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
`,
    },
  ];
  return (
    <>
      <Notification
        mensaje={OpenNotification.Message}
        abrir={OpenNotification.Open}
        cerrar={() => setNotification({ ...OpenNotification, Open: false })}
      />
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
            <a
              className=" p-4 rounded-3xl bg-blue-950 text-xl text-white "
              href="#configuracion"
            >
              Configuración
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
      {/* Configuracion */}
      <div id="configuracion">
        <div className="ml-4 p-2 gap-2 text-2xl font-bold">Configuracion</div>
        <p className="ml-4 p-2">Para alternar entre los temas dark y light:</p>
        <div className="p-4 bg-blue-100/80 mx-10 rounded-2xl dark:bg-black/20 flex flex-col">
          {items.map(({ Title, Content }, index) => {
            return (
              <div key={index} className="gap-2">
                <div className="flex  bg-white w-max  rounded-2xl p-2 mb-2 dark:bg-slate-950">
                  <h1 className="font-semibold mt-2"> {Title}</h1>
                  <button
                    className="p-2 bg-blue-50 rounded-full ml-2 mb-1 dark:bg-slate-700"
                    onClick={() => copyToClipboard(Content)}
                  >
                    <ClipboardIcon className="h-7 w-7 text-black hover:text-slate-500 dark:text-white" />
                  </button>
                </div>
                <textarea
                  className="h-96 w-full bg-slate-50 dark:bg-white/[.06] rounded-2xl p-4"
                  disabled
                  rows={4}
                  value={Content}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
