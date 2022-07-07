/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { tw } from '@twind';
import Contact from './Contact.tsx';
import AddContact from './AddContact.tsx';
import Search from './Search.tsx';

interface Contact {
  name: string;
  email: string;
  id: string;
}

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState('');

  const addContact = (name: string, email: string, id: string) => {
    setContacts([...contacts, { name, email, id }]);
  };
  const removeContact = (id: string) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div class={tw``}>
      <h1>Contact List</h1>
      <Search setSearch={setSearch} />
      <ul>
        {contacts
          .filter((contact) => {
            if (search === '') {
              return true;
            }
            return (
              contact.name.includes(search) || contact.email.includes(search)
            );
          })
          .map((contact) => (
            <Contact data={contact} removeContact={removeContact} />
          ))}
      </ul>
      <AddContact addContact={addContact} />
    </div>
  );
}
