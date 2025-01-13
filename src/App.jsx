import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Interpreter from "./pages/Interpreter";
import DocLocator from "./pages/DocLocator";
import Ecomm from "./pages/Ecomm";
import FootGear from "./pages/FootGear";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/interpreter" element={<Interpreter />} />
          <Route path="/doclocator" element={<DocLocator />} />
          <Route path="/ecomm" element={<Ecomm />} />
          <Route path="/footgear" element={<FootGear />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
