import React from 'react';

const Form = ({ localData, handleChange, handleGenerate, handleClear, errors }) => {
  return (
    <form className="pitch-form" onSubmit={(e) => e.preventDefault()}>
      <label>Название проекта</label>
      <input name="projectName" value={localData.projectName} onChange={handleChange} placeholder="" className={errors.projectName ? 'error-input' : ''} />
      {errors.projectName && <span className="error-text">{errors.projectName}</span>}

      <label>Целевая аудитория</label>
      <input name="targetAudience" value={localData.targetAudience} onChange={handleChange} placeholder="" className={errors.targetAudience ? 'error-input' : ''} />
      {errors.targetAudience && <span className="error-text">{errors.targetAudience}</span>}

      <label>Проблема</label>
      <textarea name="problem" value={localData.problem} onChange={handleChange} placeholder="" className={errors.problem ? 'error-input' : ''} />
      {errors.problem && <span className="error-text">{errors.problem}</span>}

      <label>Решение</label>
      <textarea name="solution" value={localData.solution} onChange={handleChange} placeholder="" className={errors.solution ? 'error-input' : ''} />
      {errors.solution && <span className="error-text">{errors.solution}</span>}

      <label>Результат</label>
      <textarea name="result" value={localData.result} onChange={handleChange} placeholder="" />

      <label>Запрос</label>
      <input name="goal" value={localData.goal} onChange={handleChange} placeholder="" className={errors.goal ? 'error-input' : ''} />
      {errors.goal && <span className="error-text">{errors.goal}</span>}

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button type="button" onClick={handleGenerate}>Сгенерировать</button>
        <button type="button" onClick={handleClear} style={{ backgroundColor: '#444' }}>Очистить</button>
      </div>
    </form>
  );
};

export default Form;