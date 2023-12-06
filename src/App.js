import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import Protectedroute from "./components/Protectedroute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/success" element={<Success />} /> */}
        <Route
          path="/success"
          element={<Protectedroute element={<Success />} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
