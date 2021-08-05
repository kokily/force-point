import React from 'react';
import styled from 'styled-components';
import Progressive from './Progressive';

// Styles
const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

interface Props {}

const PageTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Progressive />
      <Main>{children}</Main>
    </>
  );
};

export default PageTemplate;
