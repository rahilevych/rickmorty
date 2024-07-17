'use client';
import { APIResponse, Character } from '@/models/custom-types';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function SingleCharacterPage() {
  const { characterName } = useParams();
  const { pageNumber } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [characterNumber, setCharacterNumber] = useState<number>(
    Number(characterName)
  );
  const [number, setNumber] = useState<number>(Number(pageNumber));
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const fetchCharacter = async (id: number) => {
    setLoading(true);
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const result = await res.json();
    setCharacter(result);
    setLoading(false);
  };

  useEffect(() => {
    setCharacterNumber(Number(characterName));
    fetchCharacter(Number(characterName));
  }, []);

  const handlePrevBtn = () => {
    if (Number(characterNumber) != 1) {
      let id = Number(characterNumber) - 1;
      setCharacterNumber(id);
      fetchCharacter(id);
      router.push(`${id}`);
    } else {
      fetchCharacter(characterNumber);
    }
  };

  const handleNextBtn = () => {
    let id = Number(characterNumber) + 1;
    let pgNum = Number(pageNumber) + 1;
    if (id % 20 === 0) {
      pgNum++;
    }
    setNumber(pgNum);
    setCharacterNumber(id);
    fetchCharacter(id);
    router.push(`${id}`);
  };

  return (
    <div className='container flex flex-col justify-center items-center mx-auto my-10 p-4'>
      <div className='flex flex-col items-center border w-full max-w-3xl p-4'>
        {loading ? (
          <div className='flex justify-center items-center h-full'>
            <p>Loading...</p>
          </div>
        ) : (
          <div className='flex flex-row w-full min-h-[300px]'>
            <div className='w-1/2 flex justify-center min-h-full'>
              <img
                src={character?.image}
                alt={character?.name}
                className='rounded-md'
              />
            </div>
            <div className='flex flex-col justify-center items-start w-1/2 h-full p-4 min-h-max'>
              <p className='text-xl font-bold'>{character?.name}</p>
              <p>Gender: {character?.gender}</p>
              <p>Species: {character?.species}</p>
              <p>Status: {character?.status}</p>
            </div>
          </div>
        )}
      </div>
      <div className='flex justify-center gap-7 items-center w-full max-w-3xl mt-4'>
        <button
          onClick={handlePrevBtn}
          className='px-4 py-2 bg-indigo-900 text-white rounded hover:bg-blue-700'>
          Prev
        </button>
        <Link href='/characters/1'>
          <button className='bg-indigo-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out'>
            Back to list
          </button>
        </Link>
        <button
          onClick={handleNextBtn}
          className='px-4 py-2 bg-indigo-900 text-white rounded hover:bg-blue-700'>
          Next
        </button>
      </div>
    </div>
  );
}
