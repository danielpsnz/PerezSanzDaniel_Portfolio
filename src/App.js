import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
