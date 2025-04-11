import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/ModalContext";

const ProfileInfo = ({
  name,
  title,
  location,
  followers,
  connections,
  username = "paul-gagniuc",
}) => {
  const { openModal } = useModal();
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate(`/signup/${username}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl md:text-2xl font-bold">{name}</h1>
      <h2 className="text-md text-gray-700 mt-1">{title}</h2>

      <div className="flex flex-col md:flex-row md:items-center mt-2 text-sm text-gray-500">
        <span>{location}</span>
        <span className="hidden md:inline mx-1">•</span>
        <button
          onClick={() => openModal("contactInfo")}
          className="text-linkedin-blue font-semibold hover:underline"
        >
          Contact Info
        </button>
      </div>

      <div className="flex items-center mt-2 text-sm text-gray-500">
        <span>{followers} followers</span>
        <span className="mx-1">•</span>
        <span>{connections} connections</span>
      </div>

      <div className="flex flex-wrap mt-4 -ml-2">
        <button
          onClick={handleJoinClick}
          className="ml-2 bg-linkedin-blue text-white py-1 px-4 font-medium rounded-full hover:bg-linkedin-darkBlue"
        >
          Join to view profile
        </button>

        <button
          onClick={() => openModal("message")}
          className="ml-2 border border-linkedin-blue text-linkedin-blue py-1 px-4 font-medium rounded-full hover:bg-linkedin-lightBlue flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
            className="mr-1"
          >
            <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.3 5L14 2z"></path>
          </svg>
          Message
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
