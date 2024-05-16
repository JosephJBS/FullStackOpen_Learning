const Country = ({ country }) => {
  const languages = country.languages;
  return (
    <div>
      {
        <div>
          <h2> {country.name.common}</h2>
          <br />
          <p>capital: {country.capital} </p>
          <p>area: {country.area} </p>
          <h3>languages</h3>
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
    </div>
  );
};

export default Country;
