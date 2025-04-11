import { useModal } from "../../context/ModalContext";

const ProfileBanner = ({ bannerImage, profileImage, name }) => {
  const { openModal } = useModal();

  const handleImageError = (e) => {
    // Fallback to a gradient background if image fails to load
    e.target.onerror = null;
    e.target.style.background = "linear-gradient(to right, #70B5F9, #0073B1)";
    e.target.style.height = "134px";
  };

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

      {/* Add height for the profile image to protrude */}
      <div className="h-12 md:h-16"></div>
    </div>
  );
};

export default ProfileBanner;
