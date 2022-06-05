import { useState } from "react";

function Address(props) {
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <section className="h-full flex flex-col justify-between">
      <div className="flex flex-wrap md:mx-3">
        <div className="w-full md:w-1/2 px-4 md:py-4 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="address-1"
          >
            Address line 1
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
            id="address-1"
            type="text"
            placeholder="Street, Area, Landmark"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-4 md:py-4 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="address-2"
          >
            Address line 2{" "}
            <span className="text-gray-400 text-xs">optional</span>
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
            id="address-2"
            type="text"
            placeholder="Landmark, Locality" //optional
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap md:mx-3">
        <div className="w-full md:w-1/4 px-4 md:py-4 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-zip-code"
          >
            Postal Code
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
            id="grid-zip-code"
            type="text"
            placeholder="452016"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/4 px-4 md:py-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            City
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
              id="grid-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option hidden>Choose...</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Indore">Indore</option>
            </select>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 py-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            State
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
              id="grid-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option hidden>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse flex-wrap mx-3">
        <div className="w-full md:w-1/2 flex flex-row-reverse md:p-4">
          <div className="w-1/2 md:w-1/4 flex md:justify-end p-2 md:p-4">
            <button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                props.getAddress({ address, address2, pinCode, city, state });
              }}
            >
              Submit
            </button>
          </div>
          <div className="w-1/2 md:w-1/4 flex md:justify-end p-2 md:p-4">
            <button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                props.prevStep();
              }}
            >
              Prev
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2 md:p-4 mb-6 md:mb-0">
          <button
            className="w-full md:w-1/4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default Address;
