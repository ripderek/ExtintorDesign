"use client";
import routes_components from "../../routes/components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

import Link from "next/link";
export default function Navegacion() {
  const currentPath = usePathname(); // Obtiene la URL actual

  return (
    <aside className="w-auto bg-blue-100 h-full dark:bg-black/40 flex flex-col ">
      <div className=" p-2">
        <div className="p-2 flex flex-col text-center items-center mb-2">
          <button
            className={"rounded-2xl p-4  bg-blue-200 dark:bg-violet-900/30"}
          >
            <MagnifyingGlassIcon className="h-7 w-7 dark:hover:text-violet-300 dark:text-violet-500 text-blue-500 hover:text-white" />
          </button>
        </div>
        <Link href={"/"}>
          <button
            className={`  rounded-2xl p-2 hover:bg-blue-300 dark:hover:bg-slate-900 ${
              currentPath === "/"
                ? "bg-blue-200 dark:bg-slate-800"
                : "bg-transparent"
            }`}
          >
            {" "}
            <h1 className="font-bold   ">Inicio</h1>
          </button>
        </Link>
        <h1 className="p-2 font-bold">Componentes</h1>
        {routes_components.map(({ pages }, key) => (
          <ul key={key} className=" flex flex-col gap-2  ">
            {pages.map(({ name, path }) => (
              <li key={name} className="  ml-3">
                <Link href={path}>
                  <button
                    className={` rounded-2xl p-2 hover:bg-blue-300 dark:hover:bg-slate-900 ${
                      currentPath === path
                        ? "bg-blue-200 dark:bg-slate-800"
                        : "bg-transparent"
                    }`}
                  >
                    {" "}
                    <p className="font-medium capitalize text-sm ">{name}</p>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}
