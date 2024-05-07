const Filter = ({persons, searchName, setSearchName}) => {
  const handleSearchNameChange = (event) => {
    console.log(event.target.value);
    setSearchName(event.target.value);
  };

  return (
    <div>
      <p>Filter show with</p>{" "}
      <input value={searchName} onChange={handleSearchNameChange}></input>
      {persons
        .filter(
          (person) => person.name.toLowerCase() === searchName.toLowerCase()
        )
        .map((person) => (
          <p key={person.id}>
            {" "}
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

export default Filter;
