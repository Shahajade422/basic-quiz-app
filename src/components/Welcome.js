// WelcomeScreen.js
import React from "react";
import "./Welcome.css";

function WelcomeScreen({ startQuiz }) {
  return (
    <div className="welcome-screen">
      <h1 className="welcome-heading">Welcome to the Quiz App</h1>
      <p className="welcome-text">
        Test your knowledge with our interactive quiz!
      </p>
      <button className="start-button" onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  );
}

export default WelcomeScreen;
