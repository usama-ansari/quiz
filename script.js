var questions = [
    {
        question: "SQL stands for:",
        choices:["Structured Query Language","Standard Query Language","Styled Query Language"],
        correctAnswer: 0
    },
    {
        question: "What command is used to create a new table in SQL",
        choices:["Create table","Build table","Generate table"],
        correctAnswer: 0
    },
    {
        question: "DDL stands for:",
        choices:["Data Deal Language","Data Definition Language","Data Manipulation Language"],
        correctAnswer: 1
    },
    {
        question: "Which of the following commands is used to delete all rows and free up space from a table?",
        choices:["TRUNCATE","DROP","DELEETE"],
        correctAnswer: 0
    },
    {
        question: "What does the following statement in SQL do? DROP TABLE student;",
        choices:["Creates a table called student","Modify the table called student","Delete a table called student"],
        correctAnswer: 2
    }
];

var currentQuestion = 0,
correctAnswer =0, 
quizOver = false;

$(document).ready(function(){
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click",function(){
        if(!quizOver){
            value = $("input[type='radio']:checked").val();
            if(value==undefined){
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            }else{
                $(document).find(".quizMessage").hide();
                if(value == questions[currentQuestion].correctAnswer){
                    correctAnswer++;
                }
                currentQuestion++;
                if(currentQuestion < questions.length ){
                    displayCurrentQuestion();
                }else{
                    // displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver= true;
                }

            }

        }else{
            quizOver= false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();

        }

    });

});

function displayCurrentQuestion(){

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);
    $(choiceList).find("li").remove();

    var choice;
    for( let i=0; i<numChoices; i++){
        choice = questions[currentQuestion].choices[i];
        $('<li><input type = "radio" value' + i + ' name = "dynradio"/>'+ choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswer = 0;
    hideScore();

}


function displayScore(){
    console.log(correctAnswer);
    $(document).find(".quizContainer > .result").text("Correct Answer is:" + correctAnswer);
    $(document).find(".quizContainer > .result").show();
}

function hideScore(){
    $(document).find(".result").hide();
}