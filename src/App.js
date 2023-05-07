import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashbboard from "./Dashbboard";
import ClientCustomizationForm from "./components/ClientCustomizationForm";
import SalesTeamDashboard from "./components/SalesTeamDashboard";
import SupportTeamDashboard from "./components/SupportTeamDashboard";
import TechnicalTeamDashboard from "./components/TechnicalTeamDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbboard />}>
          <Route
            path="ClientCustomizationForm"
            element={<ClientCustomizationForm />}
          />
          <Route path="SalesTeamDashboard" element={<SalesTeamDashboard />} />
          <Route
            path="SupportTeamDashboard"
            element={<SupportTeamDashboard />}
          />
          <Route
            path="TechnicalTeamDashboard"
            element={<TechnicalTeamDashboard />}
          />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
