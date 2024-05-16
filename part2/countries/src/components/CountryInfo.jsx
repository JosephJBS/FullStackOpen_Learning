const CountryInfo = ({ country , showOnClikc}) => {
  return (
    <div>
      <h3> {country.name.common} <button onClick={showOnClikc}>show</button> </h3> 
      
    </div>
  );
};

export default CountryInfo;
