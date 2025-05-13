import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import LikedFlowers from "./pages/LikedFlowers";
import LikedBouquet from "./pages/LikedBouquet";
import LikedShops from "./pages/LikedShops";
import Settings from "./pages/Settings";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Profile />}
        />
        <Route
          path="/flowers"
          element={<LikedFlowers />}
        />
        <Route
          path="/bouquets"
          element={<LikedBouquet />}
        />
        <Route
          path="/settings"
          element={<Settings />}
        />
        <Route
          path="/shops"
          element={<LikedShops />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
