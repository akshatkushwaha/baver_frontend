import Navbar from "../components/Navbar";

function About(props) {
  return (
    <>
      <Navbar location={"about"} isLoggedin={props.isLoggedin} />
    </>
  );
}

export default About;
