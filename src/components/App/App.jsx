import "./App.css";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContactsList = localStorage.getItem("savedContacts");
    if (savedContactsList !== null) {
      return JSON.parse(savedContactsList);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContList) => {
      return [...prevContList, newContact];
    });
    console.log(newContact);
  };

  const handleDelete = (contactId) => {
    setContacts((prevContList) => {
      return prevContList.filter((contact) => contact.id !== contactId);
    });
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
