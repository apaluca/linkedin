import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";

const LoginPage = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would handle authentication here
    console.log("Login attempted with:", { emailOrPhone, password });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">Sign in</h1>

          {/* Sign in with Google button */}
          <button className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-50 mb-4">
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
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

          {/* Sign in with Apple button */}
          <button className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-50 mb-6">
            <svg
              className="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"></path>
            </svg>
            Sign in with Apple
          </button>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Sign in form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email-or-phone" className="sr-only">
                Email or phone
              </label>
              <input
                id="email-or-phone"
                name="email-or-phone"
                type="text"
                placeholder="Email or phone"
                required
                className="w-full px-3 py-3 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-linkedin-blue focus:border-linkedin-blue"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
            </div>

            <div className="mb-2 relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full px-3 py-3 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-linkedin-blue focus:border-linkedin-blue pr-16"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-linkedin-blue font-medium"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="mb-6">
              <Link
                to="/forgot-password"
                className="text-linkedin-blue text-sm font-medium hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="flex items-center mb-6">
              <input
                id="keep-logged-in"
                name="keep-logged-in"
                type="checkbox"
                className="h-4 w-4 text-linkedin-blue focus:ring-linkedin-blue border-gray-300 rounded"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
              />
              <label
                htmlFor="keep-logged-in"
                className="ml-2 block text-sm text-gray-900"
              >
                Keep me logged in
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-full bg-linkedin-blue text-white font-medium hover:bg-linkedin-darkBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-linkedin-blue"
            >
              Sign in
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            New to LinkedIn?{" "}
            <Link
              to="/signup"
              className="text-linkedin-blue font-medium hover:underline"
            >
              Join now
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
