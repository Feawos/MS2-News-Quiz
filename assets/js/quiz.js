
//Functions
function setQuiz(){
    //variable to store the HTML output
    var output = [];
    //for each question
    quizQuestions.forEach(currentQuestion, questionNumber => {
            //variable to store list of possible answers
            var answers = [];
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

function showResults(){}

//Variables
let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');
let quizQuestions = [
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

//Display quiz
setQuiz();

//Show results on submit
submitButton.addEventListener('click', showResults);
