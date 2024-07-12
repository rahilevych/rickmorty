'use client';

import { APIResponse, Character } from '@/models/custom-types';
import React, { useEffect, useState } from 'react';

function Characters() {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const fetchCharactes = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const result = (await res.json()) as APIResponse;
    setCharacters(result.results);
  };
  useEffect(() => {
    fetchCharactes();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {characters &&
        characters.map((character) => {
          return (
            <div key={character.id}>
              <img src={character.image} />
              <p>{character.name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Characters;
