function Search(props) {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="max-w-6xl p-4 rounded-lg flex items-center">
          <input type="text" className="mx-2 p-2 rounded-lg h-16"></input>
          <input type="text" className="mx-2 p-2 rounded-lg h-16"></input>
          <input type="text" className="mx-2 p-2 rounded-lg h-16"></input>
          <button
            type="button"
            className="bg-orange-400 mx-2 p-2 rounded-lg hover:bg-orange-500 h-16 text-white font-sans font-bold flex items-center"
          >
            <span className="mx-2">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}

export default Search;
