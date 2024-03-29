import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import "./login.css"

function LoginRegister() {
    const [currentForm, setCurrentForm] = useState("login");

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };
    return (
        <div className="Login">
            {currentForm === "login" ? (<Login onFormSwitch={toggleForm} />) : (<Register onFormSwitch={toggleForm} />)}
        </div>
    );
}

export default LoginRegister;
