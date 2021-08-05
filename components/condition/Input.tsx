import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.input`
  width: 80px;
  max-height: 38px;
  border-radius: 4px;
  outline: none;
  border: 1px solid ${oc.gray[5]};
`;

interface Props {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ name, value, onChange }) => {
  return (
    <Container
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={name[0].toUpperCase() + name.slice(1)}
    />
  );
};

export default Input;
