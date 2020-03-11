import * as React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../Typography';
import { colors } from '../../helpers/colors';

import { JourneyCard } from '../JourneyCard';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: ${colors.favs};
  margin-top: 2rem;
`;

export const Favorites: React.FC = () => {
  return (
    <Wrapper>
      <SectionHeader>FAVORITES</SectionHeader>
      <JourneyCard color={colors.favs} />
    </Wrapper>
  );
};
