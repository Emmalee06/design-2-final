import React, { useState } from "react";
import "../styles/App.css";
import flowerData from "../data/flowers.json";
import LoadingScreen from "./LoadingScreen";

function App() {
    const [selectedSeason, setSelectedSeason] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [recommendations, setRecommendations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSeasonChange = (event) => {
        setSelectedSeason(event.target.value);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const getRecommendations = () => {
        setIsLoading(true);
        setTimeout(() => {
            const filteredFlowers = flowerData.filter((flower) => {
                return (
                    (!selectedSeason || flower.season === selectedSeason) &&
                    (!selectedColor || flower.color === selectedColor)
                );
            });
            setRecommendations(filteredFlowers);
            setIsLoading(false);
        }, 1500);
    };

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Flower Recommendations</h1>
            </header>
            <main>
                <div className="filters">
                    <select
                        value={selectedSeason}
                        onChange={handleSeasonChange}
                    >
                        <option value="">Select Season</option>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                        <option value="winter">Winter</option>
                    </select>
                    <select value={selectedColor} onChange={handleColorChange}>
                        <option value="">Select Color</option>
                        <option value="red">Red</option>
                        <option value="pink">Pink</option>
                        <option value="yellow">Yellow</option>
                        <option value="white">White</option>
                        <option value="purple">Purple</option>
                    </select>
                    <button onClick={getRecommendations}>
                        Get Recommendations
                    </button>
                </div>
                <div className="recommendations">
                    {recommendations.map((flower, index) => (
                        <div key={index} className="flower-card">
                            <h3>{flower.name}</h3>
                            <p>Season: {flower.season}</p>
                            <p>Color: {flower.color}</p>
                            <p>{flower.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
