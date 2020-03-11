import * as React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../Typography';
import { colors } from '../../helpers/colors';

import { JourneyCard } from '../JourneyCard';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: ${colors.recent};
  margin-top: 2rem;
`;

export const Recent: React.FC = () => {
  return (
    <Wrapper>
      <SectionHeader>RECENT</SectionHeader>
      <JourneyCard color={colors.recent} />
    </Wrapper>
  );
};
