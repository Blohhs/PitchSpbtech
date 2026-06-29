import { getDeclinedPhrase } from './declension';

const fmt = (text) => (!text ? "" : text.charAt(0).toLowerCase() + text.slice(1));

export const generatePitches = async (data) => {
  const { projectName, targetAudience, problem, solution, result, goal } = data;

  const targetAcc = await getDeclinedPhrase(targetAudience, 'accusative');
  const targetDat = await getDeclinedPhrase(targetAudience, 'dative');
  const targetGen = await getDeclinedPhrase(targetAudience, 'genitive');
  
  const probInst = await getDeclinedPhrase(problem, 'instrumental');
  
  const prob = fmt(problem);
  const sol = fmt(solution);
  const res = result || "сейчас на этапе проверки гипотез и создания прототипа";
  const g = fmt(goal);

  return {
    sec30: `Мы — ${projectName}. Решение: ${sol}. Проект ориентирован на ${targetAcc}. Мы помогаем ${targetDat} в решении проблемы: ${prob}. Результат: ${res}. Цель: ${g}.`,
    
    sec60: `Мы — ${projectName}. Мы предлагаем ${sol}. Этот продукт создан для ${targetGen}, так как это закрывает вопрос: ${prob}. Наш результат: ${res}. Сейчас мы переходим к стадии активного роста, главная задача — ${g}. Будем рады обсудить детали сотрудничества.`,
    
    // Используем здесь ${probInst} вместо ${prob}
    sec120: `Мы — ${projectName}. Наше ключевое решение — ${sol}. Проект создавался для ${targetGen}, которые ежедневно сталкиваются с ${probInst}. Мы проанализировали рынок, текущие аналоги не дают нужного качества, поэтому мы разработали собственный подход, обеспечивающий быстрый и стабильный результат. 

Наши достижения: ${res}. Мы прошли этап тестирования и готовы масштабироваться. Сейчас наша цель — ${g}. Мы ищем партнеров, разделяющих наше видение. Мы уверены, что наше решение станет стандартом в этой области, и будем рады обсудить возможности для совместной работы.`
  };
};