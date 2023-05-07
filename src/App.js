import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashbboard from "./Dashbboard";
import ClientCustomizationForm from "./components/ClientCustomizationForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbboard />} />
        <Route
          path="ClientCustomizationForm"
          element={<ClientCustomizationForm />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
