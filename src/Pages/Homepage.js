import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Homepage(props) {
  return (
    <>
      <Navbar location={"home"} isLoggedin={props.isLoggedin} />
      <Carousel />

      <Footer />
    </>
  );
}

export default Homepage;
