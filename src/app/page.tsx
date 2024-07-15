'use client';
import NavBar from '@/components/NavBar';
import React from 'react';

async function Home() {
  await new Promise((resolve) => {
    return setTimeout(resolve, 3000);
  });

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
