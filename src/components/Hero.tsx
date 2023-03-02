import product from '../assets/product.png';

export function Hero() {
  return (
    <section className="text-zinc-400 bg-zinc-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Tu información
            <br className="hidden lg:inline-block" /> a tu disposición
          </h1>
          <p className="mb-8 leading-relaxed">
            Maneja toda tu información y archivos de manera privada en un mismo
            lugar con Cloudty. Una alternativa local y segura a los servicios de
            almacenamiento en la nube en la que tu tienes el control.
          </p>
          <div className="flex justify-center">
            <a
              href="#pricing"
              className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg"
            >
              Ver más
            </a>
            {/* <button className="ml-4 inline-flex text-zinc-400 bg-zinc-800 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-700 hover:text-white rounded text-lg">
              Button
            </button> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={product}
          />
        </div>
      </div>
    </section>
  );
}
