import GSIbutton from "./GSIbutton";
import { useState } from "react";
import { sha512 } from "crypto-hash";

function LoginPopup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  function handleNativeLogin() {
    var storage = localStorage;
    if (rememberMe === false) {
      storage = sessionStorage;
    }
    setPassword(sha512(password));
    alert(password);
    // call API for login
    storage.setItem("loggedin", true);
    // storage.setItem("token", response.sub);
    // storage.setItem("username", response.email);
    // storage.setItem("pictureURL", response.picture);
    storage.setItem("username", email);
  }

  return (
    <>
      <div
        id="login_popup"
        style={{ display: "none", position: "fixed", top: 0 }}
        className="absolute w-full h-full flex items-center justify-center backdrop-blur-sm backdrop-grayscale-[.5] w3-container w3-animate-top"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => {
                document.getElementById("login_popup").style.display = "none";
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
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white text-center">
                Sign in
              </h3>
              <form className="space-y-6">
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
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
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
                  type="submit"
                  className="w-full text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  onSubmit={() => {
                    handleNativeLogin();
                  }}
                >
                  Login
                </button>
              </form>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300 pt-4">
                Not registered?
                <button
                  className="text-blue-700 hover:underline dark:text-blue-500 px-2"
                  onClick={() => {
                    document.getElementById("login_popup").style.display =
                      "none";
                    document.getElementById("register_popup").style.display =
                      "flex";
                  }}
                >
                  Create account
                </button>
              </div>
              <hr className="mt-6 border-b-1 border-gray-400" />

              <div className="btn-wrapper pt-5 text-center flex justify-center">
                <GSIbutton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPopup;
