import { useEffect, useState } from "react";

import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(
    "wating for operations ..."
  );
  const [typeMessage, setTypeMessage] = useState("info");

  const addPhoneNumber = (event) => {
    event.preventDefault();
    const phoneObject = {
      name: newName,
      number: newNumber,
    };

    if (personExistByName(newName)) {
      if (
        window.confirm(
          `${newName} is alredy added to phonebook, replace the old number with a new one ?`
        )
      ) {
        const personFind = persons.find((person) => person.name === newName);
        setNotificationMessage(`Update number of ${personFind.name}`);
        setTypeMessage("info");
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
        updateNumber(personFind.id);
      }
    } else {
      personService.create(phoneObject).then((response) => {
        console.log(response);
        setNotificationMessage(`Added ${response.name}`);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
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
      if (window.confirm(`Delete ${name} ?`)) {
        personService
          .deletePerson(id)
          .then((response) => {
            console.log("DELETE success:", response);
            setPersons(persons.filter((person) => person.id !== id));
          })
          .catch((error) => {
            console.error("Error deleting person:", error);
          });
      }
    };
  };

  const updateNumber = (id) => {
    const person = persons.find((p) => p.id === id);
    const changePerson = { ...person, number: newNumber };

    personService
      .update(id, changePerson)
      .then((returnedPerson) => {
        setPersons(
          persons.map((person) => (person.id != id ? person : returnedPerson))
        );
      })
      .catch((error) => {
        setNotificationMessage(
          `Information od ${person.name} has already removed from server`
        );
        setTypeMessage("error");
        setPersons(persons.filter((p) => p.id !== id));
      });
  };

  const personExistByName = (nameUwu) =>
    persons.some((person) => person.name === nameUwu);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={typeMessage} />
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
