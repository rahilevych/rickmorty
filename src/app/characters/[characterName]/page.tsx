'use client';
import { APIResponse, Character } from '@/models/custom-types';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function SingleChracterPage() {
  const { characterName } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [characterNumber, setCharacterNumber] = useState<number>(
    Number(characterName)
  );
  const router = useRouter();

  const fetchCharacter = async (id: number) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const result = await res.json();

    setCharacter(result);
  };
  useEffect(() => {
    setCharacterNumber(Number(characterNumber));
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
    setCharacterNumber(id);
    fetchCharacter(id);

    router.push(`${id}`);
  };

  return (
    <div className='container flex flex-col justify-center items-center w-3/5'>
      <div className=' flex flex-row border w-full h-full '>
        <div className='w-full h-full'>
          {' '}
          <img src={character?.image} alt='' />
        </div>
        <div className='flex flex-col justify-center items-start w-full h-full'>
          <p>{character?.name}</p>
          <p>Gender:{character?.gender}</p>
          <p>Species:{character?.species}</p>
          <p>Status:{character?.status}</p>
          {/* <p>Origin:{character?.origin}</p> */}
          {/* <p>Appears in{character?.episode}episode</p> */}
        </div>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <button onClick={handlePrevBtn}>Prev</button>
        <button onClick={handleNextBtn}>Next</button>
      </div>
    </div>
  );
}
