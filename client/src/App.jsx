import { Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import ModalRegistry from "./components/modals/ModalRegistry";

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-linkedin-gray">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/in/:username" element={<ProfilePage />} />
          <Route path="/signup/:username" element={<SignupPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>

        {/* Global Modals */}
        <ModalRegistry />
      </div>
    </ModalProvider>
  );
}

export default App;
