import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Search from "../components/HomeSearch";
import MostPopulerDeals from "../components/MostPopuDeal";
import Navbar from "../components/Navbar";
import TopHoreca from "../components/TopHoreca";
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
