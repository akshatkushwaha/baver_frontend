import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import MostPopulerDeals from "../components/MostPopuDeal";
import Navbar from "../components/Navbar";

function Homepage(props) {
  return (
    <>
      <Navbar location={"home"} isLoggedin={props.isLoggedin} />
      <Carousel />
      <MostPopulerDeals />
      <Footer />
    </>
  );
}

export default Homepage;
