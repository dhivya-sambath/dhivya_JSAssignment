let question1 = "What kind of language is Javascript";
let question2 = "Which of the following keywords is used to define a variable in Javascript?";
let question3 = "Which of the following methods is used to access HTML elements using Javascript?";
let question4 = "How can a datatype be declared to be a constant type?";

function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function(answer){
    if(this.getQuestionByIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded= function(){
    return this.questionIndex == this.questions.length;
}

Question.prototype.isCorrectAnswer = function(choice){
    return this.answer == choice;
}

function loadQuestions(){
    if(quiz.isEnded()){
        this.showScores();
    }
    else{
        let questionTextual = document.getElementById('question');
        questionTextual.innerText = quiz.getQuestionByIndex().text;
        let choices = quiz.getQuestionByIndex().choices;
        console.log(choices);
        for(var i=1; i <= choices.length;i++){
            var element = "choice" + i;
            let currentCh = document.getElementById(element);
            currentCh.innerText = choices[i-1];
            handleOpt(i,choices[i-1]);
        }
        showProgress();
    }
}

function handleOpt(i,choice){
    var btnele = "btn" + i;
            let currentBtn = document.getElementById(btnele);
            currentBtn.onclick = function(){
                quiz.checkOptionWithAnswer(choice);
                loadQuestions();
            };
}

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
};

function showScores(){
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your scores:" + quiz.score + ".And mark percentage is:"
    + (quiz.score/quiz.questions.length*100)+"%"+"</h2>";    
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

let questions = [
     new Question(question1,["Object-oriented","Object-based","Procedural","None of the above"],"Object-oriented"),
     new Question(question2,["var","let","Both A and B","None of the above"],"Both A and B"),
     new Question(question3,["getElementById","getElementsByClassName","Both A and B","None of the above"],"Both A and B"),
     new Question(question4,["const","var","let","constant"],"const"),
];

let quiz = new Quiz(questions);


loadQuestions();




