import logo from '/logo-rounded.png';

export function Navbar() {
  return (
    <nav className="text-zinc-400 bg-zinc-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="cursor-pointer flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <div className="aspect-square h-5">
            <img src={logo} className="object-cover" alt="Cloudty logo" />
          </div>
          <span className="ml-3 text-xl  hover:text-teal-500">Cloudty</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white cursor-pointer">
            Sobre Nosotros
          </a>
          <a href="#team" className="mr-5 hover:text-white cursor-pointer">
            Nuestro Equipo
          </a>
          <a href="#pricing" className="mr-5 hover:text-white cursor-pointer">
            Precios
          </a>
          <a href="#contact" className="mr-5 hover:text-white cursor-pointer">
            Contáctanos
          </a>
          {/* <a className="mr-5 hover:text-white cursor-pointer">Fourth Link</a> */}
        </nav>
        {/* <button className="inline-flex items-center bg-zinc-800 border-0 py-1 px-3 focus:outline-none hover:bg-zinc-700 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </nav>
  );
}
