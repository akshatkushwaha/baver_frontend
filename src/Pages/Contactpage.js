import Navbar from "../components/Navbar";

function ContactPage(props) {
  return (
    <>
      <Navbar location="contact" isLoggedin={props.isLoggedin} />
    </>
  );
}

export default ContactPage;
