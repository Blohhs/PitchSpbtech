import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import PitchResults from './components/PitchResults';
import { generatePitches } from './utils/generator';
import logo from './assets/LogoFull.svg';
import './App.css';

const emptyData = { projectName: '', targetAudience: '', problem: '', solution: '', result: '', goal: '' };

function App() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('pitchData');
    return saved ? JSON.parse(saved) : emptyData;
  });
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem('pitchData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleClear = () => {
    setFormData(emptyData);
    setResults(null);
    setErrors({});
    localStorage.removeItem('pitchData');
  };

  const handleGenerate = () => {
    const newErrors = {};
    if (formData.projectName.length < 2) newErrors.projectName = 'Минимум 2 символа';
    if (formData.targetAudience.length < 5) newErrors.targetAudience = 'Минимум 5 символов';
    if (formData.problem.length < 10) newErrors.problem = 'Минимум 10 символов';
    if (formData.solution.length < 10) newErrors.solution = 'Минимум 10 символов';
    if (formData.goal.length === 0) newErrors.goal = 'Запрос обязателен';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setResults(generatePitches(formData));
    }
  };

  return (
    <div className="app-container">
      <img src={logo} alt="Logo" className="page-logo" />
      <h1>Генератор питчей</h1>
      <div className="main-grid">
        <div className="form-column">
          <Form localData={formData} handleChange={handleChange} handleGenerate={handleGenerate} handleClear={handleClear} errors={errors} />
        </div>
        <div className="results-column">
          {results ? (
            <PitchResults results={results} />
          ) : (
            <div className="pitch-card">Заполните форму, чтобы увидеть результат.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;