import React, { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";

function App() {
  const [quizStarted, setQuizStarted] = useState(
    JSON.parse(localStorage.getItem("quizStarted")) || false
  );

  const startQuiz = () => {
    setQuizStarted(true);
  };

  useEffect(() => {
    localStorage.setItem("quizStarted", JSON.stringify(quizStarted));
  }, [quizStarted]);

  return (
    <div className="App">
      {!quizStarted && <Welcome startQuiz={startQuiz} />}
      {quizStarted && <Quiz />}
    </div>
  );
}

export default App;
