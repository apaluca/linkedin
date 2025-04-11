import { useState, useEffect } from "react";
import { useModal } from "../../context/ModalContext";

const SignInModal = () => {
  const { activeModal, closeModal, openModal } = useModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  if (activeModal !== "signIn") return null;

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

            <h2 className="text-2xl font-normal text-gray-900 mb-6">
              Welcome back
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-normal text-gray-700 mb-1"
                >
                  Email or phone
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-linkedin-blue focus:border-linkedin-blue"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-normal text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-linkedin-blue focus:border-linkedin-blue pr-16"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-linkedin-blue font-semibold"
                  >
                    Show
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <button
                  type="button"
                  className="text-linkedin-blue text-sm font-normal hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-full text-white font-medium bg-[#0a66c2] hover:bg-[#004182] focus:outline-none mb-4"
              >
                Sign in
              </button>
            </form>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="text-xs text-gray-600 text-center mb-4">
              By clicking Continue to join or sign in, you agree to LinkedIn&apos;s{" "}
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

            <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none mb-4">
              <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-700">
                New to LinkedIn?{" "}
                <button
                  type="button"
                  onClick={() => {
                    closeModal();
                    openModal("join");
                  }}
                  className="text-linkedin-blue font-medium hover:underline"
                >
                  Join now
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
