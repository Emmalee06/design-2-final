import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import { flowerDatabase, questions } from "./data/flowerData";
import WelcomeScreen from "./components/WelcomeScreen";
import QuestionScreen from "./components/QuestionScreen";
import LoadingScreen from "./components/LoadingScreen";
import ResultsScreen from "./components/ResultsScreen";
import ReadMoreScreen from "./components/ReadMoreScreen";
import SignInSuccessScreen from "./components/SignInSuccessScreen";
import ProgressBar from "./components/ProgressBar";
import "./styles/App.css";

function AppContent() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [recommendedFlower, setRecommendedFlower] = useState(null);
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate("/question");
        setCurrentQuestionIndex(0);
        setUserAnswers({});
    };

    const handleAnswer = (value, category) => {
        const newAnswers = { ...userAnswers, [category]: value };
        setUserAnswers(newAnswers);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            navigate("/loading");
            setTimeout(() => {
                const bestMatch = findBestMatch(newAnswers);
                setRecommendedFlower(bestMatch);
                navigate("/results");
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
        navigate(-1);
    };

    const handleReadMore = () => {
        navigate("/read-more");
    };

    const handleMoreRecommendations = () => {
        startQuiz();
    };

    const getProgress = () => {
        return (currentQuestionIndex / questions.length) * 100;
    };

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={<WelcomeScreen onStart={startQuiz} />}
                />
                <Route
                    path="/question"
                    element={
                        <>
                            <ProgressBar progress={getProgress()} />
                            <QuestionScreen
                                question={questions[currentQuestionIndex]}
                                onAnswer={handleAnswer}
                                onBack={goBack}
                                questionNumber={currentQuestionIndex + 1}
                            />
                        </>
                    }
                />
                <Route path="/loading" element={<LoadingScreen />} />
                <Route
                    path="/results"
                    element={
                        <ResultsScreen
                            flower={recommendedFlower}
                            onReset={startQuiz}
                            onReadMore={handleReadMore}
                        />
                    }
                />
                <Route
                    path="/read-more"
                    element={
                        <ReadMoreScreen
                            flower={recommendedFlower}
                            onBack={goBack}
                            onMoreRecommendations={handleMoreRecommendations}
                        />
                    }
                />
                <Route
                    path="/sign-in-success"
                    element={<SignInSuccessScreen />}
                />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
