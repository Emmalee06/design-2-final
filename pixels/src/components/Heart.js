import React, { useState } from "react";
import "../styles/Heart.css";

function Heart() {
    const [isLiked, setIsLiked] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        const newLikedState = !isLiked;
        setIsLiked(newLikedState);
        setShowSnackbar(true);
        setTimeout(() => {
            setShowSnackbar(false);
        }, 3000); // Hide snackbar after 3 seconds
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="heart-container">
            <button
                className="heart-button"
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-label={isLiked ? "Unlike" : "Like"}
            >
                <svg
                    className={`heart-svg ${isLiked ? "liked" : ""} ${
                        isHovered ? "hovered" : ""
                    }`}
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </button>
            {showSnackbar && (
                <div className="snackbar">
                    {isLiked ? "Saved to profile" : "Removed from profile"}
                </div>
            )}
        </div>
    );
}

export default Heart;
