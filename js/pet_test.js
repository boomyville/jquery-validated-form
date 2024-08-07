// Initialise some variables
//We store this information in an associative array
//This makes it a bit more modular and easier to add or remove questions
let questions = [
    "How much space do you have for a pet?", 
    "How much time can you dedicate to exercising your pet?",
    "How important is ease of grooming to you?",
    "What noise level is acceptable to you?",
    "How much interaction do you want from your pet?"
];

//In our quiz, the first option always corresponds with a pet score of 0, the second with 5 and the third with 10;
let scoreArray = [0, 5, 10];

let questionArray = [];
questionArray[questions[0]] = ["Very limited space (e.g., apartment)", "Moderate space (e.g., small house)", "Large space (e.g., spacious house with yard)"];
questionArray[questions[1]] = ["Very little time", "Some time each day", "A lot of time for daily exercise"];
questionArray[questions[2]] = ["Very important (prefer low-maintenance pets)", "Somewhat important (willing to groom regularly)", "Not important (willing to invest time in grooming)"];
questionArray[questions[3]] = ["Prefer a quiet pet", "Moderate noise is okay", "Don’t mind loud noises"];
questionArray[questions[4]] = ["Prefer a more independent pet", "Moderate interaction (some playtime and attention)", "Very interactive and affectionate pet"];

let answeredArray = []; // We initialise an array for responses answered by the user

let petScore = 0;
let name = "";
let phone = 0;
let email = "";
let age = 0;
let pet = "pet";

//================================================================================================================================================================

// Reset the form on web load
$(document).ready(function() {
    resetPage();
 }) 

 function resetPage() {
    //We use display: none or display: grid to hide or show relevant <div> elements
    //We use display over visibility as display: none removes the element from document flow 
    //This means we won't have whitespace when a <div> is made invisible
    //Instead of using a jQuery selector, we will use the method provided by vanilla javascript (its new in ES5)
    document.querySelector('#survey').style.display = "grid"; 
    document.querySelector('#result').style.display = "none"; 
    //Use jQuery instead:
    $("#userForm").hide();
    setQuestion(0);
 }

 function setQuestion(questionId = 0) {
    //QuestionId relates to the question to be asked to the user
    //We will set our form data using selectors
    $("label[for='question'").text(questions[questionId]);

    //Use jquery to get the question options and use eq() to get the <option> with values of 0,1 or 2
    $('#question option:eq(0)').text(questionArray[questions[questionId]][0]);
    $('#question option:eq(1)').text(questionArray[questions[questionId]][1]);
    $('#question option:eq(2)').text(questionArray[questions[questionId]][2]);
 }

function showScore() {
    document.querySelector('#survey').style.display = "none"; 
    document.querySelector('#result').style.display = "grid"; 
    let message = "Your pet score is: " + petScore;
    $("#score").text(message);
    //Show ideal pets
    getPet(Number(petScore));

}

function getPet(score) {
    if(score <= 10) {
        $('#image').attr('src', 'img/gecko.png');
        $('#image').fadeOut(0);
        $('#image').fadeIn(5000); // jQuery animation
        pet = "Gecko";
        $("#recommendation").text("The recommended pet based on your survey results is " + pet);
    } else if (score > 10 && score <=25 ) {
        $('#image').attr('src', 'img/cat.png');
        
        //jQuery animation
        opacityBounce();
        pet = "Cat on a M3 Macbook";
        $("#recommendation").text("The recommended pet based on your survey results is " + pet);
    } else {
        $('#image').attr('src', 'img/rabbit.png');
        pet = "Rabbit";
        //jQuery animation that makes the image move right then left
        $('#image').show(1000);
        $( "#image" ).animate({
            'margin-left': "+=50px"
          }, 1500 );
          
        $( "#image" ).delay(3000).animate({
            'margin-left': "-=50px"
          }, 1500 );

        $("#recommendation").text("The recommended pet based on your survey results is " + pet);
    }

    //Show form for getting user's details after 10000ms (10 seconds)
    $("#userForm").delay(10000).fadeIn();

    //Show a timer for the delayed showing of sign up form
    countdown(10);
}

//A recursive function to loop a countdown
function countdown(count) {
    msg = count == 1 ? "Please wait: " + count + " second..." : "Please wait: " + count + " seconds...";
    $("#error").text( msg);
    count--;
    if (count >= 0) {
      setTimeout(function() {
        countdown(count);
      }, 1000);
    } 
    if(count < 0) {
        $("#error").text("Please enter your details");

    }
}

//A recursive function just to do a looping animation
function opacityBounce() {
    $('#image').animate({ opacity: 0.5 }, 500).animate({ opacity: 1 }, 500, opacityBounce);
}

 //Replace default action of submit button
 //Using vanilla JS this time
 document.querySelector('#petScore').addEventListener('click', function(event) {
    event.preventDefault(); // Stop default action of petScore submit button
    //Calculate score, need to convert string to number for index of score value in score Array
    petScore +=  Number(scoreArray[Number(document.querySelector("select#question").value)]);

    //Change the question
    //The current index can be determined by getting the current question and finding its index in the questions array
    let index = questions.indexOf($("label[for='question'").text());
    
    if(questions.length - 1 > index) {
        setQuestion(index + 1);
    } else {
        //All questions ask, lets show the user their PET SCORE!
        showScore();
    }
});

//================================================================================================================================================================
//The validation stuff
//Each input has a event listener attached to it
//It will check if the input is valid
//HTML also comes with a required keyword to make sure inputs are not empty

document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();
    let check = checkValidation();
    if(check) {
        success(); //Show the confirmation screen
        //Disable all fields while the form slowly disappears
        
    document.getElementById('name').disabled  = true;
    document.getElementById('age').disabled   = true;
    document.getElementById('email').disabled = true;
    document.getElementById('phone').disabled = true;
    }
});

//For all inputs, add an event listener that runs code upon change
document.querySelectorAll('input').forEach(function(element) {
element.addEventListener('change', (event) => {
    event.preventDefault();
    checkValidation();
    });
});

function checkValidation() {
    
    console.log("Checking");
    boolean = false;

    let name = document.getElementById('name').value ;
    let age = document.getElementById('age').value ;
    let email = document.getElementById('email').value ;
    let phone = document.getElementById('phone').value ;

    //===============
    //Checking name
    //===============
    
    //	MUST NOT be empty
    if(name.length == 0) {
        showError("Please enter a name!");
    } //MUST be between 2 and 100 characters long
    else if (name.length < 2) {
        showError("One letter names are not valid!");
    } else if (name.length > 100) {
        showError("Your name is too long!");
    } //MUST only contain characters a-z (upper and lower case), - (hyphen), whitespace or ' (apostrophe)
    else if (!name.match(/^[a-zA-Z'-]+$/)) {
        showError("No numbers or special characters besides space or apostrophe or hyphen in names!")
    }

    //===============
    //Checking age
    //===============
    //MUST NOT be empty
    else if(age.length == 0) {
        showError("Please enter an age!");
    } //MUST be an integer value between 18 and 130
    else if(Number(age) < 18) { 
        showError("Adults only!");
    } else if (Number(age) > 130) {
        showError("Please give us your secrets to immortality!");
    } 

    //===============
    //Checking email
    //===============
    //MUST NOT be empty
    else if(email.length == 0) {
        showError("Please enter an email!");
    } //MUST be validated using an appropriate Regular Expression
    else if (!email.match(/^[a-zA-Z-]([\w-.]+)?@([\w-]+\.)+[\w]+$/)) {
        showError("Please enter a valid email!");
    }
    
    //===============
    //Checking phone number
    //===============
    //OPTIONAL: this field may be empty
    else if(phone.length !== 0) {
        if(isNaN(Number(phone))) {
            //Phone number is not a number
            showError("Please only enter digits for phone number");
        }
        //MUST be exactly 10 characters long
        else if(phone.length < 10) {
            showError("You are missing digits in your Australian mobile number");
        } else if(phone.length > 10){
            showError("You have added too many digits in your Australian mobile number");
        } else if (!phone.match(/^04/)) {
            showError("Your mobile number is not Australian; must start with 04");
        } else {
            showError("All required fields have been filled");    
        }
    }
    // User form passes all checks
    else {
        showError("All required fields have been filled");
        boolean = true;
    }
    return boolean;
}

function showError(msg) {
    $("#error").text(msg);
} 

function success() {
    //Gets rid of everything then shows a final message
    $("#error").fadeOut(5000);
    $("#result").fadeOut(5000);
    $("#userForm").fadeOut(5000);
    $("#message").delay(2500).fadeOut(2500);
    //$("#conclusion").css("display", "grid");
    $("#conclusion").fadeOut(0);
    $("#conclusion").delay(5000).fadeIn(2500);
    $("#conclusion").delay(5000).html("<h1>Congratulations</h1><p>We hope you like your " + pet + " " + document.getElementById('name').value + "!");
}