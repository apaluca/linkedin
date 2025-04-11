import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/ModalContext";

const ProfileBanner = ({ bannerImage, profileImage, name }) => {
  const { openModal } = useModal();
  const navigate = useNavigate();
  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleImageError = (e) => {
    // Fallback to a gradient background if image fails to load
    e.target.onerror = null;
    e.target.style.background = "linear-gradient(to right, #70B5F9, #0073B1)";
    e.target.style.height = "134px";
  };

  const handleReportProfile = () => {
    setShowReportDropdown(false);
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowReportDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Banner Image */}
      <div className="h-32 md:h-52 bg-linkedin-blue relative overflow-hidden">
        {bannerImage ? (
          <img
            src={bannerImage}
            alt="Profile Banner"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-[#70B5F9] to-[#0073B1]"></div>
        )}
      </div>

      {/* Profile Image */}
      <div className="absolute left-4 -bottom-2 md:left-8">
        <button
          onClick={() => openModal("viewProfile")}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden cursor-pointer"
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2";
              }}
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="24"
                height="24"
                focusable="false"
                className="text-gray-500"
              >
                <path d="M12 2a10 10 0 00-6.88 17.23 11.48 11.48 0 017.77 0A10 10 0 0012 2zm0 16a8 8 0 01-6.33-3.17 9.45 9.45 0 0112.66 0A8 8 0 0112 18zm4-8a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
          )}
        </button>
      </div>

      {/* Three dots menu - positioned higher, right at banner bottom */}
      <div className="absolute right-4 md:right-6" style={{ top: "calc(80%)" }}>
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => setShowReportDropdown(!showReportDropdown)}
            className="w-9 h-9 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full border border-gray-200 shadow-sm"
            aria-label="More actions"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gray-600"
            >
              <circle cx="6" cy="12" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="18" cy="12" r="2"></circle>
            </svg>
          </button>

          {/* Dropdown menu */}
          {showReportDropdown && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg z-30 w-64 overflow-hidden border border-gray-200"
            >
              <button
                onClick={handleReportProfile}
                className="flex items-center w-full py-3 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-100 text-left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-gray-600"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                Report this profile
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Add height for the profile image to protrude */}
      <div className="h-12 md:h-16"></div>
    </div>
  );
};

export default ProfileBanner;
