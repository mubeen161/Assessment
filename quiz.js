var questionBank = [
    {
        question: 'What is the primary purpose of the tunnels under the surface of the Moon, as mentioned in the passage?',
        option: ['Transportation routes', 'Storage facilities', 'Cozy homes for living things', 'Geological research sites'],
        answer: 'Cozy homes for living things'
    },
    {
        question: "What role does water play on the Moon, according to the passage?",
        options: ["Fuel for lunar exploration", "Protection against extreme temperatures", "Potential support for life and space exploration", "Source of energy for Moon bases"],
        answer: "Potential support for life and space exploration"
    },
    {
        question: "What is unique about hydrothermal vents in the deep sea?",
        option: ["They emit intense light", "They rely on sunlight for energy", "They host life using chemicals instead of sunlight", "They are devoid of any life forms"],
        answer: "They host life using chemicals instead of sunlight"
    },
    {
        question: "Why is the deep sea described as an 'unusual place' in the passage?",
        option: ["It lacks diverse marine life", "It has extremely high temperatures", "It experiences constant sunlight", "It features intense pressure, darkness, and freezing temperatures"],
        answer: "It features intense pressure, darkness, and freezing temperatures"
    },
    {
        question: "What is the significance of the Moon's poles, according to scientists?",
        option: ["They are potential landing sites for lunar bases", "They contain hidden ice, crucial for life and exploration", "They are rich in valuable minerals", "They are ideal for studying ancient volcanic activity"],
        answer: "They contain hidden ice, crucial for life and exploration"
    },
    {
        question: "What percentage of Earth's oceans remains unexplored, as mentioned in the passage?",
        option: ["50%", "60%", "70%", "Over 80%"],
        answer: "Over 80%"
    },
    {
        question: "What could the Moon tunnels protect living things from?",
        option: ["Solar flares", "Extreme temperatures and cosmic radiation", "Meteor showers", "Lunar earthquakes"],
        answer: "Extreme temperatures and cosmic radiation"
    },
    {
        question: "In what way do hydrothermal vents host life in the deep sea?",
        option: ["Through photosynthesis", "By relying on moonlight", "Using chemicals instead of sunlight", "By extracting nutrients from the surrounding rocks"],
        answer: "Using chemicals instead of sunlight"
    },
    {
        question: "What is the potential game-changer mentioned in the passage for future space exploration?",
        option: ["Discovery of Moon tunnels", "Hidden ice at the Moon's poles", "Exploration of Earth's deep sea", "Uncovering giant sea beings"],
        answer: "Hidden ice at the Moon's poles"
    },
    {
        question: "What metaphor is used to describe the interconnected nature of the ocean's ecosystem?",
        option: ["A vast desert", "A complex family", "A lonely island", "A chaotic battlefield"],
        answer: "A complex family"
    }
];

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}

function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    } else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);
}

function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        if (score >= 7) {
            points.innerHTML = 'You are a fast-paced learner. Your ability to learn rapidly is remarkable.';
        } else if (score > 5) {
            points.innerHTML = 'You are a moderate-paced learner. You are a learner with a moderate learning speed.';
        } else {
            points.innerHTML = 'You are a slow-paced learner. You take your time when learning.';
        }
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block';
    }
}

next.addEventListener('click', nextQuestion);


function checkAnswer() {
    // Pass the score as a URL parameter to capacity.html
    window.location.href = 'grid_pic.html';
}


displayQuestion();
