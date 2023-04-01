import React from "react";

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import "./App.css";
import LoginRegister from "./pages/login_register/LoginRegister";
import Home from "./pages/Home/Home";
import MainPage from "./pages/MainPage/src/MainPage";
import AdminPage from "./pages/Admin page/src/Admin"

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={ <LoginRegister/> } />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/start" element={<MainPage/>} />
        <Route exact path="/Home" element={<AdminPage/>} />
      </Routes>
    </Router>
  );
}

export default App;