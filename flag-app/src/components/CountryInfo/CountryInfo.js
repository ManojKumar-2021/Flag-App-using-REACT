import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import ('./CountryInfo.css')


const CountryInfo=() =>{
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();

  // fetch data from api when click on img------- code start-------------------------------------

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v2/name/${countryName}`
        );
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCountryByName();
  }, [countryName]);

  // fetch data from api when click on img------- code end-------------------------------------

  return (
    <div className="country_info_wrapper">
      <button>
        <Link to="/">Back</Link>
      </button>

      {country?.map((country, index) => (
        <div className="country_info_container">
          <div className="country_flag_img">
            <img
              className="country_info_img"
              src={country.flags.png}
              alt="country flag"
            />
          </div>
          <div className="country_info">
            <div className="country_info_left_side">
              <h2>{country.name}</h2>
              <h4> Capital:{country.capital}</h4>
              <h4>Currency:{country.currencies[0].name}</h4>
              <h4>Currency Symbol:{country.currencies[0].symbol}</h4>
              <h4>Native Name:{country.nativeName}</h4>
              <h4>Language:{country.languages[0].name}</h4>
              <h4>Population:{country.population}</h4>
              <h4>Region:{country.region}</h4>
              <h4>Area:{country.area}</h4>
              <h4>Calling Codes:{country.callingCodes[0]}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryInfo