import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Daftar from "./components/Daftar";
import Display from "./components/kalkulator/Display";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="kalkulator" element={<Display />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
