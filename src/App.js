import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./Pages/About";
import ContactPage from "./Pages/Contactpage";
import Homepage from "./Pages/Homepage";
import ErrorPage from "./Pages/ErrorPage";
import LoginPopup from "./components/LoginPopUP";
import Navbar from "./components/Navbar";
import AddListing from "./Pages/AddListing";

function App() {
  const [isLoggedin, setLoginStatus] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [pictureURL, setPictureURL] = useState("");

  if (
    isLoggedin === false &&
    (localStorage.getItem("token") || sessionStorage.getItem("token"))
  ) {
    setLoginStatus(true);
    getProfile();
  }

  async function getProfile() {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const response = await fetch(`http://localhost:8000/api/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const encoded = encodeURI(data.data.email);
    setUsername(encoded);
    setPictureURL(data.data.profile_photo_url);
  }

  return (
    <>
      <Navbar
        isLoggedin={isLoggedin}
        setLoginPopup={setLoginPopup}
        username={username}
        pictureURL={pictureURL}
      />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage isLoggedin={isLoggedin} />}
          />
          <Route
            exact
            path="/about"
            element={<About isLoggedin={isLoggedin} />}
          />
          <Route
            exact
            path="/contact"
            element={<ContactPage isLoggedin={isLoggedin} />}
          />
          <Route path="*" element={<ErrorPage isLoggedin={isLoggedin} />} />
          <Route path="/addlisting" element={<AddListing />} />
        </Routes>
      </Router>
      <LoginPopup loginPopup={loginPopup} setLoginPopup={setLoginPopup} />
    </>
  );
}

export default App;
