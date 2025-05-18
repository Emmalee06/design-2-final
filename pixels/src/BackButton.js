import React from "react";
import "../styles/BackButton.css";

function BackButton({ onClick }) {
    return (
        <button className="styled-back-button" onClick={onClick}>
            <img src="/icons/arrow.svg" alt="Back" className="back-arrow" />
        </button>
    );
}

export default BackButton;
