let questions = [
    {
        question: `Does this look like a game to you?`,
        choiceA: `Yes it does.`,
        choiceB: `No it doesn't`,
        choiceC: `I can't tell`,
        choiceD: `Don't ask me!`,
        correct: `A`
    },{
        question : `What are you, an idiot?`,
        choiceA: `Yes I am.`,
        choiceB: `No I'm not.`,
        choiceC: `Hey, fuck you!`,
        choiceD: `I don't know.`,
        correct: `C`
    },{
        question : `How many burgers can Randy Eat?`,
        choiceA: `1-2`,
        choiceB: `2-3`,
        choiceC: `3-4`,
        choiceD: `10`,
        correct: `D`
    },{
        question : `What is Lahey's current job?`,
        choiceA: `Police officer`,
        choiceB: `Prostitue`,
        choiceC: `Drug dealer`,
        choiceD: `Trailer Park Supervisor`,
        correct: `D`
    },{
        question : `What grade does Ricky have?`,
        choiceA: `Grade 9`,
        choiceB: `Grade 10`,
        choiceC: `Grade 11`,
        choiceD: `Grade 12`,
        correct: `B`
    },{
        question : `Who is Cory's best friend?`,
        choiceA: `Jacob`,
        choiceB: `Lucy`,
        choiceC: `Trevor`,
        choiceD: `Julien`,
        correct: `C`
    }

]


var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('btnStart');

function countdown(){
    var timeLeft= 90;

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

startBtn.onclick = countdown;


document.getElementById("btnStart").addEventListener("click",function() {
    document.getElementById("start-page").hidden = true;
    document.getElementById("quiz").hidden = false;
});