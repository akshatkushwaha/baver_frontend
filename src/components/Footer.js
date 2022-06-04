function Footer() {
  return (
    <>
      <footer className="bg-gray-800 flex justify-center">
        <div className="w-full md:w-4/6 grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 justify-start md:justify-items-center ">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
              Company
            </h2>
            <ul className="text-gray-300">
              <li className="mb-4">
                <a href="/about" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>

              <li className="mb-4">
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
              Help center
            </h2>
            <ul className="text-gray-300">
              <li className="mb-4">
                <a
                  href="https://www.twitter.com/baver"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {" "}
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.facebook.com/baver"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>

              <li className="mb-4">
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
              Legal
            </h2>
            <ul className="text-gray-300">
              <li className="mb-4">
                <a href="/privacypolicy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="/terms-and-conditions" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
              Download
            </h2>
            <ul className="text-gray-300">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="py-6 px-4 bg-gray-700 flex items-center justify-center">
        <span className="text-sm text-gray-300 sm:text-center">
          © 2022 Baver. All Rights Reserved.
        </span>
      </div>
    </>
  );
}

export default Footer;
