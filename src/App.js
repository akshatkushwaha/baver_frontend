import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginStatus } from "./redux/reducers/userData";
import { fetchProfile } from "./api/auth";
import { useState } from "react";
import About from "./Pages/About";
import ContactPage from "./Pages/Contactpage";
import Homepage from "./Pages/Homepage";
import ErrorPage from "./Pages/ErrorPage";
import LoginPopup from "./components/LoginPopUP";
import Navbar from "./components/Navbar";
import NotificationPopup from "./components/NotificationPopup";
import AddListing from "./Pages/Listings/AddListing";
import Listing from "./Pages/Listings/Listing";
import User from "./Pages/User/User";
import Listings from "./Pages/Listings/Listings";

function App() {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const [loginPopup, setLoginPopup] = useState(false);
  const [profileLodingBanner, setProfileLodingBanner] = useState(false);

  async function setUserData() {
    const data = await fetchProfile().then((res) => res.data);
    dispatch(setLoginStatus(data));
    setProfileLodingBanner(false);
  }

  if (
    !userData.active &&
    !profileLodingBanner &&
    (localStorage.getItem("token") || sessionStorage.getItem("token"))
  ) {
    setProfileLodingBanner(true);
    setUserData();
  }

  return (
    <>
      <NotificationPopup
        profileLodingBanner={profileLodingBanner}
        setProfileLodingBanner={setProfileLodingBanner}
      />
      <Navbar setLoginPopup={setLoginPopup} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/listing">
            <Route path=":id" element={<Listing />} />
            <Route path="add" element={<AddListing />} />
          </Route>
          <Route path="/listings" element={<Listings />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <LoginPopup loginPopup={loginPopup} setLoginPopup={setLoginPopup} />
    </>
  );
}

export default App;
