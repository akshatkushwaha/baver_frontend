function TopPlaces(props) {
  return (
    <>
      <section className="py-8 px-2 flex flex-col justify-center items-center">
        <div className="container relative text-center py-4 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold">
            Top Places <span className="text-orange-400">Listing</span>
          </h1>
          <p className="text-lg font-sans py-2">
            At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui
            Blanditiis.
          </p>
        </div>
        <div className="flex w-3/4 text-center">
          <div className="relative bg-fixed w-2/3 h-96 m-6 overflow-hidden rounded-lg">
            <img
              className="h-full"
              src="https://getinfocity.com/wp-content/uploads/2017/04/Rajwada-mall-in-indore.jpg"
            />
            <div className="absolute top-0 h-full w-full flex flex-col justify-end py-10 bg-gradient-to-t from-gray-900">
              <h1 className="text-white text-5xl font-sans font-bold">
                Indore
              </h1>
              <p className="text-lg text-white">Get all listing</p>
            </div>
          </div>
          <div className="relative bg-fixed w-96 h-96 m-6 overflow-hidden rounded-lg">
            <img src="https://storage.googleapis.com/livepitch_new/0dde2e720afb3b51ff2f2213ad520f47.jpg" />
            <div className="absolute top-0 h-full w-full flex flex-col justify-end py-10 bg-gradient-to-t from-gray-900">
              <h1 className="text-white text-5xl font-sans font-bold">
                Bhopal
              </h1>
              <p className="text-lg text-white">Get all listing</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopPlaces;
