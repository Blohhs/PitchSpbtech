export const generatePitches = (data) => {
    const { projectName, targetAudience, problem, solution, result, goal } = data;
    const res = result || "Сейчас на этапе проверки гипотез и создания прототипа.";
  
    return {
      sec30: `Мы — ${projectName}. Создаем ${solution}. Помогаем ${targetAudience} решить проблему ${problem}. Наш результат: ${res}. Нам нужен ${goal}.`,
      sec60: `Мы — ${projectName}. Разрабатываем ${solution}. Это актуально для ${targetAudience}, которые сталкиваются с ${problem}. Наш результат: ${res}. Сейчас мы развиваемся и нам необходим ${goal}. Будем рады обсудить детали.`,
      sec120: `Мы — ${projectName}, создаем ${solution}, чтобы помочь ${targetAudience} справиться с ${problem}. Наше решение уникально тем, что дает быстрый эффект. Мы уже достигли следующих результатов: ${res}. Сейчас наша цель — ${goal}. Мы ищем партнеров для масштабирования проекта и будем рады ответить на ваши вопросы.`
    };
  };