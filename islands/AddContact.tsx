/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { useState } from 'preact/hooks';

interface AddContactProps {
  addContact: (name: string, email: string, id: string) => void;
}

export default function AddContact({ addContact }: AddContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addContact(name, email, name + email);
        setEmail('');
        setName('');
      }}
    >
      <label htmlFor='name-inp'>Name</label>
      <input
        type='text'
        name='name'
        id='name-inp'
        class={tw`boarder-solid border-2`}
        onKeyUp={(e) => setName((e.target as HTMLInputElement).value)}
        value={name}
      />
      <label htmlFor='email-inp'>Email</label>
      <input
        type='text'
        name='email'
        id='email-inp'
        class={tw`boarder-solid border-2`}
        onKeyUp={(e) => setEmail((e.target as HTMLInputElement).value)}
        value={email}
      />
      <button type='submit' class={tw`boarder-solid border-2`}>
        Add
      </button>
    </form>
  );
}
