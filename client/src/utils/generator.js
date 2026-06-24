const decl = (word, type) => {
  if (!word) return "";
  const w = word.toLowerCase().trim();
  const lastChar = w.slice(-1);

  if (w.endsWith('ы') || w.endsWith('и')) {
    return type === 'genitive' ? w.replace(/(ы|и)$/, 'ов') : w.replace(/(ы|и)$/, 'ам');
  }

  if (type === 'genitive') {
    if (lastChar === 'к') return w.slice(0, -1) + 'и';
    if (lastChar === 'ь') return w.slice(0, -1) + 'я';
    return w.replace(/а$/, 'ы').replace(/я$/, 'и').replace(/о$/, 'а');
  }
  
  if (type === 'dative') {
    if (lastChar === 'к') return w.slice(0, -1) + 'е';
    if (lastChar === 'ь') return w.slice(0, -1) + 'ю';
    return w.replace(/а$/, 'е').replace(/я$/, 'е').replace(/о$/, 'у');
  }
  return w;
};

const fmt = (text) => (!text ? "" : text.charAt(0).toLowerCase() + text.slice(1));

export const generatePitches = (data) => {
  const { projectName, targetAudience, problem, solution, result, goal } = data;

  const targetDat = decl(targetAudience, 'dative');
  const targetGen = decl(targetAudience, 'genitive');
  const prob = fmt(problem);
  const sol = fmt(solution);
  const res = result || "сейчас на этапе проверки гипотез и создания прототипа";
  const g = fmt(goal);

  return {
    sec30: `Мы — ${projectName}. Решение: ${sol}. Проект ориентирован на ${targetAudience}. Мы помогаем ${targetDat} в решении проблемы: ${prob}. Результат: ${res}. Цель: ${g}.`,
    
    sec60: `Мы — ${projectName}. Мы предлагаем ${sol}. Этот продукт создан для ${targetGen}, так как это закрывает вопрос: ${prob}. Наш результат: ${res}. Сейчас мы переходим к стадии активного роста, главная задача — ${g}. Будем рады обсудить детали сотрудничества.`,
    
    sec120: `Мы — ${projectName}. Наше ключевое решение — ${sol}. Проект создавался для ${targetGen}, которые ежедневно сталкиваются с ${prob}. Мы проанализировали рынок, текущие аналоги не дают нужного качества, поэтому мы разработали собственный подход, обеспечивающий быстрый и стабильный результат. 

Наши достижения: ${res}. Мы прошли этап тестирования и готовы масштабироваться. Сейчас наша цель — ${g}. Мы ищем партнеров, разделяющих наше видение. Мы уверены, что наше решение станет стандартом в этой области, и будем рады обсудить возможности для совместной работы.`
  };
};