import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SwitchBWContinents from "../SwitchBWContinents/SwitchBWContinents";
import("./AllCountry.css");

function Allcountry() {
  // state variable -------start-----------------------
  const [countries, setCountries] = useState([]);
  // state variable -------end-----------------------

  // fetch all data from api ------- code start-------------------------------------
  const getAllCountryData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v2/all");
      const data = await res.json();
      setCountries(data);
      // console.log(data);
      // console.log(data[0]);
      // console.log(data[0].currencies);
      // console.log(data[0].currencies[0]);
      // console.log(data.currencies[0].name);
    } catch (error) {
      console.log(error.message);
    }
  };
  // fetch all data from api ------- code end-------------------------------------

  // fetch data by Region from api ------- code start-------------------------------------
  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v2/region/${regionName}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  // fetch data by Region from api ------- code end-------------------------------------

  // load all data on home page-------- code start---------------------------------------
  useEffect(() => {
    getAllCountryData();
  }, []);
  // load all data on home page ---------code end-----------------------------------------

  return (
    <div className="container">
      <div className="continentsOption">
        <SwitchBWContinents onSelect={getCountryByRegion} />
      </div>
      <div className="all_country_wrapper">
        {countries?.map((country) => (
          <Link className="link" to={`/country/${country.name}`}>
            <div className="country_card">
              <div className="country_flag">
                <img src={country.flags.png} alt="country flag" />
              </div>
              <div className="countryData">
                <h4 className="countryName">{country.name}</h4>
                <h6>
                  Capital:<span>{country.capital}</span>
                </h6>
                <h6>
                  {/* Currency:<span>{country.currencies[0].name}</span> */}
                </h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Allcountry;
