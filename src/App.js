import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashbboard from "./Dashbboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
