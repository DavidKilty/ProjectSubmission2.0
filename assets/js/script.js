let timeoutId; // Variable to store the timeout ID for clearing the number display

// Function to generate a unique nine-digit number
function generateUniqueNineDigitNumber() {
  // Create an array with digits 1 to 9
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  // Join the digits to form a nine-digit number
  return digits.join('');
}

// Function to display the generated number in the question area
function displayGeneratedNumber(seconds) {
  const number = generateUniqueNineDigitNumber();
  const questionArea = document.querySelector('.question-area');
  const digitElements = questionArea.querySelectorAll('span[id^="operand"]');
  
  for (let i = 0; i < digitElements.length; i++) {
    digitElements[i].textContent = number[i];
  }

  // Clear the number display after the specified number of seconds
  timeoutId = setTimeout(() => {
    for (let i = 0; i < digitElements.length; i++) {
      digitElements[i].textContent = '';
    }
  }, seconds * 1000); // Convert seconds to milliseconds
}

// Function to handle the "Submit Answer" button click
function handleSubmit() {
  // Clear the timeout to prevent the number from disappearing during input
  clearTimeout(timeoutId);

  // Your existing code to check the answer can go here
  // ...

  // Reset the timeout to clear the number display after the specified seconds
  const selectedDuration = document.querySelector('.selected-duration');
  const seconds = parseInt(selectedDuration.dataset.seconds);
  timeoutId = setTimeout(() => {
    const digitElements = document.querySelectorAll('.question-area span[id^="operand"]');
    for (let i = 0; i < digitElements.length; i++) {
      digitElements[i].textContent = '';
    }
  }, seconds * 1000); // Convert seconds to milliseconds
}

// Set up event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Add event listener for the "Submit Answer" button
  const submitButton = document.querySelector('button[data-type="submit"]');
  submitButton.addEventListener('click', handleSubmit);

  // Add event listeners for all duration buttons
  const durationButtons = document.querySelectorAll('.btn[data-type="duration"]');
  durationButtons.forEach(button => {
    button.addEventListener('click', () => {
      const seconds = parseInt(button.dataset.seconds);
      displayGeneratedNumber(seconds);
      // Mark the selected duration button
      durationButtons.forEach(btn => btn.classList.remove('selected-duration'));
      button.classList.add('selected-duration');
    });
  });
});
