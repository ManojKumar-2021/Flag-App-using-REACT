import React from "react";
import { Link } from "react-router-dom";
import "./HomeAndFavNavBar.css";

function HomeAndFavNavBar() {
  return (
    <div className="nav_container">
      <div className="home_nav_container"></div>
      <p className="home_nav_container_a">
        <Link to="/">Home</Link>
      </p>
      <div className="fav_nav_container">
        <p className="fav_nav_container_a" href="#/favourite">
          <Link to="/favourite">Favourite</Link>
        </p>
      </div>
    </div>
  );
}

export default HomeAndFavNavBar;
