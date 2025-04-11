import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show the banner after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 right-3 bg-white shadow-lg rounded-md p-3 max-w-xs z-40 bg-opacity-95 hidden md:block">
      <div className="flex items-start">
        <div className="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#0a66c2"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <p className="text-gray-800 font-semibold mb-1">
            LinkedIn is better on the app
          </p>
          <p className="text-gray-600 text-sm">
            Don&apos;t have the app? Get it in the Microsoft Store.
          </p>

          <div onClick={() => navigate("/login")}>
            <button className="mt-2 px-3 py-1 bg-gray-100 text-linkedin-blue font-medium rounded-full text-sm hover:bg-gray-200">
              Open the app
            </button>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AppBanner;
