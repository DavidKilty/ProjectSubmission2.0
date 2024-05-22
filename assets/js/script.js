document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".controls-area button");
    const answerBox = document.getElementById("answer-box");
    const correctScore = document.getElementById("score");
    const incorrectScore = document.getElementById("incorrect");
    let generatedNumber = "";
    let correctCount = 0;

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const time = parseInt(button.querySelector(".btn-label").textContent);
            generateAndDisplayNumber(time);
        });
    });

    document.querySelector("[data-type='submit']").addEventListener("click", checkAnswer);

    function generateRandomNumber() {
        const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let number = '';
        while (number.length < 9) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            number += digits.splice(randomIndex, 1);
        }
        return number;
    }

    function generateAndDisplayNumber(time) {
        generatedNumber = generateRandomNumber();
        const questionArea = document.querySelector(".question-area");
        questionArea.innerHTML = `<span>${generatedNumber}</span>`;

        setTimeout(function() {
            questionArea.innerHTML = 'What was the order?';
            answerBox.disabled = false;
            answerBox.focus();
        }, time * 1000);


    function generateAndDisplayNumber(time) {
        generatedNumber = generateRandomNumber();
        const questionArea = document.querySelector(".question-area");
        questionArea.innerHTML = `<span>${generatedNumber}</span>`;

        setTimeout(function() {
            questionArea.innerHTML = 'What was the order?';
            answerBox.disabled = false;
            answerBox.focus();
        }, time * 1000);

        answerBox.disabled = true;
        answerBox.value = '';
    }

    function checkAnswer() {
        const userAnswer = answerBox.value;

        if (userAnswer === generatedNumber) {
            correctScore.textContent = parseInt(correctScore.textContent) + 1;
            correctCount++;
            if (correctCount >= 99) {
                alert('Congratulations!');
                correctCount = 0;
                correctScore.textContent = '0';
                incorrectScore.textContent = '0';
            }
        } else {
            incorrectScore.textContent = parseInt(incorrectScore.textContent) + 1;
            correctCount = 0;
        }

        answerBox.value = '';
        answerBox.disabled = true;
    }
});
