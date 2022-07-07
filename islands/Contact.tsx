/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { tw } from '@twind';

interface ContactProps {
  data: {
    name: string;
    email: string;
    id: string;
  };
  removeContact: (id: string) => void;
}

export default function Contact({
  data: { name, email, id },
  removeContact,
}: ContactProps) {
  return (
    <li>
      <span>{name}</span>
      <span>{email}</span>
      <button onClick={() => removeContact(id)}>Delete</button>
    </li>
  );
}
