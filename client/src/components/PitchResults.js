import React, { useState } from 'react';

const PitchResults = ({ results }) => {
  const [copiedStates, setCopiedStates] = useState({});

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [key]: true });
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [key]: false }));
    }, 3000);
  };

  return (
    <>
      {Object.entries(results).map(([key, value]) => (
        <div key={key} className="pitch-card">
          <h4>{key === 'sec30' ? '30 секунд' : key === 'sec60' ? '60 секунд' : '120 секунд'}</h4>
          <p>{value}</p>
          <button 
            onClick={() => handleCopy(key, value)}
            style={{ 
              backgroundColor: copiedStates[key] ? '#004a99' : '#007bff',
              transition: 'background-color 0.3s ease'
            }}
          >
            {copiedStates[key] ? 'Скопировано!' : 'Скопировать'}
          </button>
        </div>
      ))}
    </>
  );
};

export default PitchResults;