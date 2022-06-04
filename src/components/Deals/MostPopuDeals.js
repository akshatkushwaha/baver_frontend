import Card from "./Card";

const mostPopularDeals = [
  {
    category: "Food & Restaurants",
    image:
      "https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    category: "Hotels",
    image:
      "https://images.unsplash.com/photo-1624302286558-cd1867fb5b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvdGVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    category: "Travel & Tours",
    image:
      "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFzc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1558769132-92e717d613cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlmZXN0eWxlJTIwZmFzaGlvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    category: "Entertainment",
    image:
      "https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW50ZXJ0YWlubWVudHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
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
                <Card deal={deal} key={index} />
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
