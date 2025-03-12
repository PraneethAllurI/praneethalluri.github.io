import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Ensure global styles are applied
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperience"
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/workexperience" element={<WorkExperience />} />
          </Routes>
        </div>
        <Footer /> {/* Renders at the bottom */}
      </div>
    </Router>
  );
};

export default App;
