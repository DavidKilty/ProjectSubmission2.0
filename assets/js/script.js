document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded successfully"); // Add this line to verify the script is loaded

    const buttons = document.querySelectorAll(".controls-area button");
    const answerBox = document.getElementById("answer-box");
    const correctScore = document.getElementById("score");
    const incorrectScore = document.getElementById("incorrect");
    let generatedNumber = "";
    let correctCount = 0;

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const time = parseInt(button.querySelector(".btn-label").textContent);
            console.log(`Button clicked: ${time} seconds`);
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
        console.log(`Generated number: ${number}`);
        return number;
    }

    function generateAndDisplayNumber(time) {
        generatedNumber = generateRandomNumber();
        const questionArea = document.querySelector(".question-area");
        questionArea.innerHTML = `<span>${generatedNumber}</span>`;
        
        answerBox.value = '';
        answerBox.disabled = true;
        answerBox.style.display = 'block'; // Ensure the answer box is visible

        setTimeout(function() {
            questionArea.innerHTML = 'What was the order?';
            answerBox.disabled = false;
            answerBox.style.display = 'block'; // Ensure the answer box is visible again
            answerBox.focus();
            console.log('Answer box enabled');
        }, time * 1000);
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
        console.log('Answer checked and box disabled');
    }
});
