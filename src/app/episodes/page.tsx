import React from 'react';

export default async function Episodes() {
  // const fetchData = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const graphql = JSON.stringify({
    query:
      'query{episodes{\r\n    results{\r\n        episode\r\n    }\r\n}\r\n}\r\n   \r\n',
    variables: {},
  });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: graphql,
  };

  const response = await fetch(
    'https://rickandmortyapi.com/graphql',
    requestOptions
  );
  const result = await response.json();
  console.log('result is : ', result);

  return <div>Episodes</div>;
}
