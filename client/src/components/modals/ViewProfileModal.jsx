import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import { openGoogleAuthWindow } from "../../utils/windowUtils";

const ViewProfileModal = () => {
  const { activeModal, closeModal } = useModal();
  const navigate = useNavigate();

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

  const handleSignIn = () => {
    closeModal();
    navigate("/login");
  };

  const handleJoinNow = () => {
    closeModal();
    navigate("/signup");
  };

  const handleGoogleSignIn = () => {
    openGoogleAuthWindow();
    closeModal();
  };

  if (activeModal !== "viewProfile") return null;

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
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-modal transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
          <div className="relative bg-white p-6">
            {/* Close button */}
            <div className="absolute top-4 right-4">
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

            <div className="flex flex-col items-center text-center py-4">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-black mb-4">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQE8WhVEabirRw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1643374443515?e=2147483647&v=beta&t=PEEd2vGzeqoHN8eMVmr5-yo5C4TZt1AWQTHznPoed0M"
                  alt="Paul Aurelian Gagniuc"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2";
                  }}
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                View Paul Aurelian&apos;s full profile
              </h3>
            </div>

            <div className="mb-3">
              <button
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center py-2 px-4 rounded-full text-white font-medium bg-linkedin-blue hover:bg-linkedin-darkBlue focus:outline-none"
              >
                <div className="bg-white rounded-full w-7 h-7 mr-2 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                      <path
                        fill="#4285F4"
                        d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                      />
                      <path
                        fill="#34A853"
                        d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                      />
                      <path
                        fill="#EA4335"
                        d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                      />
                    </g>
                  </svg>
                </div>
                Continue with Google
              </button>
            </div>

            <div className="mb-4">
              <button
                onClick={handleSignIn}
                className="w-full py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                Sign in
              </button>
            </div>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="text-center my-4">
              <p className="text-sm text-gray-700">
                New to LinkedIn?{" "}
                <button
                  onClick={handleJoinNow}
                  className="text-linkedin-blue font-medium hover:underline"
                >
                  Join now
                </button>
              </p>
            </div>

            <div className="mt-6 text-xs text-gray-500 text-center">
              By clicking Continue to join or sign in, you agree to
              LinkedIn&apos;s{" "}
              <a href="#" className="text-linkedin-blue hover:underline">
                User Agreement
              </a>
              ,{" "}
              <a href="#" className="text-linkedin-blue hover:underline">
                Privacy Policy
              </a>
              , and{" "}
              <a href="#" className="text-linkedin-blue hover:underline">
                Cookie Policy
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfileModal;
