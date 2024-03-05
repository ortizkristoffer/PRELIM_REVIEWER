const questions = [
  {
    question: "These are the styles, systems, and practices in decoding symbols for better comprehension in communication, sharing of information and ideas.",
    answers: [
      { text: "Decoding", correct: false},
      { text: "Deriving", correct: false},
      { text: "Reading Techniques", correct: true},
      { text: "Cognitive Process", correct: false},
    ]
  },
  {
    question: "The process of thinking and remember.",
    answers: [
      { text: "Decoding", correct: false},
      { text: "Deriving", correct: false},
      { text: "Reading Techniques", correct: false},
      { text: "Cognitive Process", correct: true},
    ]
  },
  {
    question: "A process to recoginize and interpret information.",
    answers: [
      { text: "Cognitive Process", correct: false},
      { text: "Deriving", correct: false},
      { text: "Reading Techniques", correct: false},
      { text: "Decoding", correct: true},
    ]
  },
  {
    question: "A process to take, receive, or obtain something fron a specified source.",
    answers: [
      { text: "Cognitive Process", correct: false},
      { text: "Deriving", correct: true},
      { text: "Language Acquisition", correct: false},
      { text: "Decoding", correct: false},
    ]
  },
  {
    question: "A process by which humans acquire the capacity to perceive and comprehend language.",
    answers: [
      { text: "Cognitive Process", correct: false},
      { text: "Deriving", correct: false},
      { text: "Language Acquisition", correct: true},
      { text: "Decoding", correct: false},
    ]
  },
  {
    question: "Only get the main ideas and general overview of the content by rapidly moving the eyes over the text.",
    answers: [
      { text: "Cognitive Process", correct: false},
      { text: "Skimming", correct: true},
      { text: "Scanning", correct: false},
      { text: "Decoding", correct: false},
    ]
  },
  {
    question: "Finding specific information such as name, date, or fact withou reading the entire article.",
    answers: [
      { text: "Cognitive Process", correct: false},
      { text: "Skimming", correct: false},
      { text: "Scanning", correct: true},
      { text: "Decoding", correct: false},
    ]
  },
  {
    question: "Grouping of words that go together to mean something.",
    answers: [
      { text: "Phrase Reading", correct: true},
      { text: "Skimming", correct: false},
      { text: "Scanning", correct: false},
      { text: "Decoding", correct: false},
    ]
  },
  {
    question: "Also known as Chunking",
    answers: [
      { text: "Phrase Reading", correct: true},
      { text: "Skimming", correct: false},
      { text: "Scanning", correct: false},
      { text: "Decoding", correct: false},
    ]
  },
  {
    question: "Active process of thoughful and deliberate reading carried out to enhance one's comprehension and enjoyment of text.",
    answers: [
      { text: "Phrase Reading", correct: false},
      { text: "Skimming", correct: false},
      { text: "Scanning", correct: false},
      { text: "Deep Reading", correct: true},
    ]
  },
  {
    question: "Also known as Slow Reading",
    answers: [
      { text: "Phrase Reading", correct: false},
      { text: "Skimming", correct: false},
      { text: "Deep Reading", correct: true},
      { text: "Scanning", correct: false},
    ]
  },
  {
    question: "This are different perspective we consider when looking at a piece of literarture.",
    answers: [
      { text: "Phrase Reading", correct: false},
      { text: "Critical Approaches", correct: true},
      { text: "Scanning", correct: false},
      { text: "Reading Process", correct: false},
    ]
  },
  {
    question: "Language is not a stable entity, and that we can never exactly say what we mean.",
    answers: [
      { text: "Deconstuction", correct: true},
      { text: "New Cristism", correct: false},
      { text: "Marxist Criticism", correct: false},
      { text: "Feminist Criticism", correct: false},
    ]
  },
  {
    question: "Tries to correct predominantly male-dominated critical perspective with a feminist consciouseness.",
    answers: [
      { text: "New Historicism", correct: false},
      { text: "New Cristicism", correct: false},
      { text: "Marxist Criticism", correct: false},
      { text: "Feminist Criticism", correct: true},
    ]
  },
  {
    question: "A strongly politically-oriented criticism.",
    answers: [
      { text: "New Historicism", correct: false},
      { text: "New Cristicism", correct: false},
      { text: "Marxist Criticism", correct: true},
      { text: "Feminist Criticism", correct: false},
    ]
  },
  {
    question: "Insist that alluse of language is influnced by social class and economies.",
    answers: [
      { text: "Marxist Criticism", correct: true},
      { text: "New Cristicism", correct: false},
      { text: "Feminist Criticism", correct: false},
      { text: "New Historicism", correct: false},
    ]
  },
  {
    question: "This evolved out of the same root theoritical system as deconstructionism, called formalist criticism.",
    answers: [
      { text: "Marxist Criticism", correct: false},
      { text: "New Cristicism", correct: true},
      { text: "Feminist Criticism", correct: false},
      { text: "New Historicism", correct: false},
    ]
  },
  {
    question: "This works with the elements of the text only like irony, paradox, metaphor, symbol, plot, etc.",
    answers: [
      { text: "New Historicism", correct: false},
      { text: "New Cristicism", correct: true},
      { text: "Marxist Criticism", correct: false},
      { text: "Feminist Criticism", correct: false},
    ]
  },
  {
    question: "Focuses on the literary text as part of a larger social and historical context, and the modern reader's interaction with the work.",
    answers: [
      { text: "New Historicism", correct: true},
      { text: "New Cristicism", correct: false},
      { text: "Marxist Criticism", correct: false},
      { text: "Feminist Criticism", correct: false},
    ]
  },	
  {
    question: "The basis of this approach is the idea of the existence of a human consiousness - those impulses, desires, and feelings about which a person is unaware but which influnce emotions or behavior.",
    answers: [
      { text: "New Historism", correct: false},
      { text: "Psychological Cristicism", correct: true},
      { text: "Marxist Criticism", correct: false},
      { text: "Feminist Criticism", correct: false},
    ]
  },
  {
    question: "Questions that problematized the issue of gender identity and sexual oreintation in literary texts.",
    answers: [
      { text: "New Historism", correct: false},
      { text: "New Cristicism", correct: false},
      { text: "Queer Theory or Gender", correct: true},
      { text: "Feminist Criticism", correct: false},
    ]
  },
  {
    question: "Removes the focus from the text and places it on the reader instead, by attempting to describe what goes on in the reader's mind during the reading of the text.",
    answers: [
      { text: "Queer Theory or Gender", correct: false},
      { text: "Reader-Response Criticism", correct: true},
      { text: "Marxist Criticism", correct: false},
      { text: "Feminist Criticism", correct: false},
    ]
  },
  {
    question: "Represent by graphs, diagrams, charts, or maps.",
    answers: [
      { text: "Phrase Reading", correct: false},
      { text: "Skimming", correct: false},
      { text: "Non-Prose Reading", correct: true},
      { text: "Scanning", correct: false},
    ]
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");
const showQuiz = document.getElementById("showQuiz");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
currentQuestionIndex = 0;
score = 0;
nextButton.innexHTML = "Next";
showQuestion();
};

let arr = [];

function getRandomElementFromArray() { 
if(arr.length === questions.length){
  arr = [];
}
let randomIndex;

do{
  randomIndex = Math.floor(Math.random() * questions.length);
}while (arr.includes(randomIndex));

arr.push(randomIndex);

return questions[randomIndex];
}

function showQuestion(){
resetState();
let currentQuestion = getRandomElementFromArray(questions);

let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButton.appendChild(button);
  if(answer.correct){
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", selectAnswer);
});
};

function resetState(){
nextButton.style.display = "none";
while(answerButton.firstChild){
  answerButton.removeChild(answerButton.firstChild);
}
};

function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
  selectedBtn.classList.add("correct");
  score++;
}else{
  selectedBtn.classList.add("incorrect");
}

Array.from(answerButton.children).forEach(button => {
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  }
  button.disabled = true;
});
nextButton.style.display = "block";
};

function showScore(){
resetState();

questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;

if(score <= 20){
  questionElement.innerHTML = `You score ${score} out of ${questions.length}! Babagsak ka ata par ah?`;
}else if(score > 20 && score < 40){
  questionElement.innerHTML = `You score ${score} out of ${questions.length}! Pwede na yan sa 75!`;
}else{
  questionElement.innerHTML = `You score ${score} out of ${questions.length}! YOWWNNN PAPASA KA NA ATA!!`;
}
nextButton.innerHTML = "Play Again";
nextButton.style.display = "block";
};
function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
  showQuestion();
}else{
  showScore();
}
};

nextButton.addEventListener("click", () => {
if(currentQuestionIndex < questions.length){
  handleNextButton();
}else{
  startQuiz();
}
});

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
startBtn.style.display = "none";
showQuiz.style.display = "block";
startQuiz();
});


