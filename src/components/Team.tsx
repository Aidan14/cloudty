import workerWomen from '../assets/worker-women.png';
import worker from '../assets/worker.png';

export function Team() {
  return (
    <section id="team" className="text-zinc-400 bg-zinc-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Nuestro Equipo
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Somos un grupo de estudiantes de programación que busca brindar una
            solución asequible y segura para el almacenamiento de tu
            información.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-zinc-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-zinc-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={worker}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Bryan Moreno
                </h2>
                <p className="text-zinc-600">CEO</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-zinc-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-zinc-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={worker}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">Jhon Yepe</h2>
                <p className="text-zinc-600">CTO</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-zinc-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-zinc-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={worker}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Aidan Pereyra
                </h2>
                <p className="text-zinc-600">COO</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-zinc-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-zinc-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={worker}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Lucas López
                </h2>
                <p className="text-zinc-600">CFO</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-zinc-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-zinc-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={workerWomen}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Alanna Segura
                </h2>
                <p className="text-zinc-600">Finanzas</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-zinc-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-zinc-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={worker}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Raymond Gómez
                </h2>
                <p className="text-zinc-600">CMO</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-zinc-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-zinc-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={worker}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Jean Peguero
                </h2>
                <p className="text-zinc-600">Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
