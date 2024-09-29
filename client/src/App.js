import React, { useState } from "react";
import Navbar from "./components/HOME/Navbar";
import CARSALE from "./components/CARSALE/Nav";
import "./Global.css";
import Login from "./Login";
import Signup from "./Signup";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addcars from "./components/ADD CARS/Addcars";

const App = () => {
  const [showSlider, setShowSlider] = useState(false);

  const toggleSlider = () => {
    setShowSlider(!showSlider); // Toggle slider state
  };

  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route
            path="/"
            element={
              <Login toggleSlider={toggleSlider} showSlider={showSlider} />
            }
          />
          <Route path="/home" element={<Navbar />} />{" "}
          <Route path="/carsale" element={<CARSALE />} />{" "}
          <Route
            path="/signup"
            element={
              <Signup showSlider={showSlider} toggleSlider={toggleSlider} />
            }
          />
          <Route path="/Addcars" element={<Addcars />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
