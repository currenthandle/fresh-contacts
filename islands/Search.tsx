/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { tw } from '@twind';

interface SearchProps {
  setSearch: (search: string) => void;
}

export default function Search({ setSearch }: SearchProps) {
  return (
    <div>
      <input
        type='text'
        class={tw`boarder-solid border-2`}
        onKeyUp={(e) => setSearch((e.target as HTMLInputElement).value)}
      />
    </div>
  );
}
