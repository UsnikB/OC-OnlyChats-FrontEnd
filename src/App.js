import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginRegister from "./pages/login_register/LoginRegister";
import Home from "./pages/Home/Home";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginRegister />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/start" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
