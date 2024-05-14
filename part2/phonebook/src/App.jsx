import { useEffect, useState } from "react";

import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

import personService from "./services/persons";

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
      personService.create(phoneObject).then((response) => {
        console.log(response);
        setPersons(persons.concat(response));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  useEffect(() => {
    personService.getAll().then((initialPhonebook) => {
      console.log(initialPhonebook);
      setPersons(initialPhonebook);
    });
  }, []);

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

  const deletePerson = (id, name) => {
    return () => {
      if(window.confirm(`Delete ${name} ?`)){
        personService
        .deletePerson(id)
        .then((response) => {
          console.log('DELETE success:', response);
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting person:", error);
        });
      }
    };
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
      <Persons persons={persons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
