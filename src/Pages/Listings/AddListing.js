import Footer from "../../components/Footer";
import { useState } from "react";
import BasicDetails from "../../components/AddListing/BasicDetails";
import Address from "../../components/AddListing/Address";
import PostingPopup from "../../components/AddListing/PostingPopup";
import { postListing } from "../../api/listing";

function AddListing(props) {
  const [step, setStep] = useState(1);
  const [listingDetails, addListingDetails] = useState({
    name: "",
    category: "",
    phone: "",
    file: "",
    address: "",
    address2: "",
    pinCode: "",
    city: "",
    state: "",
  });
  const [listingId, setListingId] = useState("");

  function nextStep() {
    setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

  function getBasicDetails(data) {
    addListingDetails({ ...listingDetails, ...data });
  }

  function getAddress(data) {
    addListingDetails({ ...listingDetails, ...data });
    postListing();
  }

  async function postListing() {
    const response = await postListing(listingDetails);
    setListingId(response.data.id);
    nextStep();
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
        <section className="container md:h-96 max-w-screen-xl mx-auto p-4 md:px-14 bg-white rounded-lg">
          {step === 3 ? (
            <PostingPopup listingId={listingId} />
          ) : (
            <form className="h-full">
              {step === 1 && (
                <BasicDetails
                  nextStep={nextStep}
                  getBasicDetails={getBasicDetails}
                />
              )}
              {step === 2 && (
                <Address
                  nextStep={nextStep}
                  prevStep={prevStep}
                  getAddress={getAddress}
                />
              )}
            </form>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AddListing;
