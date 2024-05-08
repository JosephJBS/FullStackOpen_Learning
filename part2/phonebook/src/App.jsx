import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
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

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

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
