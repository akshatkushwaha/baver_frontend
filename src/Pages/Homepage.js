import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import MostPopulerDeals from "../components/PopularDeals/MostPopuDeals";
import TopHoreca from "../components/TopHoreca/TopHoreca";
import TopPlaces from "../components/TopPlaces";

function Homepage(props) {
  return (
    <>
      <Carousel />
      <MostPopulerDeals />
      <TopPlaces />
      <TopHoreca />
      <Footer />
    </>
  );
}

export default Homepage;
