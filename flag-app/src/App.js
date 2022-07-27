import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Allcountry from "./components/AllCountry/Allcountry";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import HomeAndFavNav from "./components/HomeAndFavNav/HomeAndFavNavBar";
import Favourite from "./components/Favourite/Favourite";
import("./app.css");


function App() {
  return (
    <>
      <h1 className="heading">Countries Information</h1>

      <HashRouter>
        <HomeAndFavNav />
        <Routes>
          <Route path="/" element={<Allcountry />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
