import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import DashBoard from "./DashBoard";
import ClientCustomizationForm from "./components/ClientCustomizationForm";
import SalesTeamDashboard from "./components/SalesTeamDashboard";
import SupportTeamDashboard from "./components/SupportTeamDashboard";
import TechnicalTeamDashboard from "./components/TechnicalTeamDashboard";
import MainHeader from "./MainHeader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainHeader />}>
      <Route index element={<DashBoard />} />
      <Route
        path="ClientCustomizationForm"
        element={<ClientCustomizationForm />}
      />
      <Route path="SalesTeamDashboard" element={<SalesTeamDashboard />} />
      <Route path="SupportTeamDashboard" element={<SupportTeamDashboard />} />
      <Route
        path="TechnicalTeamDashboard"
        element={<TechnicalTeamDashboard />}
      />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
