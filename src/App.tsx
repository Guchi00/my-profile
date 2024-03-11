import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
