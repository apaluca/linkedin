import ViewProfileModal from "./ViewProfileModal";

/**
 * ModalRegistry component that manages all application modals
 * This allows for centralized modal registration and management
 */
const ModalRegistry = () => {
  return (
    <>
      <ViewProfileModal />
      {/* Add additional modals here as needed */}
    </>
  );
};

export default ModalRegistry;
