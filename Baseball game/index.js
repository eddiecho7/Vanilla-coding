var attempt = 0;


function startButton() {
    var startBtn = document.createElement("button");
    startBtn.innerHTML = "START";
    startBtn.id = "start";
    document.querySelector(".game").appendChild(startBtn);
    startBtn.onclick = function () {
        startBtn.remove();
        generateAns();
        generateInput();
    }
}

function generateAns() {
    do {
        ans = [digitGenerator(), digitGenerator(), digitGenerator()]
    } while (ans[0] === ans[1] || ans[1] === ans[2] || ans[0] === ans[2])
}

function digitGenerator() {
    digit = Math.floor(Math.random()* 10);
    return digit;
}

function generateInput() {
    //generate input box and button
    var inputBox = document.createElement("input");
    inputBox.id = "inputBox";
    document.querySelector(".game").appendChild(inputBox);
    inputBox.placeholder = "Input your guess as 3 digit number"
    
    //upon entering press, check user guess and generate result table and restart button
    inputBox.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            if (document.querySelector("#result") === null) {
                generateHeader();   
            } 
            if (document.querySelector("#restart") === null) {
                generateRestart();
            }
            checkGuess();
            window.scrollTo(0,document.body.scrollHeight);
        }
    });
}

function generateRestart() {
    var restart = document.createElement("input");
    restart.type = "submit";
    restart.value = "Restart";
    restart.id = "restart";
    document.querySelector(".game").insertBefore(restart, document.querySelector("#result"));
    restart.onclick = function () {
        removeElements();
        startButton();
    }
}


function generateHeader() {
    //generate results table
    var result = document.createElement("table");
    result.id = "result";
    document.querySelector(".game").appendChild(result);
    var resultHeader = ["Attempt","Strike","Ball"];
    var thead = document.createElement("thead");
    result.appendChild(thead);
    for(var i = 0; i < resultHeader.length; i++){
        thead.appendChild(document.createElement("th")).appendChild(document.createTextNode(resultHeader[i]));
    }
}

function checkGuess() {
    guess = document.querySelector("#inputBox").value.split("");
    if (guess.length !== 3) {
        alert("Please input 3-digit number");
    }
    else if (isNaN(parseInt(guess[0])) || isNaN(parseInt(guess[1])) || isNaN(parseInt(guess[2]))) {
        alert("Please include number only");
    }
    else if (parseInt(guess[0]) === parseInt(guess[1]) || parseInt(guess[0]) === parseInt(guess[1]) || parseInt(guess[1]) === parseInt(guess[2])) {
        alert("Please input distinct number as digits");
    }
    else {
        //convert guess from string to number
        for (i = 0; i < guess.length; i++) {
            guess[i] = parseInt(guess[i]);
        }
        runResult(guess);
    }
}

function runResult (guess) {
    var strike = 0; 
    var ball = 0;
    for (i = 0; i < guess.length; i++) {
        if (guess[i] === ans[i]) {
            strike++; 
        }
        for (j = 0; j < guess.length; j++) {
            if (i !== j && guess[j] === ans[i]) {
                ball++;
            }
        }
    }
    //Fill in guess result
    attempt = attempt + 1; 
    var row = document.querySelector("#result").insertRow(attempt - 1);
    row.insertCell(0).innerHTML = attempt;
    row.insertCell(1).innerHTML = strike; 
    row.insertCell(2).innerHTML = ball; 

    //End after 10 attempt
    if (strike === 3) {
        alert ("You Won!");
        removeElements();
        init();
    }
    else if (attempt > 10) {
        alert("Please try again");
        removeElements();
        init();
    }
}

function removeElements() {
    document.querySelector("#inputBox").remove();
    document.querySelector("#result").remove();
    document.querySelector("#restart").remove();
}

function init() {
    startButton();
}


/*
TO DO:
- Enhance UI / UX
    - Re-think user interface 
    - Add instructions

- Fix bugs
    - Doesn't work sometimes
    - Not show up restart and result if wrong input

- Refactor code
    - Add comments
    - Remove duplicates using arrays
    - Structure functions 
    
*/

