import React from 'react';

const PitchResults = ({ results }) => {
  const handleCopy = (text) => navigator.clipboard.writeText(text);

  return (
    <>
      {Object.entries(results).map(([key, value]) => (
        <div key={key} className="pitch-card">
          <h4>{key === 'sec30' ? '30 секунд' : key === 'sec60' ? '60 секунд' : '120 секунд'}</h4>
          <p>{value}</p>
          <button onClick={() => handleCopy(value)}>Скопировать</button>
        </div>
      ))}
    </>
  );
};

export default PitchResults;