import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrolltoTop from "./components/ScrolltoTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrolltoTop />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
      </Routes>
      <Project />
      <Footer />
    </Router>
  );
}

export default App;
