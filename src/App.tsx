import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./Page";
import { NotFound } from "./Components/List/Projects/NotFound";
import { ConfigProvider } from "antd";
import "./App.css";

function App() {
  return (
    <ConfigProvider wave={{ disabled: true }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
