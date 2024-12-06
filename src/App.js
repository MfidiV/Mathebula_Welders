// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "../src/Components/Navbar/navbar";
import Home from "../src/Components/Home/Home";
import AboutUs from "../src/Components/About/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
    </div>
  );
}

export default App;
