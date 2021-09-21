import React from 'react';
import "./Country.css"

const Country = (props) => {
    const { name, capital, population, region, flag } = props.country;
    return (
        <div className="country">

            {/* <h1>Name: {name}</h1>
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <img src={flag} alt="" /> */}
            <img src={flag} alt="" />
            <h1>{name}</h1>
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <h3>Region: {region}</h3>
        </div>
    );
};


export default Country;