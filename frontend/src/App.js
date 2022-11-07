import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUsPage";
import Index from "./Pages/IndexPage";
import ContactUs from "./Pages/ContactUsPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;