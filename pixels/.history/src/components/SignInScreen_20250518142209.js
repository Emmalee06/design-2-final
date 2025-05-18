import React, { useState } from "react";
import "../styles/SignInScreen.css";

function SignInScreen({ onClose }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just log the attempt
        console.log("Sign in attempted");
    };

    return (
        <div className="signin-container">
            <div className="signin-header">
                <button className="back-button" onClick={onClose}>
                    ←
                </button>
                <h1>Sign In!</h1>
            </div>

            <div className="logo-container">
                <img
                    src="/logo.png"
                    alt="Bloomguide Logo"
                    className="signin-logo"
                />
            </div>

            <form onSubmit={handleSubmit} className="signin-form">
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="signin-button">
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignInScreen;
