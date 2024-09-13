'use client';
import { Character, Episode } from '@/models/custom-types';
import {
  GETALLEPISODSS1,
  GETALLEPISODSS2,
  GETALLEPISODSS3,
  GETALLEPISODSS4,
  GETALLEPISODSS5,
} from '@/queries/episodes';
import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

export default function AllEpisodes() {
  const [selectedSeason, setSelectedSeason] = useState<string | null>(
    'Season 1'
  );

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeason(event.target.value);
  };

  const getSeason = () => {
    if (selectedSeason === 'Season 1') {
      const { data } = useQuery(GETALLEPISODSS1);
      return data;
    } else if (selectedSeason === 'Season 2') {
      const { data } = useQuery(GETALLEPISODSS2);
      return data;
    } else if (selectedSeason === 'Season 3') {
      const { data } = useQuery(GETALLEPISODSS3);
      return data;
    } else if (selectedSeason === 'Season 4') {
      const { data } = useQuery(GETALLEPISODSS4);
      return data;
    } else if (selectedSeason === 'Season 5') {
      const { data } = useQuery(GETALLEPISODSS5);
      return data;
    } else {
      const { data } = useQuery(GETALLEPISODSS1);
      return data;
    }
  };
  const data = getSeason();

  return (
    <>
      <div className='relative inline-block text-left'>
        <select
          onChange={handleSelect}
          className='block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
          <option>Season 1</option>
          <option>Season 2</option>
          <option>Season 3</option>
          <option>Season 4</option>
          <option>Season 5</option>
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg
            className='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'>
            <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
          </svg>
        </div>
      </div>
      <div className='mt-4'>
        {data && data.episodes.results.length > 0 ? (
          <table className='min-w-full bg-white border border-gray-300'>
            <thead>
              <tr>
                <th className='py-2 px-4 border-b'>ID</th>
                <th className='py-2 px-4 border-b'>Episode name</th>
                <th className='py-2 px-4 border-b'>Characters</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.episodes.results.map((episode: Episode) => (
                  <tr key={episode.id}>
                    <td className='py-2 px-4 border-b'>{episode.id}</td>
                    <td className='py-2 px-4 border-b'>{episode.name}</td>
                    <td className='py-2 px-4 border-b flex flex-row flex-wrap'>
                      {episode.characters.map((character: Character) => {
                        return (
                          <img
                            className='w-14 h-14'
                            src={character.image}
                            alt=''
                          />
                        );
                      })}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <p>No episodes found</p>
        )}
      </div>
    </>
  );
}
