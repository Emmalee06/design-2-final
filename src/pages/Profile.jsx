import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Profile() {
  return (
    <div>
      {/* HEADER */}
      <header className="app-header">
        <div className="header-content">
          <div className="header-content-main">
            <div>
              <button className="profile-btn">
                <img
                  className="profile-img"
                  src="/imgs/profile.png"
                  alt="Profile"
                />
              </button>
            </div>
            <div className="greeting">
              <p>Good morning,</p>
              <h1>Liam Carter</h1>
            </div>
          </div>
          <div className="settings-btn-div">
            <Link
              to="/settings"
              className="settings-btn"
            >
              <img
                src="/imgs/settingIcon.png"
                alt="Settings"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>
        <div className="yourSavedList">
          <p>Your saved list</p>
        </div>

        <div className="cards">
          <Link
            to="/flowers"
            className="card-button"
          >
            <div className="card-label">Liked Flowers</div>
            <img
              src="/imgs/card1.png"
              alt="Liked Flowers"
            />
          </Link>

          <Link
            to="/bouquets"
            className="card-button"
          >
            <div className="card-label">Liked Bouquet</div>
            <img
              src="/imgs/card2.png"
              alt="Liked Bouquet"
            />
          </Link>

          <Link
            to="/shops"
            className="card-button"
          >
            <div className="card-label">Liked Shops</div>
            <img
              src="/imgs/card3.png"
              alt="Liked Shops"
            />
          </Link>

          <div className="card-button add">
            <span>+</span>
          </div>
        </div>
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
        <button
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
        </button>
      </nav>
    </div>
  );
}
