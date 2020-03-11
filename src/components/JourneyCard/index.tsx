import * as React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../Typography';
import { colors } from '../../helpers/colors';

interface IJourneyCardProps {
  color: string;
}

const Card = styled.div<{ color: string }>`
  margin-top: 1rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 0.5rem 1fr;
  border-radius: 2px;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.color};
`;

const IconWrapper = styled.div`
  width: 8px;
  height: 100%;
  display: flex;
`;

const Address = styled.p`
  color: ${colors.whiteish};

  &:last-of-type {
    text-align: right;
  }
`;

export const JourneyCard: React.FC<IJourneyCardProps> = ({ color }) => {
  return (
    <Card color={color}>
      <Address>Multahaankuja 8</Address>
      <IconWrapper>
        <svg fill="none" viewBox="0 0 8 12" width="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="m1 11 5-5-5-5" stroke={color} stroke-linecap="round" stroke-width="2" />
        </svg>
      </IconWrapper>
      <Address>Perilänniitty 7</Address>
    </Card>
  );
};
