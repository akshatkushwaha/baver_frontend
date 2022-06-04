function TopHorecaCard(porps) {
  return (
    <>
      <a href="/">
        <div className="relative bg-fixed w-96 m-6 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src="https://raw.githubusercontent.com/akshatkushwaha/baver_frontend/master/src/assets/img/horeca2.jpg"
            alt=""
          />
          <div className="flex flex-col justify-end p-6 ">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl text-gray-800 font-bold">Horeca Name</h1>
              <p className="text-xl text-gray-600 py-2">Detailed Location</p>
            </div>
            <div className="flex justify-between items-center mx-4">
              <div className="flex flex-col items-start text-base text-gray-500">
                <h1 className="py-1 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="pl-2">City</span>
                </h1>
                <h1 className="py-1 flex">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                  <span className="pl-2">Category</span>
                </h1>
              </div>
              <div className="flex flex-col items-end text-base">
                <h1 className="py-1 text-gray-400 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="pl-2">+91-0123456789</span>
                </h1>
                <h1 className="py-1 text-green-600 text-lg">Open</h1>
              </div>
            </div>
          </div>
          <div className="absolute top-0 bg-white rounded-r-full rounded-l-full h-14 w-32 m-4 flex items-center justify-center border-8">
            <span className="text-lg text-gray-700">$20 - $60</span>
          </div>
          <div className="absolute top-48 bg-orange-400 rounded-lg m-4 py-1 px-3 flex items-center justify-center ">
            <span className="text-base text-white">4.2</span>
          </div>
          <div className="absolute top-52 right-6 flex">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>
        </div>
      </a>
    </>
  );
}

export default TopHorecaCard;
