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
          <Link href='/'>Home</Link>
        </li>
        <li>
          {' '}
          <Link href='/characters'>Characters</Link>
        </li>
        <li>
          {' '}
          <Link href='/static'>Static</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
