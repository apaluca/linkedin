import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route
          path="/"
          element={
            <div className="container mx-auto p-4 text-center">
              <h1 className="text-xl font-bold">MERN Template</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
