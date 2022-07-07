/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import ContactList from '../islands/ContactList.tsx';

export default function Home() {
  return (
    <div class={tw``}>
      <ContactList />
    </div>
  );
}
