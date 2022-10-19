import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;