import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer"; // Add this import
//import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import HomePage from "./components/HomePage";
function App() {
  return (
    <BrowserRouter>
      <HomePage />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} />*/}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
