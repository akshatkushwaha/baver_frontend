import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginStatus } from "./redux/reducers/userData";
import { fetchProfile } from "./api";
import { useState } from "react";
import About from "./Pages/About";
import ContactPage from "./Pages/Contactpage";
import Homepage from "./Pages/Homepage";
import ErrorPage from "./Pages/ErrorPage";
import LoginPopup from "./components/LoginPopUP";
import Navbar from "./components/Navbar";
import AddListing from "./Pages/AddListing";

function App() {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const [loginPopup, setLoginPopup] = useState(false);

  async function setUserData() {
    const data = await fetchProfile().then((res) => res.data);
    dispatch(setLoginStatus(data));
  }

  if (
    userData.active === false &&
    (localStorage.getItem("token") || sessionStorage.getItem("token"))
  ) {
    setUserData();
  }

  return (
    <>
      <Navbar setLoginPopup={setLoginPopup} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/addlisting" element={<AddListing />} />
        </Routes>
      </Router>
      <LoginPopup loginPopup={loginPopup} setLoginPopup={setLoginPopup} />
    </>
  );
}

export default App;
