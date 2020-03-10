import * as React from 'react';
import styled from 'styled-components';
import { Title } from '../Typography';

const Container = styled.header`
  padding: 1rem;
  text-align: center;
`;

export const Header = () => {
  return (
    <Container>
      <Title>KALLUKYYTI</Title>
    </Container>
  );
};
