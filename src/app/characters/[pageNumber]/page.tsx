'use client';

import Card from '@/components/Card';
import { APIResponse, Character } from '@/models/custom-types';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Characters() {
  const { pageNumber } = useParams();
  const { characterName } = useParams();

  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [page, setPage] = useState<number>(Number(pageNumber));

  const router = useRouter();
  console.log('page from characters', page);
  const fetchCharacters = async (page: number) => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const result = (await res.json()) as APIResponse;
    setCharacters(result.results);
  };
  const handlePrevBtn = () => {
    if (page != 1) {
      let pageNum = page - 1;
      setPage(pageNum);

      fetchCharacters(pageNum);

      router.push(`${pageNum}`);
    } else {
      fetchCharacters(page);
    }
  };
  const handleNextBtn = () => {
    let pageNum = page + 1;
    console.log('pageNum', pageNum);
    setPage(pageNum);
    fetchCharacters(pageNum);
    router.push(`${pageNum}`);
  };

  useEffect(() => {
    fetchCharacters(page);
  }, []);

  return (
    <div className='container my-0 mx-auto'>
      <div className='flex flex-row flex-wrap gap-4 mt-8 justify-center'>
        {characters &&
          characters.map((character) => {
            return (
              <Link key={character.id} href={`${page}/${character.id}`}>
                <Card character={character} />
              </Link>
            );
          })}
      </div>
      <div className='flex flex-row justify-between items-center w-full mt-4'>
        <button
          onClick={handlePrevBtn}
          className='bg-indigo-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out'>
          Prev
        </button>
        <button
          onClick={handleNextBtn}
          className='bg-indigo-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out'>
          Next
        </button>
      </div>
    </div>
  );
}

export default Characters;
