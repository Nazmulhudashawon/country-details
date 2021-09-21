import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setcountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all').then(res => res.json()).then(data => setcountries(data));
    }, [])
    return (
        <div className="body">
            <h1 className="cd">250 Country Details</h1>
            <div className="container" >
                {
                    countries.map(country => <Country key={country.numericCode} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;