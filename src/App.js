import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
//import Countries from "./Countries"
import Country from "./Country"
import fetchCountries from "./FetchCountries";


export default function App() {
  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [detail, setDeatil] = useState(false);

  
  // const fetchCountries = async () => {
  //   await axios
  //     .get("https://restcountries.eu/rest/v2/all")
  //     .then(response => {
  //       setCountries(response.data)
  //        setLoaded(true)
  //       })
  //     .catch(error => { 
  //       console.log({ error });
  //       setLoaded(false);
  //     });
  // }

  const fetchCountries = async () =>{
    const url = "https://restcountries.eu/rest/v2/all";
    const res = await axios.get(url);
    setCountries(res.data)
    setLoaded(true)
  }

  useEffect(() => {
    // axios
    //   .get("https://restcountries.eu/rest/v2/all")
    //   .then(response => {
    //     setCountries(response.data)
    //      setLoaded(true)
    //   })
    //   .catch(error => 
    //     console.log({ error })
    //   );

  fetchCountries();

    // fetchCountries().then(countries => {
    //   setCountries(countries)
    //   setLoaded(true)
    // })

  }, []);



  return (
    <div className="App">
      <h1 className="title"> 
        <img 
          src="https://avatars3.githubusercontent.com/u/60869810?v=4" 
          alt="react-logo" 
          style={{ width: "20px", padding:"0 10px 0 0" }}
        />
        Countries
      </h1>
 {/* <Countries />  */}


      { loaded ? ( <div> 
      { countries && countries.map(country => ( 
        
        <div>
          <Country  country={country}/> 
           {/* <h3>{country.name}</h3> 
            { !detail && <button onClick={() => setDeatil(true)}>Detail show</button> }
            { detail && <button onClick={() => setDeatil(false)}>Detail hide</button> }
            { detail && 
                <div>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p> 
                    <p>Native Name: {country.nativeName}</p> 
                    <p>Calling Codes: {country.callingCodes}</p> 
                </div>
            }
            <p>
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: "100px" }}
              />
            </p>
         */}
        
        </div>
        
        )
      )}
    </div>
    ) : ( <p>loading...
          {/* <img 
            src= "https://media.giphy.com/media/y1ZBcOGOOtlpC/source.gif" 
            alt="imgLoading"       
          /> */}
        </p>)
      }
    </div>
  );
}
