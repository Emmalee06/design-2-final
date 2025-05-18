import React from "react";
import { useRouter } from "next/router";
import "../styles/WelcomeScreen.css";
import Button from "./Button";

function WelcomeScreen({ onStart }) {
    const router = useRouter();

    const handleSignIn = () => {
        router.push("/sign-in-success");
    };

    return (
        <div className="welcome-screen">
            <img
                src="/welcome-screen/lily_valley.svg"
                alt="Decorative lily"
                className="decorative-lily"
            />

            <div className="logo-container">
                <img src="/welcome-screen/logo.svg" alt="Bloomguide Logo" />
            </div>

            <h1 className="welcome-title">
                Your Perfect Bloom, Just One Click Away
            </h1>

            <p className="welcome-subtitle">
                Take our quick quiz to discover your perfect blooms!
            </p>

            <Button onClick={onStart}>Get Started Now</Button>

            <p className="sign-in-text">
                Already have an account?{" "}
                <button onClick={handleSignIn} className="sign-in-link">
                    Sign in!
                </button>
            </p>

            <img
                src="/welcome-screen/leaves.svg"
                alt="Decorative leaves"
                className="decorative-leaves"
            />
        </div>
    );
}

export default WelcomeScreen;
