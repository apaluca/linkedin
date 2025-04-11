import { Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ExternalRedirect from "./components/common/ExternalRedirect";
import ModalRegistry from "./components/modals/ModalRegistry";

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-linkedin-gray">
        <Routes>
          <Route
            path="/"
            element={<ExternalRedirect to="https://www.linkedin.com/" />}
          />
          <Route path="/in/:username" element={<ProfilePage />} />
          <Route path="/signup/:username" element={<SignupPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        {/* Global Modals */}
        <ModalRegistry />
      </div>
    </ModalProvider>
  );
}

export default App;
