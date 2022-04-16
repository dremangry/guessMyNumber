


$( document ).ready(function() {

    // difficulty drop down
    $("#difficulty-type").change(function(){
        displayStart()
        let difficultyType = $(this).val()

        if (difficultyType == "Very-easy") {
            $('.between').text("(Between 1 and 10)")
            $('.score').text('🔁')
        } else if (difficultyType == "Easy") {
            $('.between').text("(Between 1 and 10)")
            $('.score').text(easyTries)
        } else if (difficultyType == "Medium") {
            $('.between').text("(Between 1 and 100)")
            $('.score').text(easyTries)
        } else if (difficultyType == "Difficult") {
            $('.between').text("(Between 1 and 500)")
            $('.score').text(difficultTries)
        } else if (difficultyType == "Very-difficult") {
            $('.between').text("(Between 1 and 1000)")
            $('.score').text(vDifficultTries)
        } 
        
   


    })
// restart button
    $('.again').on("click", function(){
        displayStart()
        resetAll()
    })


    //this is the event listeners
    $('#check-form :button').on("click", function() {
        console.log('bingo');

        $('.message').text('Select a difficulty')

        let difficulties = $("#difficulty-type").val()

        checkDifficulties(difficulties)
    })
});

// variables of random number
let easyNumber = Math.trunc(Math.random() * 10) + 1;
let mediumNumber = Math.trunc(Math.random() * 100) + 1;
let difficultNumber = Math.trunc(Math.random() * 500) + 1;
let vDifficultNumber = Math.trunc(Math.random() * 1000) + 1;


// variables of the tries
let easyTries = 5
let difficultTries = 8
let vDifficultTries = 9


// messages
function displayStart() {
    $('.message').text('Start guessing...')
}
function displayNoNum() {
    $('.message').text('No number')
}
function displayToLow() {
    $('.message').text('To low')
}
function displayToHigh() {
    $('.message').text('To high')
}
function displayVictory() {
    $('.message').text('You won MATE!')
}
function displayLoss() {
    $('.message').text('You lost BRUH!')
}

// reset function
function resetAll() {
    $('body').css({"background-color": "#222"})
    $('.number').css({"width": "15rem"})
    $('.number').text('?')
    $('#difficulty-type').val('')
    $('.score').text('')
    $('#check-form :input').val('');
    $('.between').text('')

}


// difficulty selection
function checkDifficulties(difficulties) {
    switch(difficulties) {
        case "Very-easy":
            
            calcVeryEasy(difficulties)
            break;
        case "Easy":
            calcEasy(difficulties)
            break;

        case "Medium":
            calcMedium(difficulties)
            break;

        case "Difficult":
            calcDifficult(difficulties)
            break;

        case "Very-difficult":
            calcVeryDifficult(difficulties)
            break;
        
        default:
            break;
    }
}



// difficulties functions
function calcVeryEasy(difficulties) {

    // variables
    let guess = $('#guess').val()
    let numGuess = parseInt(guess)
    

    if (!numGuess) {
        displayNoNum()
    } else if (numGuess === easyNumber) {
        displayVictory()
        $('.number').text(easyNumber)
        $('body').css({"background-color": "#60b347"})
        $('.number').css({"width": "30rem"})

    } else if (numGuess > easyNumber) {
        displayToHigh()

    } else if (numGuess < easyNumber) {
        displayToLow()

    }
   
}

function calcEasy(difficulties) {
    // variables
    let guess = $('#guess').val()
    let numGuess = parseInt(guess)
    console.log(easyNumber);

    

    if (!numGuess) {
        displayNoNum()
    } else if (numGuess === easyNumber) {
        displayVictory()
        $('.number').text(easyNumber)
        $('body').css({"background-color": "#60b347"})
        $('.number').css({"width": "30rem"})

    } else if (guess !== easyNumber) {
        if (easyTries > 1) {
            guess > easyNumber ? displayToHigh() : displayToLow();
            easyTries--; //same as (score = score - 1)
          $('.score').text(easyTries)

        } else {
          displayLoss()
          $('.score').text(0)
        }
      }
}

function calcMedium(difficulties) {
     // variables
     let guess = $('#guess').val()
     let numGuess = parseInt(guess)
 
     
 
     if (!numGuess) {
         displayNoNum()
     } else if (numGuess === mediumNumber) {
         displayVictory()
         $('.number').text(mediumNumber)
         $('body').css({"background-color": "#60b347"})
         $('.number').css({"width": "30rem"})
 
     } else if (guess !== mediumNumber) {
         if (easyTries > 1) {
             guess > mediumNumber ? displayToHigh() : displayToLow();
             easyTries--; //same as (score = score - 1)
           $('.score').text(easyTries)
 
         } else {
           displayLoss()
           $('.score').text(0)
         }
       }
}

function calcDifficult(difficulties) {
    // variables
    let guess = $('#guess').val()
    let numGuess = parseInt(guess)
    console.log(difficultNumber);

    

    if (!numGuess) {
        displayNoNum()
    } else if (numGuess === difficultNumber) {
        displayVictory()
        $('.number').text(difficultNumber)
        $('body').css({"background-color": "#60b347"})
        $('.number').css({"width": "30rem"})

    } else if (guess !== difficultNumber) {
        if (difficultTries > 1) {
            guess > difficultNumber ? displayToHigh() : displayToLow();
            difficultTries--; //same as (score = score - 1)
          $('.score').text(difficultTries)

        } else {
          displayLoss()
          $('.score').text(0)
        }
    }
}

function calcVeryDifficult(difficulties) {
     // variables
     let guess = $('#guess').val()
     let numGuess = parseInt(guess)
     console.log(vDifficultNumber);
 
     
 
     if (!numGuess) {
         displayNoNum()
     } else if (numGuess === vDifficultNumber) {
         displayVictory()
         $('.number').text(vDifficultNumber)
         $('body').css({"background-color": "#60b347"})
         $('.number').css({"width": "30rem"})
 
     } else if (guess !== vDifficultNumber) {
         if (vDifficultTries > 1) {
             guess > vDifficultNumber ? displayToHigh() : displayToLow();
             vDifficultTries--; //same as (score = score - 1)
           $('.score').text(vDifficultTries)
 
         } else {
           displayLoss()
           $('.score').text(0)
         }
    }
}

