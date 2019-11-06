import React from 'react';
export const Explanation = ({ explanation }) => {
    return (
        <div className="explanation-container">
          <p className="explanation">{explanation}</p>
        </div>
      );
};