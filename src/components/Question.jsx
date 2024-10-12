import React from 'react';

const Question = () => {
  return (
    <div className="question">
      <h2>1. Занимательный вопрос</h2>
      <label className="input-wrapper">
        <input
          required
          type="text"
          name="answer"
          placeholder="Ваш ответ"
        />
        <span id="error-message">Введите корректный ответ</span>
      </label>
      <button type="button" disabled id="next-btn">
        Далее
      </button>
    </div>
  );
};

export default Question;
