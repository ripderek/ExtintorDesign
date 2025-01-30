"use client";
import { XCircleIcon } from "@heroicons/react/24/outline";
export default function Notification({ mensaje, abrir, cerrar }) {
  return (
    <div
      className={`flex fixed top-5 left-1/2 z-40 w-auto h-auto p-5 rounded-2xl shadow-xl bg-slate-50 dark:bg-slate-900 dark:shadow-slate-600 dark:shadow-lg
    transition-transform duration-500 ease-in-out transform ${
      abrir
        ? "-translate-x-1/2 translate-y-0 opacity-100"
        : "-translate-x-1/2 translate-y-10 opacity-0 pointer-events-none"
    }`}
    >
      <span>{mensaje}</span>
      <button onClick={cerrar}>
        <XCircleIcon className="ml-3 h-5 w-5 text-black hover:text-slate-500 dark:text-white" />
      </button>
    </div>
  );
}
