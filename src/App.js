import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./Pages/About";
import ContactPage from "./Pages/Contactpage";
import Homepage from "./Pages/Homepage";
import ErrorPage from "./Pages/ErrorPage";
import LoginPopup from "./components/LoginPopUP";

function App() {
  const [isLoggedin, setLoginStatus] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);

  if (isLoggedin === false && localStorage.getItem("token")) {
    setLoginStatus(true);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Homepage isLoggedin={isLoggedin} setLoginPopup={setLoginPopup} />
            }
          />
          <Route
            exact
            path="/about"
            element={
              <About isLoggedin={isLoggedin} setLoginPopup={setLoginPopup} />
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <ContactPage
                isLoggedin={isLoggedin}
                setLoginPopup={setLoginPopup}
              />
            }
          />
          <Route path="*" element={<ErrorPage isLoggedin={isLoggedin} />} />
        </Routes>
      </Router>
      <LoginPopup loginPopup={loginPopup} setLoginPopup={setLoginPopup} />
    </>
  );
}

export default App;
