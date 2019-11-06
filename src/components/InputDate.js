import React from 'react';

export const InputDate = ({ handleDateChange, dateQuery }) => {
  return (
    <div className="input-container">
        <p>
            Choose a date from the dropdown menu below to see a NASA Photo or Video of the Day:
        </p>
    <input
      className="date-input"
      type="date"
      onChange={handleDateChange}
      value={dateQuery}
    />
    </div>
  );
};