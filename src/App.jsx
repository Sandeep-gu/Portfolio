import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import About from "./containers/about";
import Portfolio from "./containers/portfolio";
import NavBar from "./components/navBar";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import particles from "./utils/particles";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const renderParticleJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/* background particles */}
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={particlesInit} />
      )}
      {/* Navbar */}
      <NavBar />
      <div className="App_main_page">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
