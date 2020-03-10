import * as React from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../Typography';
import { colors } from '../../helpers/colors';

interface ITextInputProps {
  title: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  min-height: 36px;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border: none;
  background: #222222;
  color: white;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: all 180ms ease-in-out;
  &:focus {
    outline: none !important;
    box-shadow: 0 0 0 1px ${colors.journey};
  }
`;

export const TextInput: React.FC<ITextInputProps> = ({ title }) => {
  return (
    <Wrapper>
      <SectionHeader>{title}</SectionHeader>
      <Input />
    </Wrapper>
  );
};
