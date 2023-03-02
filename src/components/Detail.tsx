type Props = {
  edition: string;
  title: string;
  description: string;
  image: string;
  included: { [key: string]: string };
  price: string;
  setShowedProduct: React.Dispatch<React.SetStateAction<string>>;
};

export function Detail(props: Props) {
  const {
    edition,
    title,
    description,
    image,
    included,
    price,
    setShowedProduct,
  } = props;

  const closeDetail = () => {
    setShowedProduct('');
  };

  return (
    <section
      className="text-zinc-400 bg-zinc-900 body-font overflow-hidden"
      id="detail"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-zinc-500 tracking-widest">
              {edition.toUpperCase()}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-3">
              {title}
            </h1>
            <p className="leading-relaxed mb-4">{description}</p>
            {Object.keys(included).map((key, index) => {
              return index !== Object.keys(included).length - 1 ? (
                <div className="flex border-t border-zinc-800 py-2">
                  <span className="text-zinc-500">{key}</span>
                  <span className="ml-auto text-white">{included[key]}</span>
                </div>
              ) : (
                <div className="flex border-t border-b mb-6 border-zinc-800 py-2">
                  <span className="text-zinc-500">{key}</span>
                  <span className="ml-auto text-white">{included[key]}</span>
                </div>
              );
            })}
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">
                {price}
              </span>
              <button
                onClick={closeDetail}
                className="flex ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded"
              >
                Ver menos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
