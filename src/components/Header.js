import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  margin-bottom: 2rem;
  background-color: #f0db4f;
  h1 {
    margin: 0;
    padding: 1rem 0;
    color: black;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>NASA Photo or Video of the Day</h1>
    </StyledHeader>
  );
};

export default Header;