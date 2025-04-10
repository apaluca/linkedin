import { useEffect } from "react";
import { useModal } from "../../context/ModalContext";

const ContactInfoModal = () => {
  const { activeModal, closeModal } = useModal();

  // Close modal when pressing ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  if (activeModal !== "contactInfo") return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
        </div>

        {/* Modal */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-modal transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                Paul Aurelian Gagniuc&apos;s Contact Info
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="mt-4">
              <div className="mb-6">
                <h3 className="text-md font-semibold text-gray-700 mb-2">
                  Profile
                </h3>
                <div className="flex items-center text-linkedin-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                    className="mr-2"
                  >
                    <path d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM4 5h2v7H4zm1-1.67A1.17 1.17 0 114.83 2 1.17 1.17 0 015 3.33zm6 8.67H9V9c0-.73-.22-1.33-1.08-1.33A1.17 1.17 0 007 8.83V13H5V5h2v.92a2.16 2.16 0 011.84-1 2.5 2.5 0 012.16 2.57z"></path>
                  </svg>
                  <a
                    href="https://ro.linkedin.com/in/paul-gagniuc"
                    className="hover:underline"
                  >
                    linkedin.com/in/paul-gagniuc
                  </a>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-md font-semibold text-gray-700 mb-2">
                  Email
                </h3>
                <div className="flex items-center text-linkedin-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                    className="mr-2"
                  >
                    <path d="M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM2 12V6.12l4.17 3.08a2 2 0 002.33 0L12.5 6.15V12zm11.15-8L8 8.62a1 1 0 01-1.17 0L1.65 4z"></path>
                  </svg>
                  <span className="text-gray-600">Sign in to view email</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-md font-semibold text-gray-700 mb-2">
                  Phone
                </h3>
                <div className="flex items-center text-linkedin-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                    className="mr-2"
                  >
                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                  </svg>
                  <span className="text-gray-600">Sign in to view phone</span>
                </div>
              </div>

              <div>
                <h3 className="text-md font-semibold text-gray-700 mb-2">
                  Address
                </h3>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    width="16"
                    height="16"
                    focusable="false"
                    className="mr-2 mt-1 text-gray-500"
                  >
                    <path d="M8 1a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7zm0 1.87a5.13 5.13 0 00-5.13 5.13A5.13 5.13 0 008 13.13 5.13 5.13 0 0013.13 8 5.13 5.13 0 008 2.87zm.05 8.42l-4.35-4.35.7-.7 3.54 3.54 3.54-3.54.7.7-4.13 4.35z"></path>
                  </svg>
                  <p className="text-gray-600">Bucharest, Romania</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  closeModal();
                  // Open join or sign in modal
                }}
                className="inline-block px-4 py-2 bg-linkedin-blue text-white font-medium rounded-full hover:bg-linkedin-darkBlue"
              >
                Sign in to see contact details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoModal;
