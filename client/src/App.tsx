import { BrowserRouter, Routes, Route } from "react-router-dom";

import HOC from "./Components/HOC/index";

import Header from "./Components/Header/index"
import Footer from "./Components/Footer/index"

import Home from "./Components/Page/Home/index"
import About from "./Components/Page/About/index"
import Project from "./Components/Page/Project/index"
import Contact from "./Components/Page/Contact/index"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HOC child={Home} />} />
        <Route path="/a-propos" element={<HOC child={About} />} />
        <Route path="/mes-projets" element={<HOC child={Project} />} />
        <Route path="/me-contacter" element={<HOC child={Contact} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;