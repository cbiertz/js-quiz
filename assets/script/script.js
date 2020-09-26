var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('btnStart');
var questionsEL = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var fnameEl = document.getElementById("fname");
var feedbackEl = document.getElementById("feedback");

var questions = [
    new question ("Commonly used data types DO NOT include:", ["Strings", "Booleans", "Alerts", "Numbers"], "Alerts"),
    new question ("The condition in an if / else statement is enclosed within ____.", ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"], "Parentheses"),
    new question ("Arrays in JavaScript can be used to store ____.", ['Numbers and Strings', 'Other Arrays', 'Booleans', "All of the Above"], "All of the Above"),
    new question ("String values must be enclosed within ____ when being assigned to variables.", ["Commas", "Curly Brackets", "Quotes", "Parentheses"], "Quotes"),
    new question ("A very useful tool used during development and debugging for printing content to the debugger is:", ["JavaScript", "Terminal", "For Loops", "console.log"], "console.log"),
];

var exam = new quiz(questions);

//questions
function question (text, choices, answer) {
    this.text=text;
    this.choices = choices;
    this.answer = answer;
}

question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

//quiz controller

function quiz (problems) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

quiz.prototype.guess = function(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
        feedbackEl.textContent = "Correct!";
        this.score++;
    }else {
        feedbackEl.textContent = "Wrong!";
        timeLeft -= 15;
    }

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
  
   
    this.questionIndex++;
}


quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
    
function startQuiz() {
    document.getElementById("btnStart").addEventListener("click",function() {
        document.getElementById("start-page").hidden = true;
        document.getElementById("quiz").hidden = false;
    });

    startBtn.onclick = countdown;

    getQuestions();
}

function getQuestions() {
    if (exam.isEnded()) {
        setTimeout(() => {
        showScores();
        }, 1000);
    }
    else {
        setTimeout(() => {
        // show question
            var element = document.getElementById("question");
            element.innerHTML = exam.getQuestionIndex().text;

            // show choices
            var choices = exam.getQuestionIndex().choices;
            for (var i = 0; i < choices.length; i++) {
                var element = document.getElementById("choice" + i);
                element.innerHTML = choices[i];
                guess("ansBtn" + i, choices[i]);
            }
        }, 1000);
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        exam.guess(guess);
        getQuestions();
    }
}

function showScores() {
    var gameOverHtml = "<h1 >Result</h1>";
    gameOverHtml += "<div class='result-container'><div><h3 id='score'> Your Score: " + exam.score + "</h3></div> <div> <form> <label for='fname'> <h3>Enter your name!</h3></label> <div><input type='text' id='fname' name='fname'></div><button id='btnSub'>Submit</button></form></div></div>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var timeLeft= 60;
function countdown(){
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1){
            timerEl.textContent == timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}

startQuiz()




