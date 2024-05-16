import Wheather from "../components/Weather";

const Country = ({ country }) => {
  const languages =
    country.languages && Object.keys(country.languages).length > 0
      ? country.languages
      : {};
  const capital =
    country.capital && country.capital.length > 0
      ? country.capital[0]
      : "no capital";

  return (
    <div>
      {
        <div>
          <h2> {country.name.common}</h2>
          <br />
          <p>capital: {country.capital} </p>
          <p>area: {country.area} </p>
          <h3>Languages</h3>
          <ul>
            {Object.entries(languages).map(([code, language]) => (
              <li key={code}>
                <strong>{language}</strong>
              </li>
            ))}
          </ul>
        </div>
      }
      <img src={country.flags.png} alt="" />

      <Wheather capital={capital}></Wheather>
    </div>
  );
};

export default Country;
