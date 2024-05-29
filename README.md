# Memory Number Game


## Description
This project is a web-based memory number game where users are presented with a random 9-digit number for a specific amount of time and then must recall and input the number correctly. The game aims to test and improve the user's visual numerical memory. Based from a game my mother created for me as a child, it was the best thing I could think of to create. It was built along sinde me doing my sample Love Maths project. As such it bares a lot of similarity to the sample project. 

### Installation
To install and run this project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/DavidKilty/ProjectSubmission2.0.git
2. Navigate to the project directory:
 cd ProjectSubmission2.0
3. Open index.html in your web browser.

   
## Usage

A) Click on one of the time buttons (60, 45, 30, 15 seconds).
B) Memorize the 9-digit number that appears.
C) Enter the number in the answer box after the time elapses.
D) Click the "Submit Answer" button to check your answer.
E) The game will keep track of your correct and incorrect answers.


### Code References

JavaScript Event Listeners and DOM Manipulation:

 - Referenced from MDN Web Docs for handling button clicks and updating DOM elements.
     
>  document.addEventListener("DOMContentLoaded", function() {
 
>  });
   
 Generating Random Numbers without Repetition:
 
 - Referenced from W3Schools JavaScript Random for generating unique random numbers.

>  function generateRandomNumber() {

>   const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

>   let number = '';

>   while (number.length < 9) {

>   const randomIndex = Math.floor(Math.random() * digits.length);

>   number += digits.splice(randomIndex, 1);

>   }

>   return number;

>  }


HTML and CSS structure:

- Referenced from W3Schools HTML and W3Schools CSS for creating the basic layout and styling of the webpage.
 

> <div class="game-area">
   
>   <div class="controls-area">
     
>  </div>

>  <div class="question-area">
   
>  <span>What was the order?</span>

>  <p class="answer-message">Enter Answer:</p>

>  <input id="answer-box" type="number" disabled>
 
>  </div>

>  <button data-type="submit" class="btn btn--gray">Submit Answer</button>

> </div>

> #answer-box {

>  border: 1px solid #445361;

>   color: #445361;

>   display: block;

>   height: 40px;

>   width: 80px;

>   font-size: 1.2rem;

>   margin-top: 10px;

> }

 
### Credits

Icons: FontAwesome / 
Fonts: Google Fonts / Permanent Marker 
License: This project is licensed under the MIT License - see the LICENSE.md file for details.

