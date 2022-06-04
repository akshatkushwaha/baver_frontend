const mostPopularDeals = [
  {
    category: "Food & Restaurants",
  },
  {
    category: "Hotels",
  },
  {
    category: "Travel & Tours",
  },
  {
    category: "Lifestyle",
  },
  {
    category: "Entertainment",
  },
];

function MostPopulerDeals(props) {
  var scrollPosition = 0;
  return (
    <>
      <section className="py-8 px-2 flex flex-col justify-center items-center">
        <div className="container relative text-center py-4 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold">
            Most Populer <span className="text-orange-400">Deals</span>
          </h1>
          <p className="text-lg font-sans py-2">
            At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui
            Blanditiis.
          </p>
          <button
            className="absolute top-1/2 left-40 hidden md:flex"
            onClick={() => {
              document.getElementById("scrollview").scrollTo({
                top: 0,
                left: (scrollPosition = Math.max((scrollPosition -= 500), 0)),
                behavior: "smooth",
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 8 8 12 12 16" />
              <line x1="16" y1="12" x2="8" y2="12" />
            </svg>
          </button>
          <div
            id="scrollview"
            className="flex overflow-x-scroll pb-10 hide-scroll-bar w-3/4 self-center"
          >
            <div className="flex flex-nowrap lg:ml-20 md:ml-10 ml-5 ">
              {mostPopularDeals.map((deal, index) => (
                <a key={index} href={`/${deal.category}`}>
                  <div className="inline-block px-3">
                    <div className="w-96 max-w-base overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                      <img
                        src="https://raw.githubusercontent.com/akshatkushwaha/baver_frontend/master/src/assets/img/food1.jpg"
                        className="border-2"
                      />
                      <div className="px-4 pb-4">
                        <h2 className="text-xl font-bold text-cyan-800 p-4">
                          {deal.category}
                        </h2>
                        <button className="rounded-r-full rounded-l-full border-2 py-2 px-4 hover:bg-orange-400">
                          Browse
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 right-40 hidden md:flex"
            onClick={() => {
              document.getElementById("scrollview").scrollTo({
                top: 0,
                left: (scrollPosition = Math.min(
                  (scrollPosition += 500),
                  1000
                )),
                behavior: "smooth",
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 16 16 12 12 8" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}

export default MostPopulerDeals;
