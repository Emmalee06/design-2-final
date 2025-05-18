import React, { useState } from "react";
import Button from "./Button";
import Heart from "./Heart";
import BackButton from "./BackButton";
import "../styles/ReadMoreScreen.css";

// Real Vancouver flower shops with their Google Maps links
const vancouverFlowerShops = [
    {
        name: "Downtown Florist",
        mapsUrl: "https://maps.google.com/?q=Downtown+Florist+Vancouver",
    },
    {
        name: "Floba Flower Boutique",
        mapsUrl: "https://maps.google.com/?q=Floba+Flower+Boutique+Vancouver",
    },
    {
        name: "For You Flower Shop",
        mapsUrl: "https://maps.google.com/?q=For+You+Flower+Shop+Vancouver",
    },
];

function ReadMoreScreen({ flower, onBack, onMoreRecommendations }) {
    const [userRating, setUserRating] = useState(null);

    const handleRating = (rating) => {
        setUserRating(rating);
    };

    const handleShopClick = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="read-more-screen">
            <BackButton onClick={onBack} />
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

                <div className="details-section">
                    <h3>Details</h3>
                    <p>Availability: {flower.availability}</p>
                    <p>Best For: {flower.bestFor}</p>
                    <p>Price Range: ${flower.priceRange}</p>
                </div>

                <div className="description-section">
                    <h3>Description</h3>
                    <p>{flower.description}</p>
                </div>

                <div className="nearby-shops-section">
                    <h3>Nearby Shops</h3>
                    {vancouverFlowerShops.map((shop, index) => (
                        <div
                            key={index}
                            className="shop-item"
                            onClick={() => handleShopClick(shop.mapsUrl)}
                        >
                            <img
                                src="/icons/Location.svg"
                                alt="Location"
                                className="location-icon"
                            />
                            <div className="shop-details">
                                <span className="shop-name">{shop.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="rating-section">
                    <h3>How do you feel about this recommendation?</h3>
                    <p className="rating-subtitle">
                        Leave a rating for more accurate recommendations!
                    </p>
                    <div className="rating-buttons">
                        <button
                            className={`rating-button ${
                                userRating === "bad" ? "selected" : ""
                            }`}
                            onClick={() => handleRating("bad")}
                        >
                            😕
                        </button>
                        <button
                            className={`rating-button ${
                                userRating === "neutral" ? "selected" : ""
                            }`}
                            onClick={() => handleRating("neutral")}
                        >
                            😐
                        </button>
                        <button
                            className={`rating-button ${
                                userRating === "good" ? "selected" : ""
                            }`}
                            onClick={() => handleRating("good")}
                        >
                            😊
                        </button>
                    </div>
                </div>

                <Button onClick={onMoreRecommendations}>Discover More</Button>
            </div>
        </div>
    );
}

export default ReadMoreScreen;
