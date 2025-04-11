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
    <div className="p-5">
      <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
      <h2 className="text-md text-gray-700 mt-1">{title}</h2>

      <div className="flex flex-col md:flex-row md:items-center mt-1 text-1xl text-gray-500">
        <span>{location}</span>
        <span className="hidden md:inline mx-1">•</span>
        <button
          onClick={() => openModal("viewProfile")}
          className="text-linkedin-blue font-semibold hover:underline"
        >
          Contact Info
        </button>
      </div>

      <div className="flex items-center mt-1 text-1xl text-gray-500">
        <span>{followers} followers</span>
        <span className="mx-1">•</span>
        <span>{connections} connections</span>
      </div>

      <div className="flex flex-wrap mt-4 -ml-2">
        <button
          onClick={handleJoinClick}
          className="ml-2 bg-linkedin-blue text-white py-4 px-6 font-semibold rounded-full hover:bg-linkedin-darkBlue"
        >
          Join to view profile
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
