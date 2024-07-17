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
  // try {
  const response = await fetch(
    'https://rickandmortyapi.com/graphql',
    requestOptions
  );
  const result = await response.json();
  console.log('result is : ', result);
  //console.log(response);
  // } catch (error) {
  //   console.log(error);
  // }
  //};
  // fetchData();
  return <div>Episodes</div>;
}
