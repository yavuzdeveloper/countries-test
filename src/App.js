import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Country from "./Country"


export default function App() {
  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
         setLoaded(true)
      })
      .catch(error => 
        console.log({ error })
      );
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
      { loaded ? ( <div> 
      { countries && countries.map(country => ( 
        <div>
          <Country  country={country}/> 
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
