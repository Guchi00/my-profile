import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Page";
import "./App.css";
import { Experience } from "./Components/List/Experience/Experience";
import { AboutMe } from "./Components/List/About";
import { Projects } from "./Components/List";
import { Education } from "./Components/List/Education";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} /> */}
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
