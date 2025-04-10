import { Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import ProfilePage from "./pages/ProfilePage";
import ModalRegistry from "./components/modals/ModalRegistry";

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-linkedin-gray">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/in/:username" element={<ProfilePage />} />
        </Routes>

        {/* Global Modals */}
        <ModalRegistry />
      </div>
    </ModalProvider>
  );
}

export default App;
