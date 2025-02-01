"use client";

import { useState } from "react";
import Logins from "../../data/Logins";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import Notification from "../../components/widgets/Notification";

export default function Login() {
  const [OpenNotification, setNotification] = useState({
    Open: false,
    Message: "",
  });

  //funcion para copiar al portapeles
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
  return (
    <>
      <Notification
        mensaje={OpenNotification.Message}
        abrir={OpenNotification.Open}
        cerrar={() => setNotification({ ...OpenNotification, Open: false })}
      />

      {/* CONTENIDO DE LAS PAGUINAS  */}
      <div className="flex flex-row p-4 gap-2">
        <div className="bg-slate-100 dark:bg-black/40  w-full rounded-2xl p-10 items-center justify-center content-center">
          <h1 className="text-8xl font-semibold p-2">Login</h1>
          <p className="text-xl p-2">
            En esta sección puedes encontrar varios formularios de login.
          </p>
        </div>
      </div>
      <div>
        {Logins &&
          Logins.length != 0 &&
          Logins.map(({ id, items, titleComponent, example }, index) => {
            return (
              <div key={id}>
                <div className="ml-4 p-2 gap-2 text-2xl font-bold">
                  {titleComponent}
                </div>
                <div className="p-4 bg-blue-100/80 mx-10 rounded-2xl dark:bg-black/20 flex flex-col">
                  <div className="mb-3 text-center h-full w-full bg-slate-50 dark:bg-white/[.06] rounded-2xl p-4">
                    {example}
                  </div>
                  {items.map(({ n, Title, Content }, index) => {
                    return (
                      <div key={n} className="gap-2">
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
            );
          })}
      </div>
    </>
  );
}
