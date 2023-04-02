import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username, password: password }),
        };

        fetch("http://143.42.8.211/login", requestOptions)
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    setSuccessMsg("Logged In successfully");
                    setErrorMsg("");
                    
                } else {
                    setSuccessMsg("");
                    setErrorMsg("Login Failed, username or password incorrect");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data)
                document.cookie = `access_token=${data.access_token}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
                document.cookie = `current_user=${data.current_user}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
                navigate('/');
            })
            // .then((data) => {
            //     const accessToken = data.access_token;
            //     document.cookie = `access_token=${accessToken}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
            //   })
            .catch((error) => console.log(error));
    };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="yourusername" id="username" name="username" />
                {/* <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" /> */}
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here.</button>
            {successMsg && <p>{successMsg}</p>}
            {errorMsg && <p>{errorMsg}</p>}
        </div>
    );
};
