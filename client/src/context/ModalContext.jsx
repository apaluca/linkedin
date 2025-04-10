import { createContext, useState, useContext, useCallback } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null);

  // Function to check and update modal display history
  const showModalOnce = useCallback(
    (modalId, storageKey = `shown_modal_${modalId}`) => {
      // Check if this modal has been shown before
      const hasBeenShown = sessionStorage.getItem(storageKey);

      if (!hasBeenShown) {
        // If not shown before, show it and mark as shown
        setActiveModal(modalId);
        sessionStorage.setItem(storageKey, "true");
        return true;
      }

      return false;
    },
    []
  );

  const openModal = useCallback((modalId) => {
    setActiveModal(modalId);
    // document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    // document.body.style.overflow = "auto"; // Re-enable scrolling
  }, []);

  return (
    <ModalContext.Provider
      value={{ activeModal, openModal, closeModal, showModalOnce }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
