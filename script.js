var startButton = document.querySelector("#homeScreen button");
var goButton = document.querySelector(".goButton button");
var disclaimerBox = document.querySelector(".disclaimerBox");
var questionBox = document.querySelector(".questionBox");
var homeScreen = document.querySelector("#homeScreen");
var resultBox = document.querySelector(".result");
var countdownTimer = document.querySelector(".timeLeft p span");
var scoreDisplay = document.querySelector("#myScore span");
var nextButton = document.querySelector(".footer button")
var submitButton = document.querySelector("#highscoreForm button");
var viewScoresButton = document.querySelector("#scoresView");
var gallery = document.querySelector(".galleryBox");
var newGameButton = document.querySelector("#restart");

var timeScore = 60;


var optionOne = document.querySelector("#one");
var optionTwo = document.querySelector("#two");
var optionThree = document.querySelector("#three");
var optionFour = document.querySelector("#four");

var startingQuestionCount = 0;
 var counter;

// When start Button is clicked 
startButton.addEventListener("click", function(){
    disclaimerBox.classList.add("triggerDisclaimer");
    homeScreen.classList.add("hideHS");
})

//When go button is clicked
goButton.addEventListener("click", function(){
    disclaimerBox.classList.remove("triggerDisclaimer");
    questionBox.classList.add("triggerQuestionBox");
    startingQuestionCount= 0;
    displayQuestions(0);
    startCountdown(60);
 })

 

 //Click Next question to update value of num
 nextButton.addEventListener("click", function(){
     startingQuestionCount ++;
     
     if(startingQuestionCount < 2)
     displayQuestions(startingQuestionCount);
     
     else if (startingQuestionCount == 2) {
        displayQuestions(startingQuestionCount);
         nextButton.innerHTML = "End Quiz";
     }
     
     else {
         questionBox.classList.remove("triggerQuestionBox");
         clearInterval(counter);
         scoreDisplay.innerHTML = timeScore; 
         resultBox.classList.add("triggerResultBox");
         

     }
 })
 
 
 //Saving score to local storage --
 submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = document.getElementById("myName");
    localStorage.setItem(initials.value, timeScore);
 })

 //View highscores button functionality
 viewScoresButton.addEventListener("click", function() {
     resultBox.style.opacity = "0";
     resultBox.style.pointerEvents = "none";
     gallery.style.opacity = "1";
     gallery.style.pointerEvents = "auto";
     listScores();

 })

 //New game button functionality
 newGameButton.addEventListener("click", function() {
    window.location.reload();

 }) 

  
 //function that displays questions
    function displayQuestions(num) {
        
        //Cant press Next question unless you select an option
        nextButton.style.pointerEvents = "none";

        //Reset select styling for all options
        optionOne.style.backgroundColor = "rgb(253, 187, 143)";
        optionOne.style.color = "black";
        optionOne.style.pointerEvents = "auto";

        optionTwo.style.backgroundColor = "rgb(253, 187, 143)";
        optionTwo.style.color = "black";
        optionTwo.style.pointerEvents = "auto";

        optionThree.style.backgroundColor = "rgb(253, 187, 143)";
        optionThree.style.color = "black";
        optionThree.style.pointerEvents = "auto";

        optionFour.style.backgroundColor = "rgb(253, 187, 143)";
        optionFour.style.color = "black";
        optionFour.style.pointerEvents = "auto";

        
        //Update question number
        var questionNumber = document.querySelector(".questionNumber");
        questionNumber.innerHTML = '<h2>' + content[num].questionNumber + '</h2>';
        
        //Update Question statement
        var questionText = document.querySelector(".questionStatement");
        questionText.innerHTML = '<span>' + content[num].question + '</span>';

        //Update options
        

        optionOne.innerHTML = '<span>' + content[num].options[0];
        optionTwo.innerHTML = '<span>' + content[num].options[1];
        optionThree.innerHTML = '<span>' + content[num].options[2];
        optionFour.innerHTML = '<span>' + content[num].options[3];

        var optionList = document.querySelectorAll(".option");
        
        for(var i =0; i<4; i++)
        {
            optionList[i].setAttribute("onclick", "select(this)")
        }

  }


  function select(myAnswer) {
      var answerString = myAnswer.textContent;
      var correctAnswer = content[startingQuestionCount].answer
      
      if(correctAnswer == answerString) {
          nextButton.style.pointerEvents = "auto";
          myAnswer.style.backgroundColor = "rgb(79, 184, 77)";
          myAnswer.style.color = "white";
      }

      else {
          nextButton.style.pointerEvents = "auto";
          myAnswer.style.backgroundColor = "red";
          myAnswer.style.color = "white";
          timeScore = timeScore - 10;
          clearInterval(counter);
          countdownTimer.innerHTML = timeScore;
          startCountdown(timeScore);
      }

      //Disable selection of options after one is selected
      optionOne.style.pointerEvents = "none";
      optionTwo.style.pointerEvents = "none";
      optionThree.style.pointerEvents = "none";
      optionFour.style.pointerEvents = "none";

  }

  //Function that starts the timer

  function startCountdown(time) {
    counter = setInterval(function() {
        countdownTimer.textContent = time;
        timeScore--;
        time--;
    }, 1000)
  }

//   submitButton.addEventListener("click", function() {
//     localStorage.setItem(timeScore, initials.value);
// })


//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
 //Creating an array of objects to store values for questions and options

 var content = [
     {
         questionNumber: 'Question 1',
         question: "What does '===' mean in javascript?",
         answer: "Equal in value & type",
         options: [
             "Not equal",
             "Equal in value only",
             "Equal in type only",
             "Equal in value & type"
         ]
     },

     {
        questionNumber: 'Question 2',
        question: "What does the 'var' keyword represent in JS?",
        answer: "Variable",
        options: [
            "Varsity",
            "Variable",
            "Variance",
            "Variety"
        ]
    },

    {
        questionNumber: 'Question 3',
        question: "What can you NOT do using Javascript?",
        answer: "Charge your laptop",
        options: [
            "Traverse the DOM",
            "Add event listeners",
            "Charge your laptop",
            "Change the size of a cat picture"
        ]
    }
 ]