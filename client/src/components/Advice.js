import React from 'react';
import links from '../data/links.json';

const Advice = ({ data }) => {
  const getAdvice = () => {
    const advice = [];
    const { targetAudience, problem, solution, result, goal } = data;

    if (!result || result.trim() === '') advice.push("Добавьте доказательства.");
    if (problem.length > 0 && problem.length < 20) advice.push("Проблема слишком короткая.");
    if (solution.length > 0 && solution.length < 20) advice.push("Решение описано слишком кратко.");
    if (!goal || goal.trim() === '') advice.push("Укажите запрос.");
    if (!targetAudience || targetAudience.trim() === '') advice.push("Укажите аудиторию.");

    return advice;
  };

  const adviceList = getAdvice();

  return (
    <div className="advice-container">
      <h3>Что усилить:</h3>
      {adviceList.length > 0 ? (
        <ul>{adviceList.map((item, i) => <li key={i}>{item}</li>)}</ul>
      ) : <p>Отличный питч!</p>}
      <h3>Полезные ссылки:</h3>
      <ul>
        {links.map((l, i) => (
          <li key={i}><a href={l.url} target="_blank" rel="noreferrer">{l.title}</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Advice;