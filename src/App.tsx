import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import logo from './logo.svg';
import './App.css';

const TEST_QUERY = gql`
  {
    stop(id: "HSL:1173434") {
      name
      lat
      lon
    }
  }
`;

export const App = () => {
  const { loading, error, data } = useQuery(TEST_QUERY);

  if (loading) console.log('loading');
  if (error) console.log(error);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
