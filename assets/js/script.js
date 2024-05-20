document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".controls-area button");
  const answerBox = document.getElementById("answer-box");
  const correctScore = document.getElementById("score");
  const incorrectScore = document.getElementById("incorrect");

  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const time = parseInt(button.getAttribute("data-type"));
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
      const number = generateRandomNumber();
      const questionArea = document.querySelector(".question-area");
      questionArea.innerHTML = `<span>${number}</span>`;

      setTimeout(() => {
          questionArea.innerHTML = '';
          answerBox.disabled = false;
          answerBox.focus();
      }, time * 1000);

      answerBox.disabled = true;
  }

  function checkAnswer() {
      const displayedNumber = document.querySelector(".question-area span").textContent;
      const userAnswer = answerBox.value;

      if (userAnswer === displayedNumber) {
          correctScore.textContent = parseInt(correctScore.textContent) + 1;
      } else {
          incorrectScore.textContent = parseInt(incorrectScore.textContent) + 1;
      }

      answerBox.value = '';
      answerBox.disabled = true;
  }
});