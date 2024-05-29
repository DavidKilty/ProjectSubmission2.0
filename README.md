


# Memory Number Game



## Description
This project is a web-based memory number game where users are presented with a random 9-digit number for a specific amount of time and then must recall and input the number correctly. The game aims to test and improve the user's visual numerical memory. Based from a game my mother created for me as a child, it is aimed at those who want to improve their memory and get creative with how they do so. But, also, it serves as a great tool to show how JavaScript can be used and implemented.

CONTACT IMG

## Installation

To install and run this project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/DavidKilty/ProjectSubmission2.0.git
2. Navigate to the project directory:
 cd ProjectSubmission2.0
3. Open index.html in your web browser.

## Features

### Logo and heading 

Upon viewing the page, the user will see this as the title of my game. 

CONTACT IMG

### Game section

This section will allow you to interact with the game, using the different timer buttons. The user, or player, will be able to set the time of how long they get to see the number which they have to remember. It sounds easy, but try doing it for 15 seconds up to 99 times in a row. 

CONTACT IMG

### Answer section

The answer box then appears after the timer is over and this is where you need to input the number. Yes, you could cheat and copy the number the Betim and input that the box, But where would the Fun be in that? 

CONTACT IMG

### Score section  

This is where the user sees their scores. 99 is the goal of course . 

CONTACT IMG
   
## Usage

A) Click on one of the time buttons (60, 45, 30, 15 seconds).

B) Memorize the 9-digit number that appears.

C) Enter the number in the answer box after the time elapses.

D) Click the "Submit Answer" button to check your answer.

E) The game will keep track of your correct and incorrect answers.


### Code References

JavaScript Event Listeners and DOM Manipulation:

 - Referenced from MDN Web Docs for handling button clicks and updating DOM elements.
     
 "document.addEventListener("DOMContentLoaded", function() {
 });"
   
 Generating Random Numbers without Repetition:
 
 - Referenced from W3Schools JavaScript Random for generating unique random numbers.

  "function generateRandomNumber() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let number = '';
  while (number.length < 9) {
  const randomIndex = Math.floor(Math.random() * digits.length);
  number += digits.splice(randomIndex, 1);
  }
  return number;
  }"

HTML and CSS structure:

- Referenced from W3Schools HTML and W3Schools CSS for creating the basic layout and styling of the webpage.
 
 "<div class="game-area">
  <div class="controls-area">
  </div>
  <div class="question-area">
  <span>What was the order?</span>
  <p class="answer-message">Enter Answer:</p>
  <input id="answer-box" type="number" disabled>
  </div>
  <button data-type="submit" class="btn btn--gray">Submit Answer</button>
  </div>"

  "#answer-box {
   border: 1px solid #445361;
   color: #445361;
   display: block;
   height: 40px;
   width: 80px;
   font-size: 1.2rem;
   margin-top: 10px;
   }"

### Validator Teting

I deployed it multiple times to reflect on my work.

I used the below validator by entering the code manually: 

For HTML, [Click](https://validator.w3.org/#validate_by_input)

This returned 4 errors with my buttons, but the page still works as desired so I did not remedy issues. 

For CSS, [](https://jigsaw.w3.org/css-validator/#validate_by_input) 

There were no issues found 

Ultimately, I still have a passable accessibility score.


### Credits

Icons: FontAwesome 

Fonts: Google Fonts

License: This project is licensed under the MIT License - see the LICENSE.md file for details.

I used the Code Institute guides and materials exhaustively. 

I often used the Slack channel to see other students' tips on fixing issues and Googled problems, relying on such blogs as W3Schools, StackOverflow, and MDNWebDocs

