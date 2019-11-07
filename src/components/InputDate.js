import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  p {
    font-size: 1.5rem;
  }
  input {
    margin: 1rem 0 2rem 0;
    width: 18rem;
    font-size: 1.8rem;
    padding: 1rem;
    outline: none;
    background: #323330;
    border: 1px solid #f0db4f;
    color: whitesmoke;
    text-transform: uppercase;
  }
`;

const InputDate = ({ handleDateChange, dateQuery }) => {
  return (
    <StyledInput className="input-container">
        <p>
            Choose a date from the dropdown menu below to see a Photo or Video of the Day from NASA:
        </p>
    <input
      className="date-input"
      type="date"
      onChange={handleDateChange}
      value={dateQuery}
    />
    </StyledInput>
  );
};

export default InputDate;