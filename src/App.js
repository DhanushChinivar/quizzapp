import './App.css';
import Menu from './components/Menu';
import Quizz from './components/Quizz';
import { useState } from 'react';
import { QuizContext } from './helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState, userName, setUserName}}>
      {gameState === "menu" &&   <Menu />}
      {gameState === "playing" && <Quizz/>}
      {userName && <h2>Welcome, {userName}!</h2>}
     </QuizContext.Provider>
    </div>
  );
}

export default App;
