var startButton = document.querySelector("#homeScreen button");
var goButton = document.querySelector(".goButton button");
var disclaimerBox = document.querySelector(".disclaimerBox");


// If start Button is clicked 
startButton.addEventListener("click", function(){
    disclaimerBox.classList.add("triggered")
})