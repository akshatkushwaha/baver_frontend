import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import About from "./Pages/About";
import ContactPage from "./Pages/Contactpage";
import Homepage from "./Pages/Homepage";
import ErrorPage from "./Pages/ErrorPage";
import LoginPopup from "./components/LoginPopUP";

function App() {
  const [isLoggedin, setLoginStatus] = useState(false);
  var popup = <LoginPopup />;

  if (isLoggedin === false && localStorage.getItem("loggedin") === "true") {
    setLoginStatus(true);
    popup = <></>;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Homepage
                isLoggedin={isLoggedin}
                setLoginStatus={setLoginStatus}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={
              <About isLoggedin={isLoggedin} setLoginStatus={setLoginStatus} />
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <ContactPage
                isLoggedin={isLoggedin}
                setLoginStatus={setLoginStatus}
              />
            }
          />
          {/* <Route
            exact
            path="/auth/login"
            element={
              <Authpage
                setLoginStatus={setLoginStatus}
                isLoggedin={isLoggedin}
              />
            }
          />
          <Route
            exact
            path="/auth/register"
            element={
              <Register
                setLoginStatus={setLoginStatus}
                isLoggedin={isLoggedin}
              />
            }
          /> */}
          <Route path="*" element={<ErrorPage isLoggedin={isLoggedin} />} />
        </Routes>
      </Router>
      {popup}
    </>
  );
}

export default App;
