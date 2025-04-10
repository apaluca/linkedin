import SignInModal from "./SignInModal";
import JoinModal from "./JoinModal";
import ViewProfileModal from "./ViewProfileModal";
import ContactInfoModal from "./ContactInfoModal";

/**
 * ModalRegistry component that manages all application modals
 * This allows for centralized modal registration and management
 */
const ModalRegistry = () => {
  return (
    <>
      <SignInModal />
      <JoinModal />
      <ViewProfileModal />
      <ContactInfoModal />
      {/* Add additional modals here as needed */}
    </>
  );
};

export default ModalRegistry;
