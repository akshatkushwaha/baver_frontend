import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();
var items = [];

const carouselsource = [
  {
    offer: "Some offer",
    offerDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat odio id nunc tincidunt, sit amet laoreet libero scelerisque.",
    img: "https://raw.githubusercontent.com/akshatkushwaha/baver_frontend/master/src/assets/img/c1.jpg",
  },
  {
    offer: "Some offer",
    offerDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat odio id nunc tincidunt, sit amet laoreet libero scelerisque.",
    img: "https://raw.githubusercontent.com/akshatkushwaha/baver_frontend/master/src/assets/img/c2.jpg",
  },
  {
    offer: "Some offer",
    offerDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat odio id nunc tincidunt, sit amet laoreet libero scelerisque.",
    img: "https://raw.githubusercontent.com/akshatkushwaha/baver_frontend/master/src/assets/img/c3.jpg",
  },
];

carouselsource.map((item, key) => {
  items.push(
    <a key={key}>
      <div className="absolute top-1/6 ml-5 md:top-1/3 md:ml-40 w-2/3 md:w-1/3">
        <h1 className="text-xl lg:text-8xl md:p-2 text-white font-bold">
          {item.offer}
        </h1>
        <p className="text-sm lg:text-2xl md:p-2 text-white leading-loose">
          {item.offerDetails}
        </p>
        <button className="text-sm md:text-xl p-2 m-2 bg-orange-400 hover:bg-orange-500 rounded-lg md:p-4 text-white">
          Get offer
        </button>
      </div>
      <img src={item.img} onDragStart={handleDragStart} role="presentation" />
    </a>
  );
});

function Carousel() {
  return (
    <section className="h-2/3">
      <AliceCarousel
        mouseTracking
        items={items}
        infinite={true}
        autoHeight={true}
        autoPlay={true}
        autoPlayInterval={2000}
        autoPlayStrategy={"all"}
        disableButtonsControls={true}
        disableDotsControls={false}
      />
    </section>
  );
}

export default Carousel;