import React from "react";
import "../styles/Button.css";

function Button({ onClick, children, fullWidth = true, className = "" }) {
    return (
        <button
            className={`custom-button ${
                fullWidth ? "full-width" : ""
            } ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
