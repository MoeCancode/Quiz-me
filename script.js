var startButton = document.querySelector("#homeScreen button");
var goButton = document.querySelector(".goButton button");
var disclaimerBox = document.querySelector(".disclaimerBox");
var questionBox = document.querySelector(".questionBox");
var homeScreen = document.querySelector("#homeScreen");

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
    displayQuestions();
 })


 var startingQuestionCount = 0;
  
 //function that displays questions
    function displayQuestions(num) {
        var questionNumber = document.querySelector(".questionNumber");
        questionNumber.innerHTML = '<h2>' + content[num].questionNumber + '</h2>';
        
        var questionText = document.querySelector(".questionStatement");
        questionText.innerHTML = '<span>' + content[num].question + '</span>';

        var optionOne = document.querySelector("")
  }


//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
 //Creating an array of objects to store values for questions and options

 var content = [
     {
         questionNumber: 'Question 1',
         question: "What does '===' mean in javascript?",
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
        options: [
            "Traverse the DOM",
            "Add event listeners",
            "Charge your laptop",
            "Change the size of a cat picture"
        ]
    }
 ]