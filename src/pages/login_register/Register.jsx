import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, username, password }),
        };

        fetch("http://143.42.8.211/users", requestOptions)
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    setSuccessMsg("User created successfully!");
                    setErrorMsg("");
                } else {
                    setSuccessMsg("");
                    setErrorMsg("An error occurred. Please try again.");
                }
                return response.json();
            })
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            {successMsg && <p className="success-msg">{successMsg}</p>}
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} id="username" placeholder="Username" />                
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Register</button>
            </form>
            <button
                className="link-btn"
                onClick={() => props.onFormSwitch("login")}
            >
                Already have an account? Login here.
            </button>
        </div>
    );
};
