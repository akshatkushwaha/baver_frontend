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
  return (
    <>
      <section className="py-8 px-2 flex flex-col justify-center items-center">
        <div className="container text-center py-4 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold">
            Most Populer <span className="text-orange-400">Deals</span>
          </h1>
          <p className="text-lg font-sans py-2">
            At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui
            Blanditiis.
          </p>
          <div class="flex overflow-x-scroll pb-10 hide-scroll-bar w-3/4 self-center">
            <div class="flex flex-nowrap lg:ml-20 md:ml-10 ml-5 ">
              {mostPopularDeals.map((deal, index) => (
                <a key={index} href={`/${deal.category}`}>
                  <div className="inline-block px-3">
                    <div className="w-96 max-w-base overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out ">
                      <img
                        src="https://raw.githubusercontent.com/akshatkushwaha/baver_frontend/master/src/assets/img/c1.jpg"
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
        </div>
      </section>
    </>
  );
}

export default MostPopulerDeals;
