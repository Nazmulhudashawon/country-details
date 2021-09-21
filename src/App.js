// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>


    </div>
  );
}
// function Countries() {
//   const [countries, setcountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.eu/rest/v2/all').then(res => res.json()).then(data => setcountries(data));
//   }, [])
//   return (<div>
//     <h1>country Name</h1>
//     {
//       countries.map(country => <DisplayCountry name={country.name} capital={country.capital} img={country.flag} ></DisplayCountry>)
//     }
//   </div>
//   )
// };
// function DisplayCountry(props) {
//   return (
//     <div className="country">
//       <h1>Name : {props.name}</h1>
//       <h4>Capital : {props.capital}</h4>
//       <img src="{props.img}" alt="" />
//     </div>
//   )
// }

export default App;
