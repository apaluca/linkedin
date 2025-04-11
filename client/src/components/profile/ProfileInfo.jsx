import { useModal } from "../../context/ModalContext";

const ProfileInfo = ({ name, title, location, followers, connections }) => {
  const { openModal } = useModal();

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
          onClick={() => openModal("join")}
          className="ml-2 bg-linkedin-blue text-white py-3 px-5 font-medium rounded-full hover:bg-linkedin-darkBlue"
        >
          Join to view profile
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
