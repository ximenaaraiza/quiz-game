//this array will store all the infomation about questions and answers
const questions = [
    //there is an object for each questiona and answers 
   {
     question:"which is most expensive?",
        answers:[
        //the answers are stored in an array of objects that contain each option with the class
       //  of weather they are true or not 
            {option:"Milani",correct:false},
            {option:"elf",correct:false},
            {option:"TooFaced",correct:false},
            {option:"NARS",correct:true},
        ]
    },

    {
        question:"Which is the most popular?",
        answers:[
            {option:"MAC",correct:true},
            {option:"Dior",correct:false},
            {option:"LOreal", correct:false},
            {option:"Fenty",correct:false},
        ]
    },
     
    {
        question:"Which is the most bought eye cosmetic?",
        answers:[
            {option:"Eyeliner",correct:false},
            {option:"EyeShadow",correct:false},
            {option:"Mascara",correct:true},
            {option:"FalseLashes",correct:false},
        ]
    },

    {
        question:"which is crultey free?",
        answers:[
            {option:"Milk",correct:true},
            {option:"Benefit",correct:false},
            {option:"MAC",correct:false},
            {option:"NARS",correct:false},
        ]
    },

    {
        question:"which is the least incluisive?",
        answers:[
            {option:"YSL",correct:false},
            {option:"Tarte",correct:false},
            {option:"Armani",correct:false},
            {option:"BeautyBlender",correct:true},
        ]
    },

    {
        question:"Which is the best drugstore brand?",
        answers:[
            {option:"BeasutyPie",correct:true},
            {option:"elf",correct:false},
            {option:"NYX",correct:false}, 
            {option:"Glossier",correct:false},
        ]
    },

    {
        question:"Which is the best highend brand?",
        answers:[
            {option:"YSL",correct:false},
            {option:"TooFaced",correct:false},
            {option:"Dior",correct:true},
            {option:"Fenty",correct:false},
        ]
    },

    {
        question:"which is the overall most used makeup product?",
        answers:[
            {option:"Foundation",correct:false},
            {option:"Mascara",correct:true},
            {option:"Lipstick",correct:false},
            {option:"Blush",correct:false},
        ]
    },

    {
        question:"Which is the most popular makeup store?",
        answers:[
            {option:"Sephora",correct:true},
            {option:"Ulta",correct:false},
            {option:"TheCosmeticCo",correct:false },
            {option:"SallysBeauty",correct:false},
        ]
    },
    {
        question:"Which is the richest makeup brand?",
        answers:[
            {option: "Maybelline", correct:false},
            {option: "LOreal", correct: true},
            {option:"Revlon",correct:false},
            {option:"WetnWild", correct:false},
        ]
    }
]

//varibales being created 
let score= document.getElementById("score");
let everyThingDiv= document.getElementById("everything");
let next = document.getElementById("next");
let questionBox= document.getElementById("question");
const buttonOption =document.querySelectorAll(".option");
let currentQuestion = 0;
let questionInfo = questions[currentQuestion];
let points = 0;
let optionsClicked= false;

//this function will change the question displayed on the screen and changes the content of each button
//the options clicked also become/ stays false at the end when it loads so you are allowed to click an option 
function loadQuestion(){
     questionInfo = questions[currentQuestion];
    questionBox.innerText=questionInfo.question;
    for(let i = 0;i<questionInfo.answers.length;i++){
     buttonOption[i].innerText=questionInfo.answers[i].option;
    optionsClicked=false;
}
}

//this function will allow you to change the question
//it changes the color back to the pink reload the next questiona and options 
function nextQuestion(){
    for(let i = 0; i< buttonOption.length;i++){
        buttonOption[i].style.backgroundColor = "rgb(254, 218, 255)"
    }  
       console.log("next question")
    currentQuestion++;
    if(currentQuestion < 10){
    loadQuestion();
    }
    //when you reach the end and there are no more questions to load this will call the function to display your score
    else{
        displayScore();
    }
}

//this function will check whether you clicked a answer that was true or flase 
function checkAnswer(event){
    let buttonClicked = event.target;
    let index = -1;
    for(let i = 0; i< questionInfo.answers.length;i++){
        if(buttonClicked.innerText===questionInfo.answers[i].option){
            index = i;
        }
    }
    let optionObject = questionInfo.answers[index];
    console.log(optionObject)  
    if(!optionsClicked){
        if(optionObject.correct=== true){
         // for everytime you click an answer that is classified as true
         // and turns green we add one to the points varibale 
            points++;
            //turns button green if correct
            buttonClicked.style.backgroundColor = "green"; 
        }
        else{
            //turns button red if incorrect
            buttonClicked.style.backgroundColor = "red";
        }
        //at the end after clicked one button wethere false or true, the option clicked varible has to turn true
        //when  it is true it will no longer let you click for answers since it knows you already selected an answer
        optionsClicked = true;
    } 
}

//this functon will be for after you are done with the questiosn and finish the quiz in order to display score 
function displayScore(){
 //this will make it so that the buttons and question inside the div will not display when you reach the end and hit next
  everyThingDiv.style.display = "none";
  //this will make it so that the p element that is hiddent during the duration of the game appears when the buttons unappear
  score.style.display = "block"
  //this edits what is in the p element made for the score, you add the variable points to the text in order to diplay the
  //points that were being added everytime you clicked an answet that was classified as true
  score.innerText= "Your score is:" + points + "/10"
  console.log("Printed score!");

}



loadQuestion();
//makes the button for next question work 
next.addEventListener("click", nextQuestion); 
//makes checkanswer run after you click an option button 
for(let i = 0; i< buttonOption.length;i++){
    buttonOption[i].addEventListener("click", checkAnswer);
}