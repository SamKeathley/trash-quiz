import React, { useState } from 'react';
import './App.scss';
import Question from './components/Question';
import data from './data.json';

const TOTAL_QUESTIONS = 6;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [endQuiz, setEndQuiz] = useState(true);


  const startQuiz = async () => {

  }

  const checkAnser = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }


  return (
    <div className="App">
      <h1>What Kind of Trash Are You?</h1>
      <button className="start" onClick={startQuiz}>Start</button>
      <p>Loading...</p>
      <Question
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
      />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
