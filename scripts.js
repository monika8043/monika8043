const quizData = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyper Text Manage Language", "Hyper Tool Multi Language","hyper Tool Multipal Language"], answer: 0 },
    { question:"Which is CSS stand for?", options: ["cascoding style sheets", "castyping style sheets", "cascasting style sheets","cascading style sheets"],answer: 3 },
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris","Rome"], answer: 2 },
    { question: "Which is the largest planet?", options: ["Earth", "Jupiter", "Mars","Venus"], answer: 1 },
    { question: "Which player have most number of centuries in intenational ODI cricket?", options: ["Ricky Pointin", "Virendra sehwag", "Virat Kohli", "Sachin Tendulkar"],
        option: 2 }
    
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    if (currentQuestion < quizData.length) {
        questionEl.textContent = quizData[currentQuestion].question;
        optionsEl.innerHTML = "";

        quizData[currentQuestion].options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            button.onclick = () => checkAnswer(index);
            optionsEl.appendChild(button);
        });
    } else {
        showResult();
    }
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

console.log("Score:" ,score);
console.log("Total Question:", quizData.length);

function showResult() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    scoreEl.innerHTML = `Your Score: <strong>${score}</strong> / ${quizData.length}`;
    scoreEl.classList.remove("hidden");
    nextBtn.classList.add("hidden");
}

const scoreE1 = document.getElementById("score");



nextBtn.addEventListener("click", loadQuestion);

// Load the first question
loadQuestion();


