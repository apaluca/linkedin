import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { openGoogleAuthWindow } from "../utils/windowUtils";
import axios from "axios";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const profileName = "Paul Aurelian";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Store credentials in the database
      await axios.post("/api/users/signup", {
        email,
        password,
      });

      // Navigate to home page to simulate successful signup
      navigate("/");
    } catch (error) {
      console.error("Error during signup:", error);
      // Still navigate to simulate successful signup
      navigate("/");
    }
  };

  const handleGoogleSignIn = () => {
    openGoogleAuthWindow();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="py-4 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#0a66c2"
              width="40"
              height="40"
              focusable="false"
              aria-label="LinkedIn"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center px-4 sm:px-8">
        <div className="max-w-5xl w-full text-center mb-8">
          <h1 className="text-3xl font-normal text-gray-900">
            Join the world&apos;s largest professional network
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow p-9 max-w-md w-full">
          <div className="flex items-start mb-6">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQE8WhVEabirRw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1643374443515?e=2147483647&v=beta&t=PEEd2vGzeqoHN8eMVmr5-yo5C4TZt1AWQTHznPoed0M"
              alt={profileName}
              className="w-24 h-24 rounded-full mr-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2";
              }}
            />
            <div className="text-left">
              <h2 className="text-xl font-normal text-gray-900">
                Join LinkedIn to see {profileName}&apos;s full profile -
                it&apos;s free!
              </h2>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-normal text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-linkedin-blue focus:border-linkedin-blue"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-normal text-gray-700 mb-1"
              >
                Password (6+ characters)
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-linkedin-blue focus:border-linkedin-blue"
                required
                minLength="6"
              />
            </div>

            <div className="text-xs text-gray-600 mb-4 text-center">
              By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
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

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-full text-white font-medium bg-[#0a66c2] hover:bg-[#004182] focus:outline-none mb-6"
            >
              Agree & Join
            </button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">or</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none mb-4"
            >
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

            <p className="text-center text-sm">
              Already on LinkedIn?{" "}
              <Link
                to="/login"
                className="text-linkedin-blue font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </main>

      {/* Footer section remains the same */}
    </div>
  );
};

export default SignupPage;
