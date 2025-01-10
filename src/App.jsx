import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Interpreter from "./pages/Interpreter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/interpreter" element={<Interpreter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
