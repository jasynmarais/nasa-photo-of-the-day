import React from 'react';

export const InputDate = ({ handleDateChange, dateQuery }) => {
  return (
    <input
      className="date-input"
      type="date"
      onChange={handleDateChange}
      value={dateQuery}
    />
  );
};