import React, { useState } from "react";


export default function Country(props) {
    const { country } = props
    const [detail, setDeatil] = useState(false);


    return (
        <div style={{ padding:"25px 0 25px 0" }}>      
            <h3>{country.name}</h3> 
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
        </div>
    );
}
