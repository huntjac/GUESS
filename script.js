let DoTheThing = function () {

    // computer selects a number


/* Loops have san parts : Control variable , control boolean expression , control increment decrement update

    Control variable - controls when loop activates
    control boolean- expression - boolean expression using the control variable that should at some point evaluate to false
    control update- assigning a new value to the control variable inside the loop so that the boolean expression eventually evaluates to false
 */
    let restart = "Yes";
    while (restart === "Yes"){
        let computerNumber = Math.floor((Math.random()*10)+1);
        alert(computerNumber);
        // Alerts to get your guess
        let playersGuess =  parseInt(prompt("Guess a number between 1 and 10."), 10);
        while (playersGuess !== computerNumber){
        if(playersGuess > computerNumber ){
            playersGuess = parseInt(prompt("Too high, go again") , 10);
        }else
            playersGuess = parseInt(prompt("too low , go again."), 10);

        restart = prompt("Would you like to play again? Type 'Yes' or 'No'")
    }

    // compares guess to actual number
    // if higher - tells you that it is too high then get guess
    // if lower - alert low guess the get guess
    // if equal - alert win then ask if they want to restart
    // yes = repeat
    // no = immanent death
}};

let DoTheOtherThing = function () {

    //SAME PROGRAM WITH A DO WHILE LOOP
    let restart;
    let playersGuess;
    do{
        let computerNumber = Math.floor((Math.random()*10)+1);
        do{
            if(playersGuess > computerNumber ){
                playersGuess = parseInt(prompt("Too high, go again") , 10);
            }else
                playersGuess = parseInt(prompt("too low , go again."), 10);

        }while(playersGuess !== computerNumber);

        restart = prompt("Would you like to play again? Type 'Yes' or 'No'");

    }while (restart === "Yes");


};