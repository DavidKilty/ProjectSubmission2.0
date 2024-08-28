// Dom element // 

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".controls-area button");
    const correctScore = document.getElementById("score");
    const incorrectScore = document.getElementById("incorrect");
    const submitButton = document.querySelector("[data-type='submit']");
    let generatedNumber = "";
    let correctCount = 0;

    // Initially block the submit button function //
    submitButton.disabled = true;

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Disable all buttons after timer selected function // 
            disableButtons();
            const time = parseInt(button.querySelector(".btn-label").textContent);
            generateAndDisplayNumber(time);
        });
    });

    document.querySelector("[data-type='submit']").addEventListener("click", checkAnswer);

// Disbale all timer button function //
    function disableButtons() {
        buttons.forEach(function(button) {
            button.disabled = true;
        });
    }

// Enable all timer button function //
    function enableButtons() {
        buttons.forEach(function(button) {
            button.disabled = false;
        });
    }

// Number generation function // 

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

        let existingInputBox = document.getElementById("answer-box");
        if (existingInputBox) {
            existingInputBox.remove();
        }

        submitButton.disabled = true;

        // Set timer function // 
        setTimeout(function() {
            questionArea.innerHTML = 'What was the order?';
            let newInputBox = document.createElement("input");
            newInputBox.id = "answer-box";
            newInputBox.type = "number";
            newInputBox.style.display = 'block';
            document.querySelector(".question-area").appendChild(newInputBox);
            newInputBox.focus();

            submitButton.disabled = false;  // Enable submit button after the timer runs out //
            console.log('Answer box recreated and enabled');
        }, time * 1000);
    }

    function checkAnswer() {
        const answerBox = document.getElementById("answer-box");
        const userAnswer = answerBox.value;

        // Score to 99 function // 
        if (userAnswer === generatedNumber) {
            correctScore.textContent = parseInt(correctScore.textContent) + 1;
            alert('That was right!')
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
        submitButton.disabled = true;  // Disable submit button after an answer function //
        console.log('Answer checked and box disabled');

        // Enable agin timer button after answer check function //
        enableButtons();
    }
});
