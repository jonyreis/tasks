import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import Header from "./components/Header/Header";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Entrar from "./pages/Entrar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
