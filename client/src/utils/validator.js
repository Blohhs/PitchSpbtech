export const validateField = (name, value) => {
    const rules = {
      projectName: { min: 2, max: 60, label: "Название проекта" },
      targetAudience: { min: 5, max: 120, label: "Целевая аудитория" },
      problem: { min: 20, max: 300, label: "Проблема" },
      solution: { min: 20, max: 300, label: "Решение" },
      result: { min: 0, max: 250, label: "Результат" },
      goal: { min: 1, max: 100, label: "Запрос" }
    };
    const rule = rules[name];
    if (!rule || value.length === 0) return null;
    if (value.length < rule.min) return `${rule.label}: минимум ${rule.min} симв.`;
    if (value.length > rule.max) return `${rule.label}: максимум ${rule.max} симв.`;
    return null;
  };