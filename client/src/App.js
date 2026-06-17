import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import PitchResults from './components/PitchResults';
import Advice from './components/Advice';
import { generatePitches } from './utils/generator';
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
    if (formData.projectName.length < 2 || formData.projectName.length > 60) newErrors.projectName = 'От 2 до 60 символов';
    if (formData.targetAudience.length < 5 || formData.targetAudience.length > 120) newErrors.targetAudience = 'От 5 до 120 символов';
    if (formData.problem.length < 20 || formData.problem.length > 300) newErrors.problem = 'От 20 до 300 символов';
    if (formData.solution.length < 20 || formData.solution.length > 300) newErrors.solution = 'От 20 до 300 символов';
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
      <h1>Генератор питчей</h1>
      <div className="main-grid">
        <div className="form-column">
          <Form localData={formData} handleChange={handleChange} handleGenerate={handleGenerate} handleClear={handleClear} errors={errors} />
        </div>
        <div className="results-column">
          {results ? (
            <>
              <PitchResults results={results} />
              <Advice data={formData} />
            </>
          ) : (
            <div className="pitch-card">Заполните форму, чтобы увидеть результат.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;