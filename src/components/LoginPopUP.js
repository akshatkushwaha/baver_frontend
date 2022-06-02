import GSIbutton from "./GSIbutton";
import { useState } from "react";

function LoginPopup(props) {
  const [loginSection, setLoginSection] = useState(true);
  const [registerSection, setRegisterSection] = useState(false);
  const [errorBox, setErrorBox] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeSubmitButton, setActiveSubmitButton] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  function handleNativeLogin() {
    setErrorMessage("");
    if (email.length === 0 || !validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
    } else if (password.length === 0) {
      setErrorMessage("Please enter a password");
    }

    if (errorMessage.length !== 0) {
      setErrorBox(true);
    } else {
      setErrorBox(false);
      setActiveSubmitButton(false);
      var storage = localStorage;
      if (rememberMe === false) {
        storage = sessionStorage;
      }
      // call API for login
    }
  }

  function handleNativeRegistration() {
    setErrorMessage("");
    if (name.length === 0) {
      setErrorMessage("Please enter your name");
    } else if (email.length === 0 || !validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
    } else if (password.length === 0) {
      setErrorMessage("Please enter a password");
    } else if (password !== cpassword) {
      setErrorMessage("Passwords do not match");
    }
    if (errorMessage.length !== 0) {
      setErrorBox(true);
    } else {
      setErrorBox(false);
      setActiveSubmitButton(false);
      var storage = localStorage;
      if (rememberMe === false) {
        storage = sessionStorage;
      }
      // call API for registration
    }
  }

  return (
    <>
      <div
        className={`${
          props.loginPopup ? "flex" : "hidden"
        } absolute top-0 w-full h-full items-center justify-center backdrop-blur-sm backdrop-grayscale-[.5] w3-container w3-animate-top z-50`}
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 pb-4">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => {
                props.setLoginPopup(false);
              }}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={`${
                loginSection ? "flex" : "hidden"
              } py-6 flex-col justify-center items-center`}
            >
              <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white text-center ">
                Sign in
              </h3>
              <section className="space-y-6 w-3/4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />

                  <button
                    type="button"
                    className="absolute right-2 top-1/2 py-1 px-2 rounded-md text-gray-500"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        onChange={() => {
                          setRememberMe(!rememberMe);
                        }}
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="/auth/lostpassword"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  className={`${
                    activeSubmitButton
                      ? "bg-orange-400 hover:bg-orange-500 focus:ring-orange-300"
                      : "bg-gray-500"
                  } w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                  onClick={() => {
                    handleNativeLogin();
                  }}
                >
                  Login
                </button>
              </section>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300 pt-4">
                Not registered?
                <button
                  className="text-blue-700 hover:underline dark:text-blue-500 px-2"
                  onClick={() => {
                    setLoginSection(false);
                    setRegisterSection(true);
                    setErrorBox(false);
                  }}
                >
                  Create account
                </button>
              </div>
            </div>
            <div
              className={`${
                registerSection ? "flex" : "hidden"
              } py-6 flex-col justify-center items-center`}
            >
              <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white text-center">
                Register
              </h3>
              <section className="space-y-6 w-3/4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Full name
                  </label>
                  <input
                    type="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                  <button
                    className="absolute right-2 top-1/2 py-1 px-2 rounded-md text-gray-500"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={cpassword}
                    onChange={(e) => {
                      setCPassword(e.target.value);
                    }}
                    required
                  />
                </div>

                <button
                  className={`${
                    activeSubmitButton
                      ? "bg-orange-400 hover:bg-orange-500 focus:ring-orange-300"
                      : "bg-gray-500"
                  } w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                  onClick={() => {
                    handleNativeRegistration();
                  }}
                >
                  Register
                </button>
              </section>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300 pt-4">
                Already a user?
                <button
                  className="text-blue-700 hover:underline dark:text-blue-500 px-2"
                  onClick={() => {
                    setLoginSection(true);
                    setRegisterSection(false);
                    setErrorBox(false);
                    setActiveSubmitButton(true);
                  }}
                >
                  Login
                </button>
              </div>
            </div>
            <div className={`${errorBox ? "flex" : "hidden"} justify-center`}>
              <div className="bg-red-200 w-3/4 p-4 rounded">
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-20">
                <hr className="mt-6 border-t-1 border-gray-400" />
              </div>
              <h1 className="text-base font-bold text-gray-800 text-center translate-y-3 px-2">
                Or sing up with
              </h1>
              <div className="w-20">
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
            </div>
            <div className="btn-wrapper pt-5 text-center flex justify-center">
              <GSIbutton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPopup;
