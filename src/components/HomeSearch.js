import { useState } from "react";

function Search(props) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [categories, setCategories] = useState("");

  function Search({ keyword, location, categories }) {
    console.log({ keyword, location, categories });
  }

  return (
    <>
      <section className="md:absolute mt-4 w-11/12 md:w-fit bottom-10 bg-white rounded-xl m-auto flex flex-wrap justify-center items-center">
        <div className="max-w-full md:max-w-8xl rounded-lg flex flex-wrap items-center overflow-hidden">
          <input
            className="p-2 rounded-lg md:rounded-none border-gray-400 md:border-y-0 md:border-x w-full md:w-1/3 h-16"
            type="text"
            placeholder="Keywords"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          ></input>
          <select
            className="p-2 rounded-lg md:rounded-none border-gray-400 md:border-y-0 md:border-x w-full md:w-1/3 h-16 text-gray-500"
            name="Categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          >
            <option hidden>Categories</option>
            <option value="Hotel">Hotel</option>
            <option value={"Food & Restorants"}>Food & Restorants</option>
            <option value="Travel & Tours">Travel & Tours</option>
            <option value="LifeStyle">LifeStyle</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <input
            className="p-2 rounded-lg md:rounded-none border-gray-400 md:border-y-0 md:border-x w-full md:w-1/3 h-16"
            type="text"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </div>
        <button
          type="button"
          className="bg-orange-400 p-2  hover:bg-orange-500 w-full md:w-32 h-16 text-white font-sans font-bold flex items-center rounded-lg md:rounded-r-lg"
          onClick={() => Search({ keyword, location, categories })}
        >
          <span className="mx-2">Search</span>
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
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </section>
    </>
  );
}

export default Search;
