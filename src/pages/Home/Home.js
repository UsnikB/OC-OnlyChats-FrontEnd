import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";

function Home() {
    return (
        <div className="App">
          <NavBar />
          <Banner />
        </div>
      );
}

export default Home;
