import React, { useState } from "react";
import data from "../../liked_items_updated.json";
import { Link } from "react-router-dom";
import "../styles.css";

export default function LikedBouquet() {
  const [bouquets, setBouquets] = useState(data.bouquets);

  const handleRemove = (indexToRemove) => {
    const updated = bouquets.filter((_, idx) => idx !== indexToRemove);
    setBouquets(updated);
  };

  return (
    <div>
      {/* HEADER */}
      <header className="sub-header">
        <button
          className="back-btn"
          onClick={() => history.back()}
        >
          <span className="material-icons">arrow_back</span>
        </button>
        <h1>Liked Bouquets</h1>
        <div className="profile-thumbnail"></div>
      </header>

      {/* MAIN */}
      <main className="liked-list">
        {bouquets.map((bq, index) => (
          <div
            className="liked-item"
            key={index}
          >
            <img
              src={bq.img}
              alt={bq.name}
            />
            <div className="info">
              <h3>{bq.name}</h3>
              <p>{bq.desc}</p>
              <p style={{ fontSize: "0.8em", color: "#666" }}>{bq.shop}</p>
            </div>
            <div className="bottom">
              <span className="price">{bq.price}</span>
              <span
                className="icon material-icons"
                onClick={() => handleRemove(index)}
              >
                favorite
              </span>
            </div>
          </div>
        ))}
      </main>

      {/* NAVIGATION BAR */}
      <nav className="bottom-nav">
        <button
          className="nav-item"
          aria-label="Home"
          data-section="home"
        >
          <span className="nav-icon">
            <img
              src="/navBarIcons/home_off.png"
              alt=""
              aria-hidden="true"
            />
          </span>
        </button>
        <button
          className="nav-item"
          aria-label="Search"
          data-section="search"
        >
          <span className="nav-icon">
            <img
              src="/navBarIcons/search_off.png"
              alt=""
              aria-hidden="true"
            />
          </span>
        </button>
        <button
          className="nav-item"
          aria-label="Menu"
          data-section="menu"
        >
          <span className="nav-icon">
            <img
              src="/navBarIcons/list_off.png"
              alt=""
              aria-hidden="true"
            />
          </span>
        </button>
        <Link
          to="/"
          className="nav-item"
          aria-label="Profile"
          data-section="profile"
        >
          <span className="nav-icon">
            <img
              src="/navBarIcons/profile_on.png"
              alt=""
              aria-hidden="true"
            />
          </span>
        </Link>
      </nav>
    </div>
  );
}
