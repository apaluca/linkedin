import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [language, setLanguage] = useState("English");
  const [showLanguages, setShowLanguages] = useState(false);

  const languages = [
    { name: "English", code: "en_US" },
    { name: "Polski", code: "pl_PL" },
    { name: "Română", code: "ro_RO" },
  ];

  return (
    <footer className="bg-transparent py-3 px-2 mt-6">
      <div className="max-w-[1128px] mx-auto">
        <div className="flex flex-wrap items-center justify-start">
          {/* LinkedIn Logo */}
          <div className="flex items-center py-1 px-1 text-gray-600 w-1/2 md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 14"
              data-supported-dps="56x14"
              fill="currentColor"
              width="56"
              height="14"
              focusable="false"
            >
              <g fill="currentColor">
                <path d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2A1.25 1.25 0 1045 4.25 1.25 1.25 0 0046.25 3zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"></path>
              </g>
            </svg>
            <span className="ml-1 text-xs">© 2025</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap">
            <Link
              to="/"
              className="py-1 px-1 text-xs font-semibold text-gray-600 hover:text-gray-900 w-1/2 md:w-auto"
            >
              About
            </Link>
            <Link
              to="/"
              className="py-1 px-1 text-xs font-semibold text-gray-600 hover:text-gray-900 w-1/2 md:w-auto"
            >
              Accessibility
            </Link>
            <Link
              to="/"
              className="py-1 px-1 text-xs font-semibold text-gray-600 hover:text-gray-900 w-1/2 md:w-auto"
            >
              User Agreement
            </Link>
            <Link
              to="/"
              className="py-1 px-1 text-xs font-semibold text-gray-600 hover:text-gray-900 w-1/2 md:w-auto"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="py-1 px-1 text-xs font-semibold text-gray-600 hover:text-gray-900 w-1/2 md:w-auto"
            >
              Cookie Policy
            </Link>
            <Link
              to="/"
              className="py-1 px-1 text-xs font-semibold text-gray-600 hover:text-gray-900 w-1/2 md:w-auto"
            >
              Copyright Policy
            </Link>
            <Link
              to="/"
              className="py-1 px-1 text-xs font-semibold text-gray-600 hover:text-gray-900 w-1/2 md:w-auto"
            >
              Brand Policy
            </Link>
            <Link
              to="/"
              className="py-1 px-1 text-xs font-semibold text-gray-600 hover:text-gray-900 w-1/2 md:w-auto"
            >
              Guest Controls
            </Link>
            <Link
              to="/"
              className="py-1 px-1 text-xs font-semibold text-gray-600 hover:text-gray-900 w-1/2 md:w-auto"
            >
              Community Guidelines
            </Link>

            {/* Language Selector */}
            <div className="relative py-1 px-1 w-1/2 md:w-auto">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="flex items-center text-xs font-semibold text-gray-600 hover:text-gray-900 pr-2"
              >
                <span>Language</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                  focusable="false"
                  className="ml-0.5"
                >
                  <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                </svg>
              </button>

              {showLanguages && (
                <div className="absolute bottom-full left-0 bg-white shadow-lg rounded-md py-1 min-w-[160px] z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.name);
                        setShowLanguages(false);
                      }}
                      className={`block w-full text-left px-2 py-1 text-xs hover:bg-linkedin-blue hover:text-white ${
                        language === lang.name ? "font-bold" : ""
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
