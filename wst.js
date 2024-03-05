const questions = [
  {
    question: "The standard markup language for creating Web pages, no matter how simple or complex",
    answers: [
      { text: "HyperText Makeup Language", correct: false},
      { text: "Highest Markup Language", correct: false},
      { text: "HyperText Markup Language", correct: true},
      { text: "HyperTexting Markup Language", correct: false},
    ]
  },
  {
    question: "Refers to how links on the Web let users move from one document to another.",
    answers: [
      { text: "HyperText", correct: true},
      { text: "Highest", correct: false},
      { text: "HyperingText", correct: false},
      { text: "HyperTexting", correct: false},
    ]
  },
  {
    question: "Is the latest version of the HTML.",
    answers: [
      { text: "HTML1", correct: false},
      { text: "HTML3", correct: false},
      { text: "HTML6", correct: false},
      { text: "HTML5", correct: true},
    ]
  },
  {
    question: "Manages the specifications of what is in HTML and what is not.",
    answers: [
      { text: "World Wide Construction", correct: false},
      { text: "World Wide Connection", correct: false},
      { text: "World Wide Consortium", correct: true},
      { text: "World Wide Condiments", correct: false},
    ]
  },
  {
    question: "It is a text file created in any text editor containing textual content, elements, attributes, and tags such as >html<, >head<, >title<, and >body<.",
    answers: [
      { text: "HTML Table", correct: false},
      { text: "HTML Elements", correct: false},
      { text: "HTML Attributes", correct: false},
      { text: "HTML Document", correct: true},
    ]
  },
  {
    question: "It is the component of an HTML document containing formats, instructions, and semantic meaning",
    answers: [
      { text: "HTML Table", correct: false},
      { text: "HTML Elements", correct: true},
      { text: "HTML Attributes", correct: false},
      { text: "HTML Document", correct: false},
    ]
  },
  {
    question: "It is used to modify or define an HTML element.",
    answers: [
      { text: "HTML Table", correct: false},
      { text: "HTML Elements", correct: false},
      { text: "HTML Attributes", correct: true},
      { text: "HTML Document", correct: false},
    ]
  },
  {
    question: "These keywords define how web browsers will format and display the content on an HTML file",
    answers: [
      { text: "HTML Table", correct: false},
      { text: "HTML Elements", correct: false},
      { text: "HTML Attributes", correct: false},
      { text: "HTML Tags", correct: true},
    ]
  },
  {
    question: "It consists of table cells that allow web developers to organize and arrange data into rows and columns. It uses <table> tag.",
    answers: [
      { text: "HTML Table", correct: true},
      { text: "HTML Elements", correct: false},
      { text: "HTML Attributes", correct: false},
      { text: "HTML Tags", correct: false},
    ]
  },
  {
    question: "Is the basic unit of text in an HTML document. ",
    answers: [
      { text: "Paragraph", correct: true},
      { text: "Headings", correct: false},
      { text: "Forms", correct: false},
      { text: "Links", correct: false},
    ]
  },
  {
    question: "These are titles or subtitles that can be displayed on a webpage.",
    answers: [
      { text: "Paragraph", correct: false},
      { text: "Headings", correct: true},
      { text: "Forms", correct: false},
      { text: "Links", correct: false},
    ]
  },        
  {
    question: "a href attribute that specifies the URL of the webpage goes to.",
    answers: [
      { text: "Paragraph", correct: false},
      { text: "Headings", correct: false},
      { text: "Forms", correct: false},
      { text: "Links", correct: true},
    ]
  },  
  {
    question: "It is an alternative way to interact with the server and collect user inputs",
    answers: [
      { text: "Paragraph", correct: false},
      { text: "Headings", correct: false},
      { text: "Form", correct: true},
      { text: "Links", correct: false},
    ]
  }, 
  {
    question: "The top row of a table that acts as a title for the type of information in each column.",
    answers: [
      { text: "Table Data", correct: false},
      { text: "Table Header", correct: true},
      { text: "Table Title", correct: false},
      { text: "Table Rows", correct: false},
    ]
  },  
  {
    question: "Used to indicate the number of rows displayed in a table",
    answers: [
      { text: "Table Data", correct: false},
      { text: "Table Header", correct: false},
      { text: "Table Title", correct: false},
      { text: "Table Rows", correct: true},
    ]
  },    
  {
    question: "Holds the data displayed in a table.",
    answers: [
      { text: "Table Data", correct: true},
      { text: "Table Header", correct: false},
      { text: "Table Title", correct: false},
      { text: "Table Rows", correct: false},
    ]
  }, 
  {
    question: "Is used to join two or more columns in a table.",
    answers: [
      { text: "Rowspans", correct: false},
      { text: "Table Header", correct: false},
      { text: "Colspan", correct: true},
      { text: "Table Rows", correct: false},
    ]
  },
  {
    question: "Is used to do the same for rows. ",
    answers: [
      { text: "Rowspans", correct: true},
      { text: "Table Header", correct: false},
      { text: "Colspan", correct: false},
      { text: "Border", correct: false},
    ]
  },
  {
    question: "Attribute is used to separate the table cells.",
    answers: [
      { text: "Rowspans", correct: false},
      { text: "Border", correct: true},
      { text: "Colspan", correct: false},
      { text: "Header", correct: false},
    ]
  },
  {
    question: "The HTML document willnot work without this element.",
    answers: [
      { text: "body", correct: false},
      { text: "!DOCTYPE", correct: true},
      { text: "script", correct: false},
      { text: "head", correct: false},
    ]
  },
  {
    question: "Also referred to as “root element.",
    answers: [
      { text: "body", correct: false},
      { text: "!DOCTYPE", correct: false},
      { text: "html", correct: true},
      { text: "head", correct: false},
    ]
  },
  {
    question: "Shows extra information about an element.",
    answers: [
      { text: "body", correct: false},
      { text: "title", correct: true},
      { text: "html", correct: false},
      { text: "head", correct: false},
    ]
  },
  {
    question: "Container for metadata (data about data) which is placed between the <html> and the <body> tags",
    answers: [
      { text: "body", correct: false},
      { text: "title", correct: false},
      { text: "html", correct: false},
      { text: "head", correct: true},
    ]
  },
  {
    question: "Used to specify the page description, author of the document, character coding.",
    answers: [
      { text: "meta", correct: true},
      { text: "title", correct: false},
      { text: "html", correct: false},
      { text: "head", correct: false},
    ]
  },
  {
    question: "Defines the content in an HTML document displayed inthe browser.",
    answers: [
      { text: "body", correct: true},
      { text: "link", correct: false},
      { text: "html", correct: false},
      { text: "head", correct: false},
    ]
  },
  {
    question: "Defines the connection between the current document and an external source",
    answers: [
      { text: "body", correct: false},
      { text: "script", correct: false},
      { text: "html", correct: false},
      { text: "link", correct: true},
    ]
  },
  {
    question: "Used to embed a JavaScript",
    answers: [
      { text: "body", correct: false},
      { text: "script", correct: true},
      { text: "html", correct: false},
      { text: "link", correct: false},
    ]
  },
  {
    question: "It is a way to embed an image or an animated image, such as GIF, on an HTML webpage. ",
    answers: [
      { text: "Span", correct: false},
      { text: "Image", correct: true},
      { text: "Navigation", correct: false},
      { text: "Text Fields", correct: false},
    ]
  },
  {
    question: "It is a way to group a set of related items in HTML.",
    answers: [
      { text: "Span", correct: false},
      { text: "List", correct: true},
      { text: "Navigation", correct: false},
      { text: "Text Fields", correct: false},
    ]
  },
  {
    question: "Used to color or mark up a part of a text or document.",
    answers: [
      { text: "Span", correct: true},
      { text: "Link", correct: false},
      { text: "Navigation", correct: false},
      { text: "Text Fields", correct: false},
    ]
  },
  {
    question: "It uses to define a set of navigation links.",
    answers: [
      { text: "Span", correct: false},
      { text: "Link", correct: false},
      { text: "Navigation", correct: true},
      { text: "Text Fields", correct: false},
    ]
  },
  {
    question: "It displays a single-line text input field for text input.",
    answers: [
      { text: "Span", correct: false},
      { text: "Link", correct: false},
      { text: "Navigation", correct: false},
      { text: "Text Fields", correct: true},
    ]
  },
  {
    question: "It allows users to select one of the available options.",
    answers: [
      { text: "Checkbox", correct: false},
      { text: "Radio Button", correct: true},
      { text: "Navigation", correct: false},
      { text: "Text Fields", correct: false},
    ]
  },
  {
    question: "It allows users to select as many options as possible out of the available options.",
    answers: [
      { text: "Checkbox", correct: true},
      { text: "Radio Button", correct: false},
      { text: "Navigation", correct: false},
      { text: "Text Fields", correct: false},
    ]
  },
  {
    question: "It allows users to submit any data entered in the input field.",
    answers: [
      { text: "Checkbox", correct: false},
      { text: "Radio Button", correct: false},
      { text: "Submit Button", correct: true},
      { text: "Text Fields", correct: false},
    ]
  },
  {
    question: "It refers to when the CSS ruleset is inside the HTML document.",
    answers: [
      { text: "Internal Style Sheet", correct: true},
      { text: "External Style Sheet", correct: false},
      { text: "Inside Style Sheet", correct: false},
      { text: "Inline Style Sheet", correct: false},
    ]
  },
  {
    question: "Is the specific HTML element to be styled with CSS",
    answers: [
      { text: "declaration", correct: false},
      { text: "selector", correct: true},
      { text: "property", correct: false},
      { text: "value", correct: false},
    ]
  },
  {
    question: "It refers to when the CSS ruleset is on a separate file.",
    answers: [
      { text: "Outside Style Sheet", correct: false},
      { text: "Outdoor Style Sheet", correct: false},
      { text: "External Style Sheet", correct: true},
      { text: "Otherside Style Sheet", correct: false},
    ]
  },
  {
    question: "It can have the biggest impact on the general design of the website.",
    answers: [
      { text: "Styling Text", correct: true},
      { text: "Sizing Text", correct: false},
      { text: "External Style Sheet", correct: false},
      { text: "Textting", correct: false},
    ]
  },
  {
    question: "Property allows the application of different boldness to text including normal which is the unbolded text",
    answers: [
      { text: "font-size", correct: false},
      { text: "font-style", correct: false},
      { text: "font-weight", correct: true},
      { text: "text-decoration", correct: false},
    ]
  },
  {
    question: "Poperty which can italicizes text.",
    answers: [
      { text: "font-size", correct: false},
      { text: "font-style", correct: true},
      { text: "font-weight", correct: false},
      { text: "text-decoration", correct: false},
    ]
  },
  {
    question: "Property allows emphasis lines to text.",
    answers: [
      { text: "font-size", correct: false},
      { text: "font-style", correct: false},
      { text: "font-weight", correct: false},
      { text: "text-decoration", correct: true},
    ]
  },
  {
    question: "Property aligns the text horizontally. ",
    answers: [
      { text: "font-size", correct: false},
      { text: "text-align", correct: true},
      { text: "font-weight", correct: false},
      { text: "text-decoration", correct: false},
    ]
  },
  {
    question: "A comma-separated list of the amount of red, green, and blue in a color, ranging from 0 to 255.",
    answers: [
      { text: "Hexadecimal", correct: false},
      { text: "RGB", correct: true},
      { text: "Decimal", correct: false},
      { text: "Color Names", correct: false},
    ]
  },
  {
    question: "A six-character code that defines the RGB in a color preceded by a #.",
    answers: [
      { text: "Hexadecimal", correct: true},
      { text: "RGB", correct: false},
      { text: "Decimal", correct: false},
      { text: "Color Names", correct: false},
    ]
  },
  {
    question: "Easier method to use when assigning colors.",
    answers: [
      { text: "Hexadecimal", correct: false},
      { text: "RGB", correct: false},
      { text: "Decimal", correct: false},
      { text: "Color Names", correct: true},
    ]
  },
  {
    question: "Consists of rounded dots that display on a border.",
    answers: [
      { text: "Solid", correct: false},
      { text: "Dashed", correct: false},
      { text: "Groove", correct: false},
      { text: "Dotted", correct: true},
    ]
  },
  {
    question: "A single or straight border",
    answers: [
      { text: "Solid", correct: true},
      { text: "Dashed", correct: false},
      { text: "Groove", correct: false},
      { text: "Dotted", correct: false},
    ]
  },
  {
    question: "Short line segments",
    answers: [
      { text: "Ridge", correct: false},
      { text: "Dashed", correct: true},
      { text: "Groove", correct: false},
      { text: "Dotted", correct: false},
    ]
  },
  {
    question: "A two-line solid border",
    answers: [
      { text: "Ridge", correct: false},
      { text: "Double", correct: true},
      { text: "Groove", correct: false},
      { text: "Dotted", correct: false},
    ]
  },
  {
    question: "A three-dimensional border that looks like it is carved into the page",
    answers: [
      { text: "Ridge", correct: false},
      { text: "Inset", correct: false},
      { text: "Groove", correct: true},
      { text: "Outset", correct: false},
    ]
  },
  {
    question: "A three-dimensional border that is opposite of the groove style.",
    answers: [
      { text: "Ridge", correct: true},
      { text: "Inset", correct: false},
      { text: "Groove", correct: false},
      { text: "Outset", correct: false},
    ]
  },
  {
    question: "Makes content in the border look like it is coming inside of the canvas.",
    answers: [
      { text: "Ridge", correct: false},
      { text: "Inset", correct: true},
      { text: "Groove", correct: false},
      { text: "Outset", correct: false},
    ]
  },
  {
    question: "Makes content in the border look like it is coming outside of the canvas.",
    answers: [
      { text: "Ridge", correct: false},
      { text: "Inset", correct: false},
      { text: "Groove", correct: false},
      { text: "Outset", correct: true},
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


