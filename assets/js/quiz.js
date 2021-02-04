
//Functions
function setQuiz(){
    //variable to store the HTML output
    const output = [];
    //for each question
    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //variable to store list of possible answers
            const answers = [];
            //and for each available answer
            for(letter in currentQuestion.answers){
                //add an HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value ="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            //add question and its answers to output
            output.push(
                `<div class="slide">
                   <div class="question"> ${currentQuestion.question} </div>
                   <div class="answers"> ${answers.join("")} </div>
                </div>`
            );
        }    
   );
    //combine output list into one string of HTML to put on the page
    
    quizContainer.innerHTML = output.join('');

}

function showResults(){
    //answer containers
    const answerContainers = quizContainer.querySelectorAll('.answers');
    // track user's answers
    let numCorrect = 0;
    //each question
    quizQuestions.forEach(
        (currentQuestion, questionNumber) =>{
            //find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            //if answer is correct
            if(userAnswer === currentQuestion.correctAnswer){
                numCorrect++;
                //color the answers green
                answerContainers[questionNumber].style.color='green';
            }
            //if answer is wrong
            else{
                //color the answers red
                answerContainers[questionNumber].style.color='red';
            }
        }
    );
    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
        previousButton.style.display = 'none';
    }
    else{
        previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide (){
    showSlide(currentSlide + 1);
}
function showPreviousSlide (){
    showSlide(currentSlide - 1);
}


/*function restartQuiz () {
    showSlide(currentSlide);
}*/

//Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const progressText = document.querySelector('#progressText');
const progressBarFull = document.querySelector('#progressBarFull');
const submitButton = document.getElementById('submit');
//const restartButton = document.getElementById("restart");
let questionCounter = 0;
const quizQuestions = [
    {
        question: "The following are continents of the world except?",
        answers: {
            a: "Europe",
            b: "Africa",
            c: "Chile"
        },
        correctAnswer: "c"
    },
    {
        question: "In what part of the world is Canada?",
        answers: {
            a: "Asia",
            b: "North America",
            c: "Europe"
        },
        correctAnswer: "b"
    },
    {
        question: "Who is the president of the United states of America?",
        answers: {
            a: "Donald Trump",
            b: "Bill Clinton",
            c: "Joe Biden"
        },
        correctAnswer: "c"
    },
    {
        question: "How many member states presently constitute the EU?",
        answers: {
            a: "27",
            b: "29",
            c: "28"
        },
        correctAnswer: "a"
    },
    {
        question: "Angela Merkel is the Chancellor of what country?",
        answers: {
            a: "Spain",
            b: "Germany",
            c: "Italy"
        },
        correctAnswer: "b"
    },
    {
        question: "Where in the world is the famous Safari Park?",
        answers: {
            a: "Kenya",
            b: "Tokyo",
            c: "Namibia"
        },
        correctAnswer: "a"
    },
    {
        question: "The only english speaking EU member state is?",
        answers: {
            a: "France",
            b: "Switzerland",
            c: "Ireland"
        },
        correctAnswer: "c"
    },
    {
        question: "Which country is the most populated in the world",
        answers: {
            a: "India",
            b: "China",
            c: "Ireland"
        },
        correctAnswer: "b"
    },
    {
        question: "The popular 2015 Paris agreement is a treaty on?",
        answers: {
            a: "gender equality",
            b: "immigration",
            c: "climate change"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the listed reserve currencies is mostly used in global trades?",
        answers: {
            a: "US Dollar",
            b: "Euro",
            c: "Rand"
        },
        correctAnswer: "a"
    },
];
  //progress bar
const MAX_QUESTIONS = 10;
function updateProgressBar () {
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
}
updateProgressBar();


//Display quiz
setQuiz();

//Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
//Show first slide
showSlide(currentSlide);

//Event Listeners
submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
//restartButton.addEventListener("click", setQuiz);
