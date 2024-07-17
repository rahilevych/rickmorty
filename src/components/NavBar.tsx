'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function NavBar() {
  const path = usePathname();
  console.log(path);
  return (
    <nav className=' bg-indigo-900 h-20'>
      <ul className='flex flex-row justify-evenly items-center h-full'>
        <li>
          <Link href='/' className='text-white hover:text-blue-500'>
            Home
          </Link>
        </li>
        <li>
          {' '}
          <Link href='/characters/1' className='text-white hover:text-blue-500'>
            Characters
          </Link>
        </li>
        <li>
          {' '}
          <Link
            href='/allEpisodesCC'
            className='text-white hover:text-blue-500'>
            Episodes
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
