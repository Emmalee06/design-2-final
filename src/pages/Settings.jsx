import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Settings() {
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
        <h1>Settings</h1>
        <div className="profile-thumbnail"></div>
      </header>

      {/* MAIN */}
      <main className="settings-section">
        {/* Box 1 */}
        <div className="settings-box">
          <div className="setting-item">
            <span>
              <span className="material-icons">person</span>Profile
            </span>
            <span className="material-icons">chevron_right</span>
          </div>
          <div className="setting-item">
            <span>
              <span className="material-icons">badge</span>Account information
            </span>
            <span className="material-icons">chevron_right</span>
          </div>
        </div>

        {/* Box 2 */}
        <div className="settings-box">
          <div className="setting-item">
            <span>
              <span className="material-icons">accessibility</span>Accessibility
            </span>
            <span className="material-icons">chevron_right</span>
          </div>
          <div className="setting-item">
            <span>
              <span className="material-icons">notifications</span>Notification
            </span>
            <span className="material-icons">chevron_right</span>
          </div>
          <div className="setting-item">
            <span>
              <span className="material-icons">language</span>Region
            </span>
            <span className="material-icons">chevron_right</span>
          </div>
          <div className="setting-item">
            <span>
              <span className="material-icons">translate</span>Language
            </span>
            <span className="material-icons">chevron_right</span>
          </div>
          <div className="setting-item">
            <span>
              <span className="material-icons">apps</span>System
            </span>
            <span className="material-icons">chevron_right</span>
          </div>
        </div>

        {/* Box 3 */}
        <div className="settings-box">
          <div className="setting-item">
            <span>
              <span className="material-icons">security</span>Privacy policy
            </span>
            <span className="material-icons">chevron_right</span>
          </div>
          <div className="setting-item">
            <span>
              <span className="material-icons">local_florist</span>About us
            </span>
            <span className="material-icons">chevron_right</span>
          </div>
          <div className="setting-item">
            <span>
              <span className="material-icons">campaign</span>Announcements
            </span>
            <span className="material-icons">chevron_right</span>
          </div>
          <div className="setting-item">
            <span>
              <span className="material-icons">headset_mic</span>Support
            </span>
            <span className="material-icons">chevron_right</span>
          </div>
        </div>

        {/* Sign out */}
        <div className="sign-out">Sign out</div>
      </main>

      {/* NAVIGATION */}
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
          className="nav-item"
          aria-label="Profile"
          to="/"
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
