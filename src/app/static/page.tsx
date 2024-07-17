import { APIResponse, Character } from '@/models/custom-types';
import React from 'react';

export default async function Static() {
  const res = await fetch('https://rickandmortyapi.com/api/character/2');
  const result: Character = await res.json();
  return (
    <div>
      <h2>name:{result.name}</h2>
      <img src={result.image} alt='' />
    </div>
  );
}
