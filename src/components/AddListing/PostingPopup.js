function PostingPopup(props) {
  return (
    <>
      {/* Lsiting Posted animation */}
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-xl">
            <div className=" px-6 py-8 rounded-lg">
              <div className="text-center mb-4">
                <h1 className="text-4xl font-bold my-1">
                  Your listing has been posted!
                </h1>
                <p className="text-gray-600 text-lg mx-1">
                  You can view your listing{" "}
                  <a
                    href="/"
                    className="underline text-orange-400 hover:text-orange-500"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => {
                    window.location.href = `/listings/${props.listingId}`;
                  }}
                >
                  Go to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostingPopup;
