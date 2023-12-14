var timerElement = document.getElementById('timer');
var passageContainer = document.getElementById('passage-container');
var quizContainer = document.getElementById('quiz-container');
var timer;
var timerSeconds = 5; // 5 minutes

function startTimer() {
    timer = setInterval(function () {
        timerSeconds--;
        var minutes = Math.floor(timerSeconds / 60);
        var seconds = timerSeconds % 60;
        timerElement.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        if (timerSeconds <= 0) {
            clearInterval(timer);
            passageContainer.style.display = 'none';
            quizContainer.style.display = 'block';
            displayQuestion();
        }
    }, 1000);
}

startTimer();


