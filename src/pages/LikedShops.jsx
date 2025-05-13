import React, { useState } from "react";
import data from "../../liked_items_updated.json";
import { Link } from "react-router-dom";
import "../styles.css";

export default function LikedShops() {
  const [shops, setShops] = useState(data.shops);

  const handleRemove = (indexToRemove) => {
    const updated = shops.filter((_, idx) => idx !== indexToRemove);
    setShops(updated);
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
        <h1>Liked Shops</h1>
        <div className="profile-thumbnail"></div>
      </header>

      {/* MAIN */}
      <main className="liked-list">
        {shops.map((shop, index) => (
          <div
            className="liked-item"
            key={index}
          >
            <img
              src={shop.img}
              alt={shop.name}
              className="liked-img"
            />
            <div className="liked-info">
              <h3>{shop.name}</h3>
              <p>{shop.desc}</p>
            </div>
            <div className="bottom">
              <span>{shop.address}</span>
              <span
                className="material-icons icon"
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
