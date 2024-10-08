


# Memory Number Game



## Description
This project is a web-based memory number game where users are presented with a random 9-digit number for a specific amount of time and then must recall and input the number correctly. The game aims to test and improve the user's visual numerical memory. Based from a game my mother created for me as a child, it is aimed at those who want to improve their memory and get creative with how they do so. But, also, it serves as a great tool to show how JavaScript can be used and implemented.

![contact image](assets/images/fullscreenshot.png)

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

![contact image](assets/images/logoheader.png)

### Game section

This section will allow you to interact with the game, using the different timer buttons. The user, or player, will be able to set the time of how long they get to see the number which they have to remember. It sounds easy, but try doing it for 15 seconds up to 99 times in a row. 

![contact image](assets/images/buttons.png)

### Answer section

The answer box then appears after the timer is over and this is where you need to input the number. Yes, you could cheat and copy the number and input that to the box, but where would the Fun be in that? So, I stopped that with some CSS. 

![contact image](assets/images/AnswerboxButtonZoom.png)

### Score section  

This is where the user sees their scores. 99 is the goal of course . 

![contact image](assets/images/FullPagePopUp.png) 
   
## Usage

A) Click on one of the time buttons (60, 45, 30, 15 seconds).

B) Memorize the 9-digit number that appears.

C) Enter the number in the answer box after the time elapses.

D) Click the "Submit Answer" button to check your answer.

E) The game will keep track of your correct and incorrect answers.


### Code References

JavaScript Event Listeners and DOM Manipulation:

 - Referenced from MDN Web Docs for handling button clicks and updating DOM elements.

 ```
 document.addEventListener("DOMContentLoaded", function() {
 });
```

 Generating Random Numbers without Repetition:
 
 - Referenced from W3Schools JavaScript Random for generating unique random numbers.

 ```
   function generateRandomNumber() {
   const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   let number = '';
   while (number.length < 9) {
   const randomIndex = Math.floor(Math.random() * digits.length);
   number += digits.splice(randomIndex, 1);
   }
   return number;
   } 
```

HTML and CSS structure:

- Referenced from W3Schools HTML and W3Schools CSS for creating the basic layout and styling of the webpage.
 
 ```
  <div class="game-area">
  <div class="controls-area">
  </div>
  <div class="question-area">
  <span>What was the order?</span>
  <p class="answer-message">Enter Answer:</p>
  <input id="answer-box" type="number" disabled>
  </div>
  <button data-type="submit" class="btn btn--gray">Submit Answer</button>
  </div>"
```

```
   #answer-box {
   border: 1px solid #445361;
   color: #445361;
   display: block;
   height: 40px;
   width: 80px;
   font-size: 1.2rem;
   margin-top: 10px;
   }
```

### Validator Teting

I deployed it multiple times to reflect on my work.

I used the below validators: 

For HTML, [Click](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdavidkilty.github.io%2FProjectSubmission2.0%2F)

The button section of code had been built from the code I learned with my latest project at CodeInstitute. Originally, this returned 4 errors with my buttons, that Divs could not be children of buttons. So I changed the Divs inside the buttons to Spans. 

For CSS, [Click](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdavidkilty.github.io%2FProjectSubmission2.0%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

There were no issues found 

For JS, [Click](https://jshint.com/)

There are 7 functions in this file.
Function with the largest signature take 1 arguments, while the median is 0.
Largest function has 16 statements in it, while the median is 9.
The most complex function has a cyclomatic complexity value of 3 while the median is 1.


## User Feedback

After receiving feedback from a user, they said "However, there is a bug where users can click the submit button without selecting a timer, incorrectly showing the 
message "That was right" and increasing the correct score'. This can be seen in the capture below". 
However, after testing again by deploying and using the final product, I could not see it. However, I could see an incorrect answer being recorded when pressing the submit 
button without selecting a timer. So, I edited the JS Code to make these buttons only responsive after timer buttons had been chosen and making them unresponsive once the 
answer had been submitted.  

Another piece of user feedback was "Additionally, there's a performance issue where users can repeatedly click the timers, causing the "Answer Box" to be rendered multiple 
times.  Users should be allowed to click the timer only once per question". This was a feature I intended as you can change the length of time you selected for the challenge. 
However, taking on user feedback I have also frozen the timer buttons responsiveness once a timer has been selected. 


## Deployment

 The site was deployed to GitHub pages. The steps to deploy are as follows: 
 
  A) In the GitHub repository, navigate to the Settings tab


  B) From the source section drop-down menu, select the Master Branch


  C) Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here https://github.com/DavidKilty/ProjectSubmission2.0.git

### Credits

Icons: FontAwesome 


Fonts: Google Fonts


License: This project is licensed under the MIT License - see the LICENSE.md file for details.


I used the Code Institute guides and materials exhaustively. I often used the Slack channel to see other students' tips on fixing issues and Googled problems, relying on such blogs as W3Schools, StackOverflow, and MDNWebDocs

