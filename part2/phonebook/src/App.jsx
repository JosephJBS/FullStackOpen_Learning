import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "54564515651" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPhoneNumber = (event) => {
    event.preventDefault();
    const phoneObject = {
      name: newName,
      number: newNumber
    };

    if (persons.find((person) => person.name === newName)) {
      alert( newName +" is already added to phonebook");
    } else {
      setPersons(persons.concat(phoneObject));
      setNewName("");
      setNewNumber("")
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPhoneNumber}>
        <div>
          name: <input value={newName} onChange={handleNameChange} /> <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

        {persons.map((person) => (
          <p key={person.name}> {person.name} {person.number}</p>
        ))}

      <div>debug name : {newName}</div>
      <div>debug number : {newNumber}</div>
    </div>
  );
};

export default App;
