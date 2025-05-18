import React from "react";
import Button from "./Button";
import BackButton from "./BackButton";

function QuestionScreen({ question, onAnswer, onBack, questionNumber }) {
    return (
        <div className="screen active">
            <BackButton onClick={onBack} />
            <img
                src={`/img/flower survey ${questionNumber}.svg`}
                alt="Question illustration"
                className="illustration"
            />
            <div id="question-text">{question.text}</div>
            <div id="options-container">
                {question.options.map((option, index) => (
                    <Button
                        key={index}
                        onClick={() =>
                            onAnswer(option.value, question.category)
                        }
                    >
                        {option.text}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default QuestionScreen;
