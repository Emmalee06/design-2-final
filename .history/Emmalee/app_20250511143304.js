// Array of SVGs for each question
const illustrations = [
    "img/flower survey 1.svg",
    "img/flower survey 2.svg",
    "img/flower survey 3.svg",
    "img/flower survey 4.svg",
    "img/flower survey 5.svg",
    "img/flower survey 6.svg",
];

// Show welcome screen
function showWelcomeScreen() {
    hideAllScreens();
    welcomeScreen.classList.add("active");
    progressBar.style.width = "0%";
}

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = {};
    showQuestion(0);
}

// Show a specific question
function showQuestion(index) {
    if (index >= questions.length) {
        showLoadingScreen();
        return;
    }

    hideAllScreens();
    questionScreen.classList.add("active");

    const question = questions[index];
    questionText.textContent = question.text;

    // Update the illustration with the correct SVG path
    const svgPath = illustrations[index];
    questionIllustration.src = svgPath;

    // Clear previous options
    optionsContainer.innerHTML = "";

    // Add new options
    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.className = "button";
        button.textContent = option.text;
        button.onclick = () => selectOption(option.value, question.category);
        optionsContainer.appendChild(button);
    });

    // Update progress bar
    updateProgressBar();
}

// Select an option and proceed to next question
function selectOption(value, category) {
    userAnswers[category] = value;
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
}

// Show loading screen
function showLoadingScreen() {
    hideAllScreens();
    loadingScreen.classList.add("active");

    // Extended loading time - 8 seconds
    setTimeout(() => {
        showResults();
    }, 8000);
}

// Show results screen
function showResults() {
    hideAllScreens();
    resultsScreen.classList.add("active");
    progressBar.style.width = "100%";

    // Find the best matching flower
    const recommendedFlower = findBestMatch();

    // Update the UI with the recommended flower
    flowerName.textContent = recommendedFlower.name;
    flowerImage.src = recommendedFlower.image;
    availability.textContent = `Availability: ${recommendedFlower.availability}`;
    bestFor.textContent = `Best For: ${recommendedFlower.bestFor}`;
    flowerDesc.innerHTML = `${recommendedFlower.description.substring(
        0,
        100
    )}... <a href="#" class="read-more">Read More</a>`;
}

// Find the best matching flower based on user answers
function findBestMatch() {
    let bestMatch = null;
    let highestScore = -1;

    flowerDatabase.forEach((flower) => {
        let score = 0;

        // Calculate matching score based on tags
        for (const category in userAnswers) {
            if (category in flower.tags) {
                const userValues = userAnswers[category].split(" ");
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

    // If no good match found, return a default
    return bestMatch || flowerDatabase[0];
}

// Reset the quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    userAnswers = {};
    showQuestion(0);
}

// Go back to previous question
function goBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    } else {
        showWelcomeScreen();
    }
}

// Update progress bar
function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Hide all screens
function hideAllScreens() {
    welcomeScreen.classList.remove("active");
    loadingScreen.classList.remove("active");
    resultsScreen.classList.remove("active");
    questionScreen.classList.remove("active");
}
