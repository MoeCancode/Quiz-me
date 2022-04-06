var startButton = document.querySelector("#homeScreen button");
var goButton = document.querySelector(".goButton button");
var disclaimerBox = document.querySelector(".disclaimerBox");
var questionBox = document.querySelector(".questionBox");
var homeScreen = document.querySelector("#homeScreen");
var resultBox = document.querySelector(".result");

// When start Button is clicked 
startButton.addEventListener("click", function(){
    console.log
    disclaimerBox.classList.add("triggerDisclaimer");
    homeScreen.classList.add("hideHS");
})

//When go button is clicked
goButton.addEventListener("click", function(){
    console.log("I was clicked");
    disclaimerBox.classList.remove("triggerDisclaimer");
    questionBox.classList.add("triggerQuestionBox");
    displayQuestions(0);
 })


 var startingQuestionCount = 0;
 var nextButton = document.querySelector(".footer button")

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
         resultBox.classList.add("triggerResultBox");

     }
 })

  
 //function that displays questions
    function displayQuestions(num) {
        
        //Update question number
        var questionNumber = document.querySelector(".questionNumber");
        questionNumber.innerHTML = '<h2>' + content[num].questionNumber + '</h2>';
        
        //Update Question statement
        var questionText = document.querySelector(".questionStatement");
        questionText.innerHTML = '<span>' + content[num].question + '</span>';

        //Update options
        var optionOne = document.querySelector("#one");
        var optionTwo = document.querySelector("#two");
        var optionThree = document.querySelector("#three");
        var optionFour = document.querySelector("#four");

        optionOne.innerHTML = '<span>' + content[num].options[0];
        optionTwo.innerHTML = '<span>' + content[num].options[1];
        optionThree.innerHTML = '<span>' + content[num].options[2];
        optionFour.innerHTML = '<span>' + content[num].options[3];
  }


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