import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Allcountry from "./components/AllCountry/Allcountry";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import("./app.css");

function App() {
  return (
    <>
      <h1 className="heading">Countries Information</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Allcountry />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
