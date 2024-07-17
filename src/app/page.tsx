import NavBar from '@/components/NavBar';
import React from 'react';

async function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <h1 className='text-4xl font-bold mb-4'>Home Page</h1>
      <div className='space-y-4'>
        <p>
          I'm learning about rendering styles in Next.js - this page was
          Statically Rendered by default.
        </p>
        <p>
          The Characters page is rendered Server-Side and shows a list of Rick
          and Morty characters. From there, you can click each character to
          follow a Statically-Generated path, and visit Character page rendering
          with Static-Site-Generation. I've fetched the data for these pages
          from a REST API.
        </p>
        <p>
          The Episodes page is rendered Client-Side. I've used a filtered
          GraphQL query to fetch the data. Here is a good article to help you
          use Graph QL together with the Fetch API.
        </p>
      </div>
    </div>
  );
}

export default Home;
