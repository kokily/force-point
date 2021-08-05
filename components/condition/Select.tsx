import React from 'react';
import styled from 'styled-components';
import SelectComponent from 'react-select';
import makeAnimated from 'react-select/animated';
import useSelect from './hooks/useSelect';

// Styles
const Container = styled.div`
  display: flex;
  margin-right: 0.5rem;

  .select {
    min-width: 140px;
  }

  .css-1rhbuit-multiValue {
    display: none !important;
  }
`;

const animatedComponents = makeAnimated();

interface Props {}

const Select: React.FC<Props> = () => {
  const { options, onChange, menu } = useSelect();

  return (
    <Container>
      <SelectComponent
        className="select"
        components={animatedComponents}
        value={options.filter((ob) => menu.menu.includes(ob.value))}
        options={options}
        onChange={onChange}
        isMulti
        placeholder="Search"
        closeMenuOnSelect={true}
      />
    </Container>
  );
};

export default Select;
