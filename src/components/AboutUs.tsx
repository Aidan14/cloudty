export function AboutUs() {
  return (
    <section id="about" className="text-zinc-400 body-font bg-zinc-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          {/* <h2 className="text-xs text-teal-400 tracking-widest font-medium title-font mb-1">
            CLOUDTY
          </h2> */}
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Sobre Nosotros
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Somos un grupo de programadores que con nuestra nube privada
            buscamos solventar los problemas cómunes de los servicios de
            almacenamiento en la nube.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-zinc-800">
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
              Misión
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Proporcionar productos de alta calidad y servicios excepcionales
              para satisfacer las necesidades de nuestros clientes ofreciendo
              alternativas a los servicios de almacenamiento convencionales.
            </p>
            {/* <a className="text-teal-400 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-zinc-800">
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
              Visión
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Darle el control a los usuarios sobre sus datos y archivos, para
              que en un futuro hayan cada vez más hogares y empresas que
              utilicen nuestros servicios.
            </p>
            {/* <a className="text-teal-400 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-zinc-800">
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
              Valores
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Atención a los detalles, responsabilidad, innovación, confianza,
              servicio al cliente y alta calidad son algunos de los valores que
              más nos representan.
            </p>
            {/* <a className="text-teal-400 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
          <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-zinc-800">
            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
              Objetivos
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Garantizar la innovación y el desarrollo de nuevas funcionalidades
              para el producto, la ampliación de la red de distribución y la
              creación de alianzas estratégicas con otros actores del mercado
              tecnológico.
            </p>
            {/* <a className="text-teal-400 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
        {/* <button className="flex mx-auto mt-16 text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">
          Button
        </button> */}
      </div>
    </section>
  );
}
