import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear(); // Obtener el año actual
  const aClassnme =
    "font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-black dark:text-white";
  return (
    <footer className="w-full p-8 mt-8  bg-transparent border-t-2 border-blue-200 dark:border-slate-300  text-black dark:text-white">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <div className="relative w-[180px] h-[38px]">
          <Image
            src="/Extintor_logo.png"
            alt="Light Mode Logo"
            width={180}
            height={38}
            className="dark:hidden"
            priority
          />
          <Image
            src="/Extintor_logo7.png"
            alt="Dark Mode Logo"
            width={180}
            height={38}
            className="hidden dark:block absolute top-0 left-0"
            priority
          />
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a href="https://github.com/ripderek" className={`${aClassnme}`}>
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rderk_/"
              className={`${aClassnme}`}
            >
              Instagram
            </a>
          </li>

          <li>
            <a
              as="a"
              href="https://www.youtube.com/@rderk"
              className={`${aClassnme}`}
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <p className="text-center font-normal text-black dark:text-white">
        Creado por Raúl Steven Coello Castillo &copy; {currentYear} Extintor
        Team
      </p>
    </footer>
  );
}
