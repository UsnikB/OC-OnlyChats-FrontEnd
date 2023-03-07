import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";
import LoginRegister from "./pages/login_register/LoginRegister";
import Home from "./pages/Home/Home";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={ <LoginRegister/> } />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;