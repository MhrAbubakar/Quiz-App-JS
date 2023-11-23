const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which programming language is also a gem?',
        options: ['Ruby', 'Python', 'Java', 'C++'],
        correctAnswer: 'Ruby'
    },
    {
        question: 'What is the capital of France?',
        options: ['Sargodha', 'Lahore', 'Islamabad', 'Gujrat'],
        correctAnswer: 'Islamabad'
    },  
];
document.addEventListener('DOMContentLoaded', function () {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    let currentQuestionIndex = 0;
    let userResponses = [];
    function buildQuiz() {
        const question = questions[currentQuestionIndex];

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${currentQuestionIndex + 1}. ${question.question}</p>`;

        question.options.forEach((option, index) => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="question" value="${option}" data-index="${index}"> ${option}`;
            questionDiv.appendChild(label);
        });

        quizContainer.innerHTML = '';
        quizContainer.appendChild(questionDiv);
        const radioButtons = questionDiv.querySelectorAll('input[type=radio]');
        radioButtons.forEach(button => {
            button.addEventListener('change', () => {
                userResponses[currentQuestionIndex] = button.value;
            });
        });
    }
    function displayResults() {
        let score = 0;

        for (let i = 0; i < questions.length; i++) {
            if (userResponses[i] === questions[i].correctAnswer) {
                score++;
            }
        }
        resultsContainer.innerHTML = `You completed the quiz! You scored ${score} out of ${questions.length}.`;
        submitButton.disabled = true;
    }
    function showNextQuestion() {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            buildQuiz();
        } else {
            displayResults();
        }
    }
    submitButton.addEventListener('click', () => {
        if (userResponses.length === questions.length) {
            displayResults();
        } else {
            showNextQuestion();
        }
    });
    buildQuiz();
});
