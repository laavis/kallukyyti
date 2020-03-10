import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Header } from './components/Header';
import { Journey } from './components/Journey';

import { colors } from './helpers/colors';

const Wrapper = styled.div`
  background: ${colors.background};
  height: 100vh;
`;

const Main = styled.main`
  padding: 1.5rem;
`;

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
    <Wrapper className="App">
      <Header />
      <Main>
        <Journey />
      </Main>
    </Wrapper>
  );
};

export default App;
