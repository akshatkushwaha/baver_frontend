import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import MostPopulerDeals from "../components/Deals/MostPopuDeals";
import TopHoreca from "../components/Horecas/TopHoreca";
import TopCities from "../components/Cities/TopCities";

function Homepage(props) {
  return (
    <>
      <Carousel />
      <MostPopulerDeals />
      <TopCities />
      <TopHoreca />
      <Footer />
    </>
  );
}

export default Homepage;
