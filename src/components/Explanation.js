import React from 'react';
import styled from 'styled-components';


const StyledExplanation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    width: 75%;
    line-height: 1.3;
    font-size: 1.6rem;
  }
`;

const Explanation = ({ explanation }) => {
    return (
        <StyledExplanation className="explanation-container">
          <p className="explanation">{explanation}</p>
        </StyledExplanation>
      );
};

export default Explanation;