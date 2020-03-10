import React from 'react';
import styled from 'styled-components';
import { colors } from '../../helpers/colors';

import { TextInput } from '../TextInput';

const Wrapper = styled.section`
  color: ${colors.journey};
`;

export const Journey = () => {
  return (
    <Wrapper>
      <TextInput title="FROM" />
      <TextInput title="TO" />
    </Wrapper>
  );
};
