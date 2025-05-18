import React from "react";

const LoadingScreen = () => {
    return (
        <div className="screen active" style={{ justifyContent: "center" }}>
            <h1
                style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    marginBottom: "40px",
                    fontFamily: "'Source Serif Pro', serif",
                }}
            >
                Getting Your Results...
            </h1>
            <div className="loading">
                <div className="loading-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
            <div className="did-you-know">
                <div className="did-you-know-title">Did you know?</div>
                <div className="did-you-know-text">
                    The city of Vancouver was gifted hundreds of flowering
                    cherry trees from Japan to honour the Japanese Canadian
                    soldiers who served in WW1
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
