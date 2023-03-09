import React from "react";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import Nav from "../../components/nav/Nav";
import ChatBody from "../../components/chatBody/ChatBody";
import { Hr } from "react-bootstrap-icons";

function MainPage() {
  return (
    <div className="App">
      <Nav />
      <ChatBody />
    </div>
  );
}

export default MainPage;
