import React, { useState, useEffect } from "react";
import "./Quiz.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const quizState = JSON.parse(localStorage.getItem("quizState"));
    if (quizState) {
      setCurrentQuestion(quizState.currentQuestion);
      setSelectedOption(quizState.selectedOption);
      setScore(quizState.score);
    }
  }, []);

  useEffect(() => {
    const quizState = { currentQuestion, selectedOption, score };
    localStorage.setItem("quizState", JSON.stringify(quizState));
    if (currentQuestion >= questions.length) {
      localStorage.clear();
    }
  }, [currentQuestion, selectedOption, score]);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ["Shakespeare", "Hemingway", "Tolkien", "Austen"],
      answer: "Shakespeare",
    },
    {
      question:
        "In which year of First World War Germany declared war on Russia and France?",
      options: ["1914", "1821", "1916", "1917"],
      answer: "1914",
    },
    {
      question: "ICAO stands for?",
      options: [
        "International Civil Aviation Organization",
        "Indian Corporation of Agriculture Organization",
        "Institute of Company of Accounts Organization",
        "None of the above",
      ],
      answer: "International Civil Aviation Organization",
    },
    {
      question: "India has largest deposits of ____ in the world.",
      options: ["gold", "copper", "mica", "None of the above"],
      answer: "mica",
    },
    {
      question: "How many Lok Sabha seats belong to Rajasthan?",
      options: ["32", "25", "17", "30"],
      answer: "25",
    },
  ];

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="quiz-results">
        <h2>Quiz Completed!</h2>
        <p>
          Your score: {score} out of {questions.length}
        </p>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h2>Question {currentQuestion + 1}</h2>
      <div className="quiz-question card">
        <h2 className="quiz-question-text">
          {questions[currentQuestion].question}
        </h2>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="option">
              <input
                type="radio"
                id={option}
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </div>
      <button className="next-button" onClick={handleNextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default Quiz;
