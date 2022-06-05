import AliceCarousel from "react-alice-carousel";
import Search from "./HomeSearch";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const carouselsource = [
  {
    offer: "Some offer",
    offerDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat odio id nunc tincidunt, sit amet laoreet libero scelerisque.",
    img: "https://raw.githubusercontent.com/akshatkushwaha/baver_frontend/master/src/assets/img/Collage_compressed.jpg",
  },
  {
    offer: "Some offer",
    offerDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat odio id nunc tincidunt, sit amet laoreet libero scelerisque.",
    img: "https://raw.githubusercontent.com/akshatkushwaha/baver_frontend/master/src/assets/img/Collage_compressed.jpg",
  },
  {
    offer: "Some offer",
    offerDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat odio id nunc tincidunt, sit amet laoreet libero scelerisque.",
    img: "https://raw.githubusercontent.com/akshatkushwaha/baver_frontend/master/src/assets/img/Collage_compressed.jpg",
  },
];

const items = carouselsource.map((item, key) => {
  return (
    // create banner
    <a key={key} href="/" className="min-h-screen">
      <div className="absolute h-full w-full md:w-1/3 bg-gradient-to-r from-gray-900 pl-4 md:pl-20 flex flex-col justify-center">
        <h1 className="text-xl lg:text-6xl md:p-2 text-white font-bold">
          {item.offer}
        </h1>
        <p className="text-sm lg:text-xl md:p-2 text-white leading-loose">
          {item.offerDetails}
        </p>
        <button className="w-1/3 text-sm md:text-xl p-2 m-2 bg-orange-400 hover:bg-orange-500 rounded-lg md:p-4 text-white">
          Get offer
        </button>
      </div>
      <img
        src={item.img}
        onDragStart={handleDragStart}
        alt="presentation"
        className="w-full"
      />
    </a>
  );
});

function Carousel() {
  return (
    <section className="relative w-full h-fit flex flex-col justify-center items-center">
      {/* create carousel banner */}

      <AliceCarousel
        mouseTracking
        items={items}
        infinite={true}
        autoHeight={true}
        autoPlay={true}
        autoPlayInterval={2000}
        autoPlayStrategy={"all"}
        disableButtonsControls={true}
        disableDotsControls={true}
      />
      <Search />
    </section>
  );
}

export default Carousel;
