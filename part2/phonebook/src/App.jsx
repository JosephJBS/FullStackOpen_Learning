import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  const addPhoneNumber = (event) => {
    event.preventDefault();
    const phoneObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.find((person) => person.name === newName)) {
      alert(newName + " is already added to phonebook");
    } else {
      setPersons(persons.concat(phoneObject));
      setNewName("");
      setNewNumber("");
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

  const handleSearchNameChange = (event) => {
    console.log(event.target.value);
    setSearchName(event.target.value);
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        persons={persons}
        searchName={searchName}
        handleSearchNameChange={handleSearchNameChange}
      />

      <h2>Add a new number</h2>
      <PersonForm
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        addPhoneNumber={addPhoneNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}

      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
