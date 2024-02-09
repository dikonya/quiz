import React from "react";
import { Link } from "react-router-dom";

const Result = ({ answer }) => {
  function countAnswers() {
    const result = {
      "Согласен": 0,
      "Не согласен": 0,
      "Нейтрален": 0,
      "Затрудняюсь ответить": 0
    };

  
  answer.forEach(userAnswer => {
    result[userAnswer]++;
  });
    return result;
  }

  const answerCounts = countAnswers();

  return (
    <div className="container welcome_box">
      <div className="row box">
        <h2>Congratulations</h2>
        <p>Your answers breakdown:</p>
        <ul>
          {Object.keys(answerCounts).map((key, index) => (
            <li key={index} >
              {key}: {answerCounts[key]} раз(а)
            </li>
          ))}
        </ul>
        <Link to="/">
          <button className="btn btn-success px-4 py-2 fw-bold">HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
