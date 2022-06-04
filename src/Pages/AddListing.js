import Footer from "../components/Footer";
import { useState } from "react";

function AddListing(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [file, setFile] = useState("");

  async function postListing() {
    console.log({
      name,
      category,
      phone,
      address,
      address2,
      pinCode,
      city,
      state,
      file,
    });
  }

  return (
    <>
      <div className="bg-gray-200 p-2 md:p-10">
        <div className="container mx-auto px-4 text-center py-16">
          <h1 className="text-5xl">Add Listing</h1>
          <p className="text-xl">
            <a
              href="/"
              className="underline text-orange-400 hover:text-orange-500"
            >
              Home
            </a>
            {" > "}
            add Listing
          </p>
        </div>
        <section className="container max-w-screen-xl mx-auto p-4 md:px-14 bg-white rounded-lg">
          <form>
            <div className="flex flex-wrap mx-3">
              <div className="w-full md:w-1/2 md:p-4 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 md:p-4 mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option hidden>Choose...</option>
                    <option value="Hotel">Hotel</option>
                    <option value={"Food & Restorants"}>
                      Food & Restorants
                    </option>
                    <option value="Travel & Tours">Travel & Tours</option>
                    <option value="LifeStyle">LifeStyle</option>
                    <option value="Entertainment">Entertainment</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mx-3">
              <div className="w-full md:w-1/2 md:p-4 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* image input */}
              <div className="w-full md:w-1/2 md:p-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                  id="image"
                  type="file"
                  placeholder="Image"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => {
                    if (e.target.files[0].size > 5000000) {
                      alert("Image size should be less than 5MB");
                      document.getElementById("image").value = "";
                      return;
                    }
                    setFile(e.target.files[0]);
                  }}
                />
              </div>
            </div>
            <div className="relative flex flex-col flex-wrap my-7 mx-3 md:mx-7 py-6 border-2 rounded-lg">
              <label className="absolute -top-3 bg-white px-2 ml-10 block uppercase tracking-wide text-gray-700 text-base font-bold">
                Address
              </label>
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
            </div>
            <div className="flex flex-wrap mx-3">
              {/* submit */}
              <div className="w-1/2 md:w-1/6 p-2 md:p-4 mb-6 md:mb-0">
                <button
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {
                    window.location.href = "/";
                    // this.props.history.push("/");
                  }}
                >
                  Cancel
                </button>
              </div>
              <div className="w-1/2 md:w-1/6 p-2 md:p-4 mb-6 md:mb-0">
                <button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {
                    postListing();
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AddListing;
