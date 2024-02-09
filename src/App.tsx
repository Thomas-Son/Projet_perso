import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/index"
import Footer from "./Components/Footer/index"

import Home from "./Components/Page/Home/index"
import About from "./Components/Page/About/index"
import Project from "./Components/Page/Project/index"
import Contact from "./Components/Page/Contact/index"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/mes-projets" element={<Project />} />
        <Route path="/me-contacter" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;