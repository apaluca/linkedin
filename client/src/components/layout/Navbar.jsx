import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate("/login");
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white border-b border-linkedin-border z-50">
      <div className="max-w-[1128px] mx-auto px-4 flex items-center justify-between h-[52px]">
        <div className="flex items-center">
          <Link to="/login" className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#0a66c2"
              width="32"
              height="32"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Link>

          <div className="hidden md:block relative ml-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-linkedin-gray pl-8 pr-2 py-1 rounded-md w-64 text-sm border border-linkedin-border focus:outline-none focus:border-linkedin-blue"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-linkedin-darkGray"
            >
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
          </div>
        </div>

        <nav className="flex items-center">
          <ul className="flex items-center space-x-1 md:space-x-2">
            <li className="nav-item">
              <div
                onClick={() => navigate("/login")}
                className="flex flex-col items-center justify-center px-1 py-1 text-xs text-linkedin-darkGray hover:text-black cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                </svg>
                <span>Home</span>
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => navigate("/login")}
                className="flex flex-col items-center justify-center px-1 py-1 text-xs text-linkedin-darkGray hover:text-black cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
                <span>My Network</span>
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => navigate("/login")}
                className="flex flex-col items-center justify-center px-1 py-1 text-xs text-linkedin-darkGray hover:text-black cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
                <span>Jobs</span>
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => navigate("/login")}
                className="flex flex-col items-center justify-center px-1 py-1 text-xs text-linkedin-darkGray hover:text-black cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                </svg>
                <span>Messaging</span>
              </div>
            </li>
          </ul>

          <div className="flex items-center ml-4">
            <Link
              to="/login"
              className="bg-transparent text-linkedin-blue font-medium px-4 py-1 rounded-full border-2 border-linkedin-blue hover:bg-linkedin-lightBlue text-sm"
            >
              Sign in
            </Link>

            <button
              onClick={() => navigate("/signup")}
              className="bg-linkedin-blue text-white font-medium px-4 py-1 rounded-full ml-2 hover:bg-linkedin-darkBlue text-sm"
            >
              Join now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
