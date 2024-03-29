import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/components/Login.jsx";
import Dashboard from "./assets/components/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
