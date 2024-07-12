'use client';
import React from 'react';

async function Home() {
  await new Promise((resolve) => {
    return setTimeout(resolve, 3000);
  });

  return <div>home</div>;
}

export default Home;
