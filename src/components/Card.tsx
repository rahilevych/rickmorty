import { Character } from '@/models/custom-types';
import React, { FC } from 'react';

interface CardProps {
  character: Character;
}
const Card: FC<CardProps> = ({ character }) => {
  return (
    <div className='relative group overflow-hidden rounded-lg shadow-md w-52 h-52'>
      <img
        src={character.image}
        alt={character.name}
        className='w-52 h-52 object-cover transform transition-transform duration-500 group-hover:scale-110'
      />
      <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center'>
        <span className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
          Learn More
        </span>
      </div>
      <p className='text-center mt-2'>{character.name}</p>
    </div>
  );
};
export default Card;
