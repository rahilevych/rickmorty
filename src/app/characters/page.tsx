'use client';

import Card from '@/components/Card';
import NavBar from '@/components/NavBar';
import { APIResponse, Character } from '@/models/custom-types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Characters() {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const router = useRouter();

  const fetchCharacters = async (page: number) => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const result = (await res.json()) as APIResponse;
    setCharacters(result.results);
  };
  const handlePrevBtn = () => {
    if (Number(page) != 1) {
      let id = page - 1;
      setPage(id);
      fetchCharacters(id);
      //router.push(`${id}`);
    } else {
      fetchCharacters(page);
    }
  };
  const handleNextBtn = () => {
    let id = Number(page) + 1;
    setPage(id);
    fetchCharacters(id);

    //router.push(`characters/${id}`);
  };
  useEffect(() => {
    fetchCharacters(1);
  }, []);

  return (
    <div className='container my-0 mx-auto'>
      <div className=' flex flex-row  flex-wrap  gap-4 mt-8 justify-center'>
        {characters &&
          characters.map((character) => {
            return (
              <Link href={`/characters/${character.id}`}>
                <Card character={character} />
              </Link>
            );
          })}
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <button onClick={handlePrevBtn}>Prev</button>
        <button onClick={handleNextBtn}>Next</button>
      </div>
    </div>
  );
}

export default Characters;
