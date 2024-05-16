import { useState, useEffect } from "react";
import countryService from "./services/countries";
import Country from "./components/Country";
import CountryInfo from "./components/CountryInfo";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesFound, setCountriesFound] = useState([]);

  const [countrySearch, setCountrySearch] = useState("");
  const [showCountries, setShowCountries] = useState([]);

  useEffect(() => {
    countryService.getAll().then((countries) => {
      console.log("respuesta apps: ", countries);
      setCountries(countries);
    });
  }, []);

  useEffect(() => {
    console.log("countriesFound actualizados: ", countriesFound);
    setShowCountries(countriesFound);
  }, [countriesFound]);

  useEffect(() => {
    console.log("countriesShow actualizados: ", showCountries);
    
  }, [showCountries]);

  const searchCountryFun = (text) => {
    const paisesCoincidentes = countries.filter((country) => {
      const nombreComun = country.name.common.toLowerCase();
      return nombreComun.startsWith(text.toLowerCase());
    });
    setCountriesFound(paisesCoincidentes);
  };

  const handleNoteChange = (event) => {
    console.log("buscar: ", event.target.value);
    setCountrySearch(event.target.value);
    searchCountryFun(event.target.value);
  };

  const showButtonOnclick = (countryName) => {
    console.log("uwu");
    countryService.getCountryByName(countryName).then((country) => {
      setShowCountries([country]);
      console.log(country);
    });
  };

  return (
    <div>
      <div>
        <p>
          find countries :{" "}
          <input value={countrySearch} onChange={handleNoteChange} />
        </p>
        {showCountries.length > 10 || showCountries.length === 0 ? (
          <p>Too many matches, specify another filter</p>
        ) : showCountries.length === 1 ? (
          showCountries.map((country) => (
            <Country country={country} key={country.name.common}></Country>
          ))
        ) : (
          showCountries.map((country) => (
            <CountryInfo
              key={country.name.common}
              country={country}
              showOnClikc={() => showButtonOnclick(country.name.common)}
            ></CountryInfo>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
