import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import styles from "./App.module.css";

import MainApp from "./components/MainApp";

import Nav from "./components/Nav";
import Fashion from "./pages/Fashion";
import Accessory from "./pages/Accessory";
import Digital from "./pages/Digital";

import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/fashion/*" element={<Fashion />} />
        <Route path="/accessory/*" element={<Accessory />} />
        <Route path="/digital/*" element={<Digital />} />
        <Route path="/fashion/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
