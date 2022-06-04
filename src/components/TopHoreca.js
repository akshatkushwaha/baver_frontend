import TopHorecaCard from "./TopHorecaCard";

function TopHoreca(propa) {
  var scrollPosition = 0;
  return (
    <>
      <section className="py-8 px-2 flex flex-col justify-center items-center">
        <div className="container relative text-center py-4 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold">
            Top <span className="text-orange-400">Horeca</span>
          </h1>
          <p className="text-lg font-sans py-2">
            At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui
            Blanditiis.
          </p>
          <button
            className="absolute top-1/2 left-20 hidden md:flex"
            onClick={() => {
              document.getElementById("horecascrollview").scrollTo({
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
          <div className="flex justify-center text-center">
            <div
              id="horecascrollview"
              className="flex overflow-x-scroll pb-10 hide-scroll-bar w-3/4 self-center"
            >
              <div className="flex flex-nowrap lg:ml-20 md:ml-10 ml-5 ">
                <TopHorecaCard />
                <TopHorecaCard />
                <TopHorecaCard />
                <TopHorecaCard />
              </div>
            </div>
          </div>
          <button
            className="absolute top-1/2 right-20 hidden md:flex"
            onClick={() => {
              document.getElementById("horecascrollview").scrollTo({
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

export default TopHoreca;
