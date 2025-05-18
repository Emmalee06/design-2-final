import React from "react";
import Button from "./Button";
import Heart from "./Heart";
import "../styles/ResultsScreen.css";

function ResultsScreen({ flower, onReset, onReadMore }) {
    return (
        <div className="screen active">
            <h1 className="results-title">
                Based on your results we recommend:
            </h1>

            <div className="flower-card">
                <img
                    src={flower.image}
                    alt={flower.name}
                    className="flower-image"
                />
                <div className="flower-header">
                    <h2 className="flower-name">{flower.name}</h2>
                    <Heart />
                </div>

                <div className="flower-info">
                    <p className="flower-detail">
                        <strong>Availability:</strong> {flower.availability}
                    </p>
                    <p className="flower-detail">
                        <strong>Best For:</strong> {flower.bestFor}
                    </p>
                    <p className="flower-description">
                        {flower.description.slice(0, 100)}...{" "}
                        <span className="read-more-link" onClick={onReadMore}>
                            Read More
                        </span>
                    </p>
                </div>
            </div>

            <Button onClick={onReset}>Discover More</Button>
        </div>
    );
}

export default ResultsScreen;
