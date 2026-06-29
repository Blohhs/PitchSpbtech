import axios from 'axios';

export const getDeclinedPhrase = async (text, caseName) => {
  if (!text || text.trim() === '') return text;
  
  const caseMap = {
    genitive: 'Р',
    dative: 'Д',
    accusative: 'В',
    instrumental: 'Т'
  };

  try {
    const response = await axios.get(`https://ws3.morpher.ru/russian/declension`, {
      params: { s: text, format: 'json' }
    });
    
    const targetKey = caseMap[caseName];
    return response.data[targetKey] || text;
  } catch (error) {
    return text;
  }
};