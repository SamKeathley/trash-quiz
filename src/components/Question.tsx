import React from 'react';
import data from '../data.json';

type Props = {
    question: any,
    answers: string[],
    callback: any,
    userAnswer: any,
    questionNr: number,
    totalQuestions: number
};

const Question: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => (
    (
        <div>
            {
                data.Questions.map((question) => {
                    return (
                        <div>
                            <p className="number"> Question: {questionNr} / {totalQuestions}</p>
                            {question.question.map(question => (
                                <p>{question.question}</p>
                            ))}
                            <div>
                                {question.answers.map(answers => (
                                    <div>
                                        <button disabled={userAnswer} onClick={callback}>
                                            <span>{answers.content}</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                });
            };
        </div>
    )
);

export default Question;