import "../App.css";
import { useContext, useState } from "react";
import { QuizContext } from "../helpers/Contexts";
import Questions from "../helpers/Questions";

function Quizz() {
  const { setGameState, userName } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const question = Questions[currentQuestion];
  const isLastQuestion = currentQuestion === Questions.length - 1;

  const handleAnswer = (optionKey) => {
    setOptionChosen(optionKey);
  };

  const handleNextQuestion = () => {
    if (!optionChosen) return;
    if (optionChosen === question.answer) {
      setScore((prev) => prev + 1);
    }
    setOptionChosen("");
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleFinishQuiz = () => {
    if (!optionChosen) return;
    if (optionChosen === question.answer) {
      setScore((prev) => prev + 1);
    }
    setIsFinished(true);
  };

  if (isFinished) {
    return (
      <div className="Quizz">
        <h2>All done{userName ? `, ${userName}` : ""}!</h2>
        <p>
          You scored {score} out of {Questions.length}
        </p>
        <button onClick={() => setGameState("menu")}>Back to Menu</button>
      </div>
    );
  }

  return (
    <div className="Quizz">
      <h2>Question {currentQuestion + 1}</h2>
      <p>{question.prompt}</p>

      <div className="options">
        <button
          className={optionChosen === "optionA" ? "selected" : ""}
          onClick={() => handleAnswer("optionA")}
        >
          {question.optionA}
        </button>
        <button
          className={optionChosen === "optionB" ? "selected" : ""}
          onClick={() => handleAnswer("optionB")}
        >
          {question.optionB}
        </button>
        <button
          className={optionChosen === "optionC" ? "selected" : ""}
          onClick={() => handleAnswer("optionC")}
        >
          {question.optionC}
        </button>
        <button
          className={optionChosen === "optionD" ? "selected" : ""}
          onClick={() => handleAnswer("optionD")}
        >
          {question.optionD}
        </button>
      </div>

      <div className="actions">
        {isLastQuestion ? (
          <button disabled={!optionChosen} onClick={handleFinishQuiz}>
            Finish Quiz
          </button>
        ) : (
          <button disabled={!optionChosen} onClick={handleNextQuestion}>
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}

export default Quizz;
