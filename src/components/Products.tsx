import { useState } from 'react';
import product from '../assets/product.png';
import { Detail } from './Detail';

export function Products() {
  const [showProducts, setShowProducts] = useState(true);
  const [showedProduct, setShowedProduct] = useState('');

  const toggleShowProducts = () => {
    setShowProducts(!showProducts);
  };

  const handleServicesClick = () => {
    setShowProducts(false);
  };

  const handleProductsClick = () => {
    setShowProducts(true);
  };

  const showHomeProduct = () => {
    setShowedProduct('home');
  };

  const showBusinessProduct = () => {
    setShowedProduct('business');
  };

  return (
    <>
      <section
        id="pricing"
        className="text-zinc-400 bg-zinc-900 body-font overflow-hidden"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Precios
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Todos nuestros precios están sujetos a negociación.
            </p>
            <div className="flex mx-auto border-2 border-teal-500 rounded overflow-hidden mt-6">
              <button
                onClick={handleProductsClick}
                className={`py-1 px-4 text-white focus:outline-none ${
                  showProducts
                    ? 'bg-teal-500 text-white'
                    : 'bg-zinc-900 text-zinc-300 hover:text-teal-500'
                }`}
              >
                Productos
              </button>
              <button
                onClick={handleServicesClick}
                className={`py-1 px-4 text-white focus:outline-none ${
                  !showProducts
                    ? 'bg-teal-500 text-white'
                    : 'bg-zinc-900 text-zinc-300 hover:text-teal-500'
                }`}
              >
                Servicios
              </button>
            </div>
          </div>
          {showProducts && (
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-teal-500 flex flex-col relative overflow-hidden">
                  <span className="bg-teal-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                  <h2 className="text-sm tracking-widest text-zinc-400 title-font mb-1 font-medium">
                    HOGAR
                  </h2>
                  <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-zinc-800">
                    <span>$225</span>
                  </h1>
                  <p className="flex items-center text-zinc-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    1TB de Almacenamiento
                  </p>
                  <p className="flex items-center text-zinc-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Montaje Gratis
                  </p>
                  <p className="flex items-center text-zinc-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Gestor de Archivos
                  </p>
                  {/* <p className="flex items-center text-zinc-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Bloqueador de Anuncios
            </p>
            <p className="flex items-center text-zinc-400 mb-6">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Red Privada Virtual
            </p> */}
                  <a
                    href="#detail"
                    onClick={showHomeProduct}
                    className="flex items-center mt-auto text-white bg-teal-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-teal-600 rounded"
                  >
                    Ver más
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  {/* <p className="text-xs text-zinc-400 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p> */}
                </div>
              </div>
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-zinc-700 flex flex-col relative overflow-hidden">
                  <h2 className="text-sm tracking-widest text-zinc-400 title-font mb-1 font-medium">
                    EMPRESARIAL
                  </h2>
                  <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-zinc-800">
                    <span>$400</span>
                    {/* <span className="text-lg ml-1 font-normal text-zinc-400">
                /mo
              </span> */}
                  </h1>
                  <p className="flex items-center text-zinc-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    + 1TB de Almacenamiento
                  </p>
                  <p className="flex items-center text-zinc-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Montaje Gratis
                  </p>
                  <p className="flex items-center text-zinc-400 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Gestor de Archivos
                  </p>
                  {/* <p className="flex items-center text-zinc-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Gestor Usuarios
            </p>
            <p className="flex items-center text-zinc-400 mb-6">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Mixtape chillwave tumeric
            </p> */}
                  <a
                    href="#detail"
                    onClick={showBusinessProduct}
                    className="flex items-center mt-auto text-white bg-zinc-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-zinc-700 rounded"
                  >
                    Ver más
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  {/* <p className="text-xs text-zinc-400 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p> */}
                </div>
              </div>
            </div>
          )}
          {!showProducts && (
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-zinc-700 flex flex-col relative overflow-hidden">
                  <h2 className="text-sm tracking-widest text-zinc-400 title-font mb-1 font-medium">
                    MANTENIMIENTO
                  </h2>
                  <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-zinc-800">
                    <span>$20</span>
                    {/* <span className="text-lg ml-1 font-normal text-zinc-400">
                /mo
              </span> */}
                  </h1>
                  <p className="flex items-center text-zinc-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Restauración del dispositivo
                  </p>
                  <p className="flex items-center text-zinc-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Prevención y Reactivación
                  </p>
                  <p className="flex items-center text-zinc-400 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Mantenimiento General
                  </p>
                  {/* <p className="flex items-center text-zinc-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Gestor Usuarios
            </p>
            <p className="flex items-center text-zinc-400 mb-6">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-zinc-800 text-zinc-500 rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Mixtape chillwave tumeric
            </p> */}
                  <a
                    href="#detail"
                    className="flex items-center mt-auto text-white bg-zinc-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-zinc-700 rounded"
                  >
                    Ver más
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  {/* <p className="text-xs text-zinc-400 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {showedProduct === 'home' ? (
        <Detail
          edition="hogar"
          title="Cloudty Edición Hogar"
          description="Nube privada de Cloudty enfocada a personas que desean tener los archivos e información de los dispositivos de su hogar en un solo lugar, accesible desde cualquier lugar del mundo."
          image={product}
          included={{
            Almacenamiento: '1 TB',
          }}
          price="$225.00"
          setShowedProduct={setShowedProduct}
        />
      ) : showedProduct === 'business' ? (
        <Detail
          edition="empresarial"
          title="Cloudty Edición Empresarial"
          description="Nube privada de Cloudty enfocada a empresas pequeñas y medianas que desean tener los archivos e información de los dispositivos de su hogar en un solo lugar, accesible desde cualquier lugar del mundo."
          image={product}
          included={{
            Almacenamiento: '1 TB',
          }}
          price="$400.00"
          setShowedProduct={setShowedProduct}
        />
      ) : null}
    </>
  );
}
