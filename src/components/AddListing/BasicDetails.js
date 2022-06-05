import { useState } from "react";
function BasicDetails(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState("");

  return (
    <section className="h-full flex flex-col justify-between">
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
        <div className="w-full md:w-1/2 md:p-4 mb-6 md:mb-0">
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
              <option value={"Food & Restorants"}>Food & Restorants</option>
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
        <div className="w-full md:w-1/2 md:p-4 mb-6 md:mb-0">
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
      <div className="flex flex-wrap mx-3 md:flex-row-reverse">
        <div className="w-full md:w-1/2 flex md:justify-end p-2 md:p-4 mt-4 md:mb-0">
          <button
            className="w-full md:w-1/4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              props.nextStep();
              props.getBasicDetails({ name, category, phone, file }); // passing data to parent component
            }}
          >
            Next
          </button>
        </div>
        <div className="w-full md:w-1/2 p-2 md:p-4 mt-4 md:mb-0">
          <button
            className="w-full md:w-1/4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              window.location.href = "/";
              // this.props.history.push("/");
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default BasicDetails;
