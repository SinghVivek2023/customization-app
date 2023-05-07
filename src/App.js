import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashbboard from "./Dashbboard";
import ClientCustomizationForm from "./components/ClientCustomizationForm";
import SalesTeamDashbard from "./components/SalesTeamDashbard";
import SupportTeamDashboard from "./components/SupportTeamDashboard";
import TechnicalTeamDashboard from "./components/TechnicalTeamDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbboard />} />
        <Route
          path="ClientCustomizationForm"
          element={<ClientCustomizationForm />}
        />
        <Route path="SalesTeamDashbard" element={<SalesTeamDashbard />} />
        <Route path="SupportTeamDashboard" element={<SupportTeamDashboard />} />
        <Route
          path="TechnicalTeamDashboard"
          element={<TechnicalTeamDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
