import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
// import Favourite from '../Favourite/Favourite';
import ('./CountryInfo.css')


const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();


  // state variable for fav country-------start
  const [favitem, setFavitem] = useState([]);
  // state variable for fav country--------end

  // function for add fav contry to state variable------start
  function addFav() {
    if (!favitem) {
       alert("This country added in favourite country");
    } else {
      var dummydata= [...favitem,country]
       setFavitem(dummydata);
       localStorage.setItem("favCountry", JSON.stringify(favitem));
       alert("when you press one more time 'Add To Favourite' button then This country added in your favourite country if you already press twice time then ignore this alert.")
    }
   
  }

  // console.log(favitem);
  // function for add fav contry to state variable------end
 

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
      <button className="btn">
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
      <div className="favroit_option_btn">
        <button className="btn" onClick={() => addFav()}>
          <h5 className="btnh6">Add To Favourite</h5>
        </button>
        <h4>press two times <span>Add to Favourite button</span> to ensure country is add in favourite list</h4>
      </div>
    </div>
  );
};

export default CountryInfo