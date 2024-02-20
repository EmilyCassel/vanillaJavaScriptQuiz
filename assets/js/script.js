const = require("./questions.js");


let currentQuestion = 0; 



function showQuestion(){};

function beginQuiz(){
    let begbtn = document.getElementById("begbtn");

    begbtn.classList.add("hide");
    questions.classList.remove("hide");
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question){
   ques.innerText = questions.question
   
   question.options.forEach(answer => {
    const ansbtn = document.createElement("ansbtn")
    ansbtn.innerText = answer.text;
    if(answer.correct){
        ansbtn.dataset.correct = answer.correct;     
    }
    ansbtn.addEventListener("click", selectOption); 
  
   })
}



function answerQuestion(){
    
}



var timer; 

let timeLeft = 10;



function stopQuiz(){
  
    console.log("quiz listen")
};


function beginTimer(){
    let timeCountElement = document.getElementById("timeCount"); 

  timer = setInterval(function(){ 

    timeCountElement.textContent = "Time Left: " + timeLeft + " seconds";

    if(timeLeft === 0){
        timeCountElement.textContent = "Quiz Over"
        clearInterval(timer);
        stopQuiz();
    }
    timeLeft--;

console.log(timeLeft)
  }, 1000);
}; 


begbtn.addEventListener("click", beginTimer);


let nxtbtn = document.getElementById("nxtbtn");
nxtbtn.addEventListener("click", nextQuestion);


let ansbtn = document.getElementById("ansbtn");


document.getElementById("ques").innerText = questions.question



console.log(document.getElementById("begbtn"))

console.log(document.getElementById("nxtbtn"))



