import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPhoneNumber = (event) => {
    event.preventDefault();
    const phoneObject = {
      name: newName,
    };

    if (persons.find((person) => person.name === newName)) {
      alert( newName +" is already added to phonebook");
    } else {
      setPersons(persons.concat(phoneObject));
      setNewName("");
    }
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhoneNumber}>
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}> {person.name} </li>
        ))}
      </ul>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
