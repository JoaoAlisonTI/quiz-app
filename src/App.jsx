import React, { useState } from 'react';
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const questions = [
    {
      questionText: 'Qual é a capital da França?',
      answerOptions: [
        { answerText: 'A) Nova York', isCorrect: false },
        { answerText: 'B) Londres', isCorrect: false },
        { answerText: 'C) Paris', isCorrect: true },
        { answerText: 'D) Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Quem é CEO da Tesla?',
      answerOptions: [
        { answerText: 'A) Jeff Bezos', isCorrect: false },
        { answerText: 'B) Elon Musk', isCorrect: true },
        { answerText: 'C) Bill Gates', isCorrect: false },
        { answerText: 'D) Renatim da EP', isCorrect: false },
      ],
    },
    {
      questionText: 'O iPhone foi criado por qual empresa?',
      answerOptions: [
        { answerText: 'A) Apple', isCorrect: true },
        { answerText: 'B) Intel', isCorrect: false },
        { answerText: 'C) Amazon', isCorrect: false },
        { answerText: 'D) Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'Quantos livros do Harry Potter existem?',
      answerOptions: [
        { answerText: 'A) 1', isCorrect: false },
        { answerText: 'B) 4', isCorrect: false },
        { answerText: 'C) 6', isCorrect: false },
        { answerText: 'D) 7', isCorrect: true },
      ],
    },
    {
      questionText: 'Quem venceu a segunda guerra mundial?',
      answerOptions: [
        { answerText: 'A) Eixo', isCorrect: false },
        { answerText: 'B) Brasil', isCorrect: false },
        { answerText: 'C) Aliados', isCorrect: true },
        { answerText: 'D) Ceará', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          Você Acertou {score} de {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
            <h2>
             {questions[currentQuestion].questionText}
             </h2>
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}