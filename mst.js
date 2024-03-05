
const questions = [
  {
    question: "A mobile app user can access and share information anytime or anywhere.",
    answers: [
      { text: "Personalization", correct: false},
      { text: "Performance", correct: false},
      { text: "Convenience", correct: true},
      { text: "Productivity", correct: false},
    ]
  },
  {
    question: "A user can change the settings of the mobile app based on his preferences.",
    answers: [
      { text: "Personalization", correct: true},
      { text: "Performance", correct: false},
      { text: "Convenience", correct: false},
      { text: "Productivity", correct: false},
    ]
  },
  {
    question: "Users can write, read, and present their reports using only their mobile phones",
    answers: [
      { text: "Personalization", correct: false},
      { text: "Performance", correct: false},
      { text: "Convenience", correct: false},
      { text: "Productivity", correct: true},
    ]
  },
  {
    question: "A programming environment that has been packaged as an application program. ",
    answers: [
      { text: "Personalization", correct: false},
      { text: "Integrated Development Environment", correct: true},
      { text: "Convenience", correct: false},
      { text: "Productivity", correct: false},
    ]
  },
  {
    question: "Official IDE for Android application development, based on IntelliJ IDEA (a Java IDE).",
    answers: [
      { text: "Swift", correct: false},
      { text: "Android Studio", correct: true},
      { text: "Apache Cordova", correct: false},
      { text: "Corona", correct: false},
    ]
  },
  {
    question: "Allows users to build apps and run them directly on their Apple devices",
    answers: [
      { text: "Swift", correct: false},
      { text: "Android Studio", correct: false},
      { text: "XCode", correct: true},
      { text: "Corona", correct: false},
    ]
  },
  {
    question: "Extends the .NET developer platform with tools and libraries specifically for building cross-platform apps.",
    answers: [
      { text: "Xamarin", correct: true},
      { text: "Android Studio", correct: false},
      { text: "XCode", correct: false},
      { text: "Corona", correct: false},
    ]
  },
  {
    question: "A free, cross-platform framework ideal for creating mobile apps and games.",
    answers: [
      { text: "Xamarin", correct: false},
      { text: "Android Studio", correct: false},
      { text: "XCode", correct: false},
      { text: "Corona", correct: true},
    ]
  },
  {
    question: "An open-source mobile development framework that allows use of standard web technologies",
    answers: [
      { text: "Swift", correct: false},
      { text: "Android Studio", correct: false},
      { text: "Apache Cordova", correct: true},
      { text: "Corona", correct: false},
    ]
  },
  {
    question: "The current market scenario must be studied and the needs of the target users must be addressed.",
    answers: [
      { text: "Understanding the market and the user", correct: true},
      { text: "Maximizing app performance", correct: false},
      { text: "Security users", correct: false},
      { text: "Supporting mulitiple screen types", correct: false},
    ]
  },
  {
    question: "Devices come in different sizes and shapes, which affects how you design the screens and UI elements in your apps",
    answers: [
      { text: "Understanding the market and the user", correct: false},
      { text: "Maximizing app performance", correct: false},
      { text: "Security users", correct: false},
      { text: "Supporting mulitiple screen types", correct: true},
    ]
  },
  {
    question: "The performance of an app is affected by factors such as battery life, multimedia content, and internet access.",
    answers: [
      { text: "Understanding the market and the user", correct: false},
      { text: "Maximizing app performance", correct: true},
      { text: "Security users", correct: false},
      { text: "Supporting mulitiple screen types", correct: false},
    ]
  },
  {
    question: "The users’ data is the most valuable asset. Users' sensitive information must be protected at all times.",
    answers: [
      { text: "Understanding the market and the user", correct: false},
      { text: "Remaining compatible with older versions", correct: false},
      { text: "Security users", correct: true},
      { text: "Supporting mulitiple screen types", correct: false},
    ]
  },
  {
    question: "Not all users may have upgraded or may be able to upgrade their devices.",
    answers: [
      { text: "Understanding the market and the user", correct: false},
      { text: "Remaining compatible with older versions", correct: true},
      { text: "Security users", correct: false},
      { text: "Supporting mulitiple screen types", correct: false},
    ]
  },
  {
    question: "Where you create an emulator and connect hardware devices, which you can install your apps.",
    answers: [
      { text: "Development", correct: false},
      { text: "Setup", correct: true},
      { text: "Publishing", correct: false},
      { text: "Building and Running", correct: false},
    ]
  },
  {
    question: "During this phase, you write code, design a UI, and create resources for different device types.",
    answers: [
      { text: "Development", correct: true},
      { text: "Setup", correct: false},
      { text: "Publishing", correct: false},
      { text: "Building and Running", correct: false},
    ]
  },
  {
    question: "During this phase, you build your project into a package that you can install and run on the emulator or an Android-powered device.",
    answers: [
      { text: "Development", correct: false},
      { text: "Debugging, Profiling, and Testing", correct: false},
      { text: "Publishing", correct: false},
      { text: "Building and Running", correct: true},
    ]
  },
  {
    question: "This is the iterative phase in which you continue writing your app but with a focus on eliminating bugs and optimizing app performance (profiling).",
    answers: [
      { text: "Development", correct: false},
      { text: "Debugging, Profiling, and Testing", correct: true},
      { text: "Publishing", correct: false},
      { text: "Building and Running", correct: false},
    ]
  },
  {
    question: "During this phase, the app is configured and built for release and distributed to users.",
    answers: [
      { text: "Development", correct: false},
      { text: "Debugging, Profiling, and Testing", correct: false},
      { text: "Publishing", correct: true},
      { text: "Building and Running", correct: false},
    ]
  },
{
    question: "Is the entry point for interacting with the user.",
    answers: [
      { text: "Broadcast Receiver", correct: false},
      { text: "Service", correct: false},
      { text: "Activity", correct: true},
      { text: "Content Provider", correct: false},
    ]
  },
{
    question: "Runs in the background to perform long-running operations or to perform work for remote processes.",
    answers: [
      { text: "Broadcast Receiver", correct: false},
      { text: "Service", correct: true},
      { text: "Activity", correct: false},
      { text: "Content Provider", correct: false},
    ]
  },
{
    question: "Is a component that enables the system to deliver events to the app outside of a regular user flow, allowing the app to respond to system-wide broadcast announcements.",
    answers: [
      { text: "Broadcast Receiver", correct: true},
      { text: "Service", correct: false},
      { text: "Activity", correct: false},
      { text: "Content Provider", correct: false},
    ]
  },
{
    question: "Manages a shared set of app data that you can store which your app can access.",
    answers: [
      { text: "Broadcast Receiver", correct: false},
      { text: "Service", correct: false},
      { text: "Activity", correct: false},
      { text: "Content Provider", correct: true},
    ]
  },
{
    question: "Is a message defined by an object that describes an action to perform, including the data to be acted upon, the category of component that should perform the action, and other instructions.",
    answers: [
      { text: "Action", correct: false},
      { text: "Service", correct: false},
      { text: "Activity", correct: false},
      { text: "Intent", correct: true},
    ]
  },
{
    question: "Details the components that exists in an app. ",
    answers: [
      { text: "Manifest File", correct: true},
      { text: "Service", correct: false},
      { text: "Activity", correct: false},
      { text: "Intent", correct: false},
    ]
  },
{
    question: "<_______> is a element is the root element of the AndroidManifest.xml file.",
    answers: [
      { text: "application", correct: false},
      { text: "manifest", correct: true},
      { text: "activiy", correct: false},
      { text: "intent", correct: false},
    ]
  },
{
    question: "<_______> is a element contains sub-elements that declare each of the application's components and has attributes that can affect all the components.",
    answers: [
      { text: "application", correct: true},
      { text: "manifest", correct: false},
      { text: "activiy", correct: false},
      { text: "intent", correct: false},
    ]
  },
{
    question: "The required elements in the manifest file are <manifest> and <application>, which should occur only once.",
    answers: [
      { text: "True", correct: true},
      { text: "False", correct: false},
      { text: "Maybe?", correct: false},
      { text: "Ata?", correct: false},
    ]
  },
  {
    question: "The <application> element must be the first element inside the <manifest> element",
    answers: [
      { text: "True", correct: false},
      { text: "False", correct: true},
      { text: "Maybe?", correct: false},
      { text: "Ata?", correct: false},
    ]
  },
  {
    question: "<_______> is a element specifies the types of intents that an activity, service, or broadcast receiver can respond to.",
    answers: [
      { text: "application", correct: false},
      { text: "manifest", correct: false},
      { text: "intent-filter", correct: true},
      { text: "intent", correct: false},
    ]
  },
{
    question: "<_______> element adds an action to an intent filter.",
    answers: [
      { text: "action", correct: true},
      { text: "manifest", correct: false},
      { text: "intent-filter", correct: false},
      { text: "category", correct: false},
    ]
  },
  {
    question: "<_______> elements that adds a category name to an intent filter. ",
    answers: [
      { text: "action", correct: false},
      { text: "manifest", correct: false},
      { text: "intent-filter", correct: false},
      { text: "category", correct: true},
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


