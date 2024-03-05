const questions = [
    {
      question: "A practice of protecting sytems, networks, and programs from digital attacks.",
      answers: [
        { text: "Expansion", correct: false},
        { text: "Security", correct: false},
        { text: "Cybersecurity", correct: true},
        { text: "Attack", correct: false},
      ]
    },
    {
      question: "Which of the following is NOT TRUE in tasks of cybersecurity professionals.",
      answers: [
        { text: "Being aware through analyzing and evaluating threats.", correct: false},
        { text: "Creating reports for shareholders.", correct: false},
        { text: "Going through all systems to check for any potential issue.", correct: false},
        { text: "Destroying sensetive informations from users.", correct: true},
      ]
    },
    {
      question: "What is the best definition of Security Architect",
      answers: [
        { text: "Responsible for maintaining the security of a company's computer system.", correct: true},
        { text: "Information security expert who systematically attemps to penetrate a computer system.", correct: false},
        { text: "Work as an advisor and supervisor for all security measures to protect the organization assets.", correct: false},
        { text: "Responsible for an organization's information and data security.", correct: false},
      ]
    },
    {
      question: "What is Security Consultant",
      answers: [
        { text: "Responsible for an organization's information and data security.", correct: false},
        { text: "Responsible for maintaining the security of a company's computer system.", correct: false},
        { text: "Work as an advisor and supervisor for all security measures to protect the organization assets.", correct: true},
        { text: "Information security expert who systematically attemps to penetrate a computer system.", correct: false},
      ]
    },
    {
      question: "What is the correct definitio of Ethical Hacker",
      answers: [
        { text: "Responsible for an organization's information and data security.", correct: false},
        { text: "Responsible for maintaining the security of a company's computer system.", correct: false},
        { text: "Work as an advisor and supervisor for all security measures to protect the organization assets.", correct: false},
        { text: "Information security expert who systematically attemps to penetrate a computer system.", correct: true},
      ]
    },
    {
      question: "What is Chief Information Security Officer (CISO)",
      answers: [
        { text: "Responsible for an organization's information and data security.", correct: true},
        { text: "Responsible for maintaining the security of a company's computer system.", correct: false},
        { text: "Work as an advisor and supervisor for all security measures to protect the organization assets.", correct: false},
        { text: "Information security expert who systematically attemps to penetrate a computer system.", correct: false},
      ]
    },
    {
      question: "Which of the following is not a The Anatomy of Cyberattact steps.",
      answers: [
        { text: "Phishing", correct: true},
        { text: "Attack", correct: false},
        { text: "Reconnaissance", correct: false},
        { text: "Expansion", correct: false},
      ]
    },
    {
      question: "What is Reconnaissance",
      answers: [
        { text: "Hackers usually start by researching and gathering information about the target organization", correct: true},
        { text: "Hackers proceed to hiding their tracks to mask the origins of the attack.", correct: false},
        { text: "Hackers proceed with infiltrating the organization’s network.", correct: false},
        { text: "Hackers intrude all systems on the network using malicious programs", correct: false},
      ]
    },
    {
      question: "What is Attack",
      answers: [
        { text: "Hackers intrude all systems on the network using malicious programs", correct: false},
        { text: "Hackers proceed with infiltrating the organization’s network.", correct: true},
        { text: "Hackers usually start by researching and gathering information about the target organization", correct: false},
        { text: "Hackers proceed to hiding their tracks to mask the origins of the attack.", correct: false},
      ]
    },
    {
      question: "What is the TRUE definition of Expansion",
      answers: [
        { text: "Hackers intrude all systems on the network using malicious programs", correct: true},
        { text: "Hackers proceed with infiltrating the organization’s network.", correct: false},
        { text: "Hackers usually start by researching and gathering information about the target organization", correct: false},
        { text: "Hackers proceed to hiding their tracks to mask the origins of the attack.", correct: false},
      ]
    },
    {
      question: "What is Obfuscation",
      answers: [
        { text: "Hackers intrude all systems on the network using malicious programs", correct: false},
        { text: "Hackers proceed with infiltrating the organization’s network.", correct: false},
        { text: "Hackers usually start by researching and gathering information about the target organization", correct: false},
        { text: "Hackers proceed to hiding their tracks to mask the origins of the attack.", correct: true},
      ]
    },
    {
      question: "These new opportunities, however, bring with them a radically different set of risks, which organizations will need to anticipate and manage as they continue the digital transformation process.",
      answers: [
        { text: "Supply Chain", correct: false},
        { text: "IoT", correct: false},
        { text: "Employees", correct: false},
        { text: "Technology", correct: true},
      ]
    },
    {
      question: "One (1) is the rapid expansion of operational data exposed to cyber adversaries, from mobile and edge devices like the Internet of Things (IoT); and the other trend is the companies’ growing reliance on third-party and even fourth-party vendors and service providers. B",
      answers: [
        { text: "Supply Chain", correct: true},
        { text: "Regulatory", correct: false},
        { text: "Employees", correct: false},
        { text: "Business Operation", correct: false},
      ]
    },
    {
      question: "Effective organizational inventory and monitoring process implementation will be critical for companies in the future.",
      answers: [
        { text: "Supply Chain", correct: false},
        { text: "IoT", correct: true},
        { text: "Employees", correct: false},
        { text: "Board of Directors", correct: false},
      ]
    },
    {
      question: "Connectivity to the Internet improves operational tasks dramatically, but increased connectivity also leads to new security vulnerabilities",
      answers: [
        { text: "Business Operation", correct: true},
        { text: "Internet of Things", correct: false},
        { text: "Employees", correct: false},
        { text: "Board of Directors", correct: false},
      ]
    },
    {
      question: "One of the most common causes of breaches, yet they do not even realize the true threat they pose to an entire organization’s cybersecurity.",
      answers: [
        { text: "Supply Chain", correct: false},
        { text: "IoT", correct: false},
        { text: "Employees", correct: true},
        { text: "Board of Directors", correct: false},
      ]
    },
    {
      question: "Increased regulation, laws, rules, and standards related to cyber are designed to protect and insulate businesses and their customers",
      answers: [
        { text: "Employees", correct: false},
        { text: "Internet of Things", correct: false},
        { text: "Regularatory", correct: true},
        { text: "Board of Directors", correct: false},
      ]
    },
    {
      question: "Cybersecurity oversight continues to be a point of emphasis for board directors and officers, but recent history has seen an expanding personal risk raising the stakes",
      answers: [
        { text: "Employees", correct: false},
        { text: "Internet of Things", correct: false},
        { text: "Regularatory", correct: false},
        { text: "Board of Directors", correct: true},
      ]
    },
    {
      question: "What is the best definition of Ransomware",
      answers: [
        { text: "A type of software designed to gain unauthorized access or cause damage to a computer.", correct: false},
        { text: "Malware that tracks keystrokes, enabling the attacker to eavesdrop on confidential conversations and steal login credentials.", correct: false},
        { text: "Used for encrypting malware to obscure and make the data difficult to detect.", correct: false},
        { text: "A type of malicious software designed to extort money by blocking access to files or the computer system until the ransom is paid.", correct: true},
      ]
    },
    {
      question: "What is Malware",
      answers: [
        { text: "A type of software designed to gain unauthorized access or cause damage to a computer.", correct: true},
        { text: "Malware that tracks keystrokes, enabling the attacker to eavesdrop on confidential conversations and steal login credentials.", correct: false},
        { text: "Used for encrypting malware to obscure and make the data difficult to detect.", correct: false},
        { text: "A type of malicious software designed to extort money by blocking access to files or the computer system until the ransom is paid.", correct: false},
      ]
    },
    {
      question: "What is Social Engineering",
      answers: [
        { text: "A tactic that adversaries use to trick a user into revealing sensitive information.", correct: true},
        { text: "Malware that tracks keystrokes, enabling the attacker to eavesdrop on confidential conversations and steal login credentials.", correct: false},
        { text: "Used for encrypting malware to obscure and make the data difficult to detect.", correct: false},
        { text: "A type of malicious software designed to extort money by blocking access to files or the computer system until the ransom is paid.", correct: false},
      ]
    },
    {
      question: "What is the best definition of Phishing",
      answers: [
        { text: "A tactic that adversaries use to trick a user into revealing sensitive information", corrrect: false},
        { text: "Malware that tracks keystrokes, enabling the attacker to eavesdrop on confidential conversations and steal login credentials.", correct: false},
        { text: "Practice of sending fraudulent e-mails that resemble e-mails from reputable sources.", correct: true},
        { text: "A type of malicious software designed to extort money by blocking access to files or the computer system until the ransom is paid.", correct: false},
      ]
    },
    {
      question: "Cybersecurity threats and vulnerabilty used for encrypting malware to obscure and make the data difficult to detect",
      answers: [
        { text: "Keyloggers", correct: false},
        { text: "Crimeware", correct: false},
        { text: "Cripting Services", correct: true},
        { text: "Ransomware", correct: false},
      ]
    },
    {
      question: "Cybersecurity threats and vulnerabilty that buys and sell a  malware on the “Dark Web,” a black market for cyber criminals.",
      answers: [
        { text: "Keyloggers", correct: false},
        { text: "Crimeware", correct: true},
        { text: "Leaked Data", correct:false},
        { text: "Ransomware", correct: false},
      ]
    },
    {
      question: "Type of malware that, once activated, grants hackers control over the infected computer.",
      answers: [
        { text: "Remote Administration Tools", correct: true},
        { text: "Crimeware", correct: false},
        { text: "Leaked Data", correct:false},
        { text: "Ransomware", correct: false},
      ]
    },
    {
      question: "Malware that tracks keystrokes, enabling the attacker to eavesdrop on confidential conversations and steal login credentials",
      answers: [
        { text: "Remote Administration Tools", correct: false},
        { text: "Crimeware", correct: false},
        { text: "Keyloggers", correct: true},
        { text: "Ransomware", correct: false},
      ]
    },
    {
      question: "Work by targeting users who think they are visiting a trusted site but then get redirected to a malicious site.",
      answers: [
        { text: "Remote Administration Tools", correct: false},
        { text: "Crimeware", correct: false},
        { text: "Exploit Kits", correct: true},
        { text: "Ransomware", correct: false},
      ]
    },
    {
      question: "What is the best definition of Leaked Data",
      answers: [
        { text: "A tactic that adversaries use to trick a user into revealing sensitive information", corrrect: false},
        { text: "Malware that tracks keystrokes, enabling the attacker to eavesdrop on confidential conversations and steal login credentials.", correct: false},
        { text: "Data stolen from a user’s machine that can easily be sold on the Dark Web.", correct: true},
        { text: "A type of malicious software designed to extort money by blocking access to files or the computer system until the ransom is paid.", correct: false},
      ]
    },
    {
      question: "What is Card Skimmers",
      answers: [
        { text: "Implanted in places like Point-of-Sale (POS) machines, bank teller machines, and gas pumps to steal identity and credit card account data.", correct: true},
        { text: "Malware that tracks keystrokes, enabling the attacker to eavesdrop on confidential conversations and steal login credentials.", correct: false},
        { text: "Data stolen from a user’s machine that can easily be sold on the Dark Web.", correct: false},
        { text: "A type of malicious software designed to extort money by blocking access to files or the computer system until the ransom is paid.", correct: false},
      ]
    },
    {
      question: "What is Unpatced Systems",
      answers: [
        { text: "Related to IT operations, and in some cases to aging software, a lot of systems may lack security patches", correct: true},
        { text: "Malware that tracks keystrokes, enabling the attacker to eavesdrop on confidential conversations and steal login credentials.", correct: false},
        { text: "Implanted in places like Point-of-Sale (POS) machines, bank teller machines, and gas pumps to steal identity and credit card account data.", correct: false},
        { text: "A type of malicious software designed to extort money by blocking access to files or the computer system until the ransom is paid.", correct: false},
      ]
    },
    {
      question: "Ensures that sensitive information is accessed only by an authorized person and kept away from those not authorized to possess them.",
      answers: [
        { text: "Confindentiality", correct: true},
        { text: "Integrity", correct: false},
        { text: "Availbility", correct: false},
        { text: "Accessible", correct: false},
      ]
    },
    {
      question: "Ensures that the information is in a format that is true and correct to its original purposes",
      answers: [
        { text: "Confindentiality", correct: false},
        { text: "Integrity", correct: true},
        { text: "Availbility", correct: false},
        { text: "Accessible", correct: false},
      ]
    },
    {
      question: "Ensures that information and resources are available to those who need them.",
      answers: [
        { text: "Confindentiality", correct: false},
        { text: "Integrity", correct: false},
        { text: "Availbility", correct: true},
        { text: "Accessible", correct: false},
      ]
    },
    {
      question: "It is implemented using methods such as hardware maintenance, software patching, and network optimization.",
      answers: [
        { text: "Confindentiality", correct: false},
        { text: "Integrity", correct: false},
        { text: "Availbility", correct: true},
        { text: "Accessible", correct: false},
      ]
    },
    {
      question: "This standard aims to establish a framework for classifying data based on its level of sensitivity, value, and criticalness",
      answers: [
        { text: "Confindentiality Standards", correct: false},
        { text: "Data Classification Standards", correct: true},
        { text: "Integrigty Standards", correct: false},
        { text: "Accessible Standard", correct: false},
      ]
    },
    {
      question: "The cycle of managing data begins with understanding what the data is, how it has been classified, and where it will be located.",
      answers: [
        { text: "Understanding", correct: true},
        { text: "Archiving", correct: false},
        { text: "Storing", correct: false},
        { text: "Creating", correct: false},
      ]
    },
    {
      question: "This includes, but is not limited to, collecting data, experimenting, observing, and measuring and simulation.",
      answers: [
        { text: "Understanding", correct: false},
        { text: "Archiving", correct: false},
        { text: "Storing", correct: false},
        { text: "Creating", correct: true},
      ]
    },
    {
      question: "This includes, but is not limited to, designing research, locating existing data, and capturing and creating metadata.",
      answers: [
        { text: "Creating", correct: false},
        { text: "Archiving", correct: false},
        { text: "Storing", correct: true},
        { text: "Sharing", correct: false},
      ]
    },
    {
      question: "This includes, but is not limited to, entering data, digitizing, transcribing and translating, checking, validating, filtering and cleaning data, anonymizing data where necessary, describing, managing, interpreting, and deriving data, and statistical analysis.",
      answers: [
        { text: "Understanding", correct: false},
        { text: "Sharing", correct: false},
        { text: "Using", correct: true},
        { text: "Creating", correct: false},
      ]
    },
    {
      question: "This includes, but is not limited to, distributing, sharing, promoting data, controlling access, establishing copyright, producing research outputs and author publications, preparing data for preservation, and using the data classification definitions to help the user through this process",
      answers: [
        { text: "Creating", correct: false},
        { text: "Archiving", correct: false},
        { text: "Storing", correct: false},
        { text: "Sharing", correct: true},
      ]
    },
    {
      question: "This includes, but is not limited to, migrating data to the best format and suitable medium, backing up and storing data, creating metadata and documentation, and archiving data.",
      answers: [
        { text: "Archiving", correct: true},
        { text: "Sharing", correct: false},
        { text: "Using", correct: false},
        { text: "Creating", correct: false},
      ]
    },
    {
      question: "This includes, but is not limited to, disposing of data, destroying paper records and electronic media, and electronic shredding",
      answers: [
        { text: "Archiving", correct: false},
        { text: "Destroying", correct: true},
        { text: "Using", correct: false},
        { text: "Creating", correct: false},
      ]
    },
    {
      question: "As IT teams seek to create a layered security environment, they should consider the following tactics except one",
      answers: [
        { text: "People", correct: false},
        { text: "Technology", correct: false},
        { text: "Society", correct: true},
        { text: "Process", correct: false},
      ]
    },
    {
      question: "Which tatics can create some of the greatest risks to cybersecurity. When they are well informed, however, they can also be an asset and the first line of defense. ",
      answers: [
        { text: "People", correct: true},
        { text: "Technology", correct: false},
        { text: "Society", correct: false},
        { text: "Process", correct: false},
      ]
    },
    {
      question: "This layer of cybersecurity ensures that IT teams have strategies in place to proactively prevent and to respond quickly and effectively in the event of a cybersecurity incident.",
      answers: [
        { text: "People", correct: false},
        { text: "Technology", correct: false},
        { text: "Society", correct: false},
        { text: "Process", correct: true},
      ]
    },
    {
      question: "It is important that IT teams do not implement isolated point solutions as they layer their defenses, but rather select those tools based on their ability to be integrated and automated to create a security fabric that can facilitate the rapid detection and mitigation of threats.",
      answers: [
        { text: "People", correct: false},
        { text: "Technology", correct: true},
        { text: "Society", correct: false},
        { text: "Process", correct: false},
      ]
    },
    {
      question: "A well-known fact that a majority of data users’ passwords and usernames are weak.",
      answers: [
        { text: "Cloud Technology", correct: false},
        { text: "Hardware Authetication", correct: true},
        { text: "Deep Learning", correct: false},
        { text: "Environmental Process", correct: false},
      ]
    },
    {
      question: "Set to have a significant impact on the transformation of systems security technology.",
      answers: [
        { text: "Cloud Technology", correct: true},
        { text: "Hardware Authetication", correct: false},
        { text: "Deep Learning", correct: false},
        { text: "Environmental Process", correct: false},
      ]
    },
    {
      question: "Encompasses some technologies like machine learning and artificial intelligence",
      answers: [
        { text: "Cloud Technology", correct: false},
        { text: "Hardware Authetication", correct: false},
        { text: "Deep Learning", correct: true},
        { text: "Environmental Process", correct: false},
      ]
    },
    {
      question: "This consists of the cyber-physical systems that modern societies rely on.",
      answers: [
        { text: "Network Security", correct: false},
        { text: "Cloud Security", correct: false},
        { text: "Critical Infrastracture Security", correct: true},
        { text: "Internet of Things Security", correct: false},
      ]
    },
    {
      question: "This is more accessible over networks, causing the adoption of security measures during the development phase to be an imperative phase of the project.",
      answers: [
        { text: "Network Security", correct: false},
        { text: "Applocation Security", correct: true},
        { text: "Critical Infrastracture Security", correct: false},
        { text: "Internet of Things Security", correct: false},
      ]
    },
    {
      question: "This ensures that internal networks are secured by protecting the infrastructure and inhibiting access to it",
      answers: [
        { text: "Network Security", correct: true},
        { text: "Applocation Security", correct: false},
        { text: "Critical Infrastracture Security", correct: false},
        { text: "Internet of Things Security", correct: false},
      ]
    },
    {
      question: "It is a software-based security tool that protects and monitors data in cloud resources.",
      answers: [
        { text: "Cloud Security", correct: true},
        { text: "Applocation Security", correct: false},
        { text: "Critical Infrastracture Security", correct: false},
        { text: "Internet of Things Security", correct: false},
      ]
    },
    {
      question: "Refers to a wide variety of critical and non-critical cyber-physical systems like appliances, sensors, televisions, Wi-Fi routers, printers, and security cameras.",
      answers: [
        { text: "Cloud Security", correct: false},
        { text: "Applocation Security", correct: false},
        { text: "Critical Infrastracture Security", correct: false},
        { text: "Internet of Things Security", correct: true},
      ]
    },
    {
      question: "What is Security Policy?",
      answers: [
        { text: "Providers are constantly creating and implementing new security tools to help enterprise users better secure their data.", correct: false},
        { text: "A well-known fact that a majority of data users’ passwords and usernames are weak", correct: false},
        { text: "Not opening or clicking links in suspicious e-mails or from unfamiliar senders", correct: false},
        { text: "A set of rules that appliesto activities for the computer and communications resources that belong to an organization.", correct: true},
      ]
    },
    {
      question: "The resource protection scheme ensures that only authorized users can access objects on the system",
      answers: [
        { text: "Authentication", correct: false},
        { text: "Integrity", correct: false},
        { text: "Nonrepudiation", correct: false},
        { text: "Resource Protection", correct: true},
      ]
    },
    {
      question: "The assurance or verification that the resource (human or machine) at the other end of the session really is what it claims to be",
      answers: [
        { text: "Authentication", correct: true},
        { text: "Integrity", correct: false},
        { text: "Nonrepudiation", correct: false},
        { text: "Resource Protection", correct: false},
      ]
    },
    {
      question: "This is an assurance that the person or computer at the other end of the session has permission to carry out the request.",
      answers: [
        { text: "Authentication", correct: false},
        { text: "Integrity", correct: false},
        { text: "Nonrepudiation", correct: false},
        { text: "Authorization", correct: true},
      ]
    },
    {
      question: "This is an assurance that the arriving information is the same as what was sent out.",
      answers: [
        { text: "Authentication", correct: false},
        { text: "Integrity", correct: true},
        { text: "Nonrepudiation", correct: false},
        { text: "Authorization", correct: false},
      ]
    },
    {
      question: "This is the proof that a transaction occurred, or that a user sent or received a message.",
      answers: [
        { text: "Authentication", correct: false},
        { text: "Integrity", correct: false},
        { text: "Nonrepudiation", correct: true},
        { text: "Authorization", correct: false},
      ]
    },
    {
      question: "This is the assurance that sensitive information remains private and is not visible to an eavesdropper.",
      answers: [
        { text: "Authentication", correct: false},
        { text: "Confidentiality", correct: true},
        { text: "Nonrepudiation", correct: false},
        { text: "Authorization", correct: false},
      ]
    },
    {
      question: "These monitor security-relevant events to provide a log of both successful and unsuccessful (denied) access.",
      answers: [
        { text: "Authentication", correct: false},
        { text: "Auditing Security Activities", correct: true},
        { text: "Nonrepudiation", correct: false},
        { text: "Authorization", correct: false},
      ]
    },
    {
      question: "Mission is to develop and promote measurement, standards, and technology to enhance productivity, facilitate trade, and improve the quality of life",
      answers: [
        { text: "ISO/IEC - 27000 Family", correct: false},
        { text: "National Institute of Standard and Technology", correct: true},
        { text: "Payment Card Industry Data Security Standard", correct: false},
        { text: "High Standard", correct: false},
      ]
    },
    {
      question: "A systematic approach to managing sensitive information securely (also known as theInformation Security Management System [ISMS]). It includes managing risk for people, processes, and IT systems.",
      answers: [
        { text: "ISO/IEC - 27000 Family", correct: true},
        { text: "National Institute of Standard and Technology", correct: false},
        { text: "Payment Card Industry Data Security Standard", correct: false},
        { text: "High Standard", correct: false},
      ]
    },
    {
      question: "It was initiated to ensure businesses process card payments were secure and to help reduce card fraud.",
      answers: [
        { text: "ISO/IEC - 27000 Family", correct: false},
        { text: "National Institute of Standard and Technology", correct: false},
        { text: "Payment Card Industry Data Security Standard", correct: true},
        { text: "High Standard", correct: false},
      ]
    },
    {
      question: "A unified security design that addresses the necessities and potential risks involved in a particular scenario or environment.",
      answers: [
        { text: "Drivers", correct: false},
        { text: "Relationship and Dependencies", correct: false},
        { text: "Security Architecture", correct: true},
        { text: "Operations and Monitoring", correct: false},
      ]
    },
    {
      question: "Security Architecture key attributes that signify the relationship between the various components inside IT architecture and how they depend on each other.",
      answers: [
        { text: "Drivers", correct: false},
        { text: "Relationship and Dependencies", correct: true},
        { text: "Form", correct: false},
        { text: "Operations and Monitoring", correct: false},
      ]
    },
    {
      question: "Security architecture’s main advantage is its standardization, which makes it affordable. It is cost-effective due to the re-use of controls described in the architecture.",
      answers: [
        { text: "Drivers", correct: false},
        { text: "Relationship and Dependencies", correct: false},
        { text: "Benefits", correct: true},
        { text: "Operations and Monitoring", correct: false},
      ]
    },
    {
      question: "Security controls are determined based on these following factors except one.",
      answers: [
        { text: "Drivers", correct: true},
        { text: "Benhmaking and good practice", correct: false},
        { text: "Financial", correct: false},
        { text: "Risk management", correct: false},
      ]
    },
    {
      question: "This Security Architecture key phase evaluates the business influence of vital business assets and the odds and effects of vulnerabilities and security threats.",
      answers: [
        { text: "Architecture Risk Assessment", correct: true},
        { text: "Operations and Monitoring", correct: false},
        { text: "Implementation", correct: false},
        { text: "Security Architecture and Design", correct: false},
      ]
    },
    {
      question: "This Security Architecture key phase is the design and architecture of security services, which facilitate business risk exposure objectives",
      answers: [
        { text: "Architecture Risk Assessment", correct: false},
        { text: "Operations and Monitoring", correct: false},
        { text: "Implementation", correct: false},
        { text: "Security Architecture and Design", correct: true},
      ]
    },
    {
      question: "Security services and processes are implemented, operated and controlled.",
      answers: [
        { text: "Architecture Risk Assessment", correct: false},
        { text: "Operations and Monitoring", correct: false},
        { text: "Implementation", correct: true},
        { text: "Security Architecture and Design", correct: false},
      ]
    },
    {
      question: "These are the day by day processes, such as threat and vulnerability management and threat management",
      answers: [
        { text: "Architecture Risk Assessment", correct: false},
        { text: "Operations and Monitoring", correct: true},
        { text: "Implementation", correct: false},
        { text: "Security Architecture and Design", correct: false},
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


