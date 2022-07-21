import React from 'react'
import './HomeAndFavNavBar.css'

function HomeAndFavNavBar() {
  return (
    <div className="nav_container">
      <div className="home_nav_container"></div>
      <a className="home_nav_container_a" href="Flag-App-using-REACT/">
        Home
      </a>

      <div className="fav_nav_container">
        <a className="fav_nav_container_a" href="#/favourite">
          Favourite Country
        </a>
      </div>
    </div>
  );
}

export default HomeAndFavNavBar
