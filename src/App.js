import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashbboard from "./Dashbboard";
import ClientCustomizeform from "./components/ClientCustomizeform";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbboard />} />
        <Route path="ClientCustomizeform" element={<ClientCustomizeform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
