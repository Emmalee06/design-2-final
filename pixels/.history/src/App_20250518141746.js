import React, { useState } from "react";
import { flowerDatabase, questions } from "./data/flowerData";
import WelcomeScreen from "./components/WelcomeScreen";
import QuestionScreen from "./components/QuestionScreen";
import LoadingScreen from "./components/LoadingScreen";
import ResultsScreen from "./components/ResultsScreen";
import ReadMoreScreen from "./components/ReadMoreScreen";
import StatusBar from "./components/StatusBar";
import ProgressBar from "./components/ProgressBar";
import "./styles/App.css";

function App() {
    const [currentScreen, setCurrentScreen] = useState("welcome");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [recommendedFlower, setRecommendedFlower] = useState(null);

    const startQuiz = () => {
        setCurrentScreen("question");
        setCurrentQuestionIndex(0);
        setUserAnswers({});
    };

    const handleAnswer = (value, category) => {
        const newAnswers = { ...userAnswers, [category]: value };
        setUserAnswers(newAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setCurrentScreen("loading");
            setTimeout(() => {
                const bestMatch = findBestMatch(newAnswers);
                setRecommendedFlower(bestMatch);
                setCurrentScreen("results");
            }, 6000);
        }
    };

    const findBestMatch = (answers) => {
        let bestMatch = null;
        let highestScore = -1;

        flowerDatabase.forEach((flower) => {
            let score = 0;
            for (const category in answers) {
                if (category in flower.tags) {
                    const userValues = answers[category].split(" ");
                    userValues.forEach((value) => {
                        if (
                            flower.tags[category].includes(value) ||
                            value === "any"
                        ) {
                            score++;
                        }
                    });
                }
            }

            if (score > highestScore) {
                highestScore = score;
                bestMatch = flower;
            }
        });

        return bestMatch || flowerDatabase[0];
    };

    const goBack = () => {
        if (currentScreen === "readMore") {
            setCurrentScreen("results");
        } else if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        } else {
            setCurrentScreen("welcome");
        }
    };

    const handleReadMore = () => {
        setCurrentScreen("readMore");
    };

    const handleMoreRecommendations = () => {
        startQuiz();
    };

    const getProgress = () => {
        return (currentQuestionIndex / questions.length) * 100;
    };

    return (
        <div className="app">
            <StatusBar />
            {currentScreen === "question" && (
                <ProgressBar progress={getProgress()} />
            )}

            {currentScreen === "welcome" && (
                <WelcomeScreen onStart={startQuiz} />
            )}

            {currentScreen === "question" && (
                <QuestionScreen
                    question={questions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                    onBack={goBack}
                    questionNumber={currentQuestionIndex + 1}
                />
            )}

            {currentScreen === "loading" && <LoadingScreen />}

            {currentScreen === "results" && (
                <ResultsScreen
                    flower={recommendedFlower}
                    onReset={startQuiz}
                    onReadMore={handleReadMore}
                />
            )}

            {currentScreen === "readMore" && (
                <ReadMoreScreen
                    flower={recommendedFlower}
                    onBack={goBack}
                    onMoreRecommendations={handleMoreRecommendations}
                />
            )}
        </div>
    );
}

export default App;
