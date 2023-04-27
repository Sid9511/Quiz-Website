// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },

  {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },

  {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
  
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
  
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
 
  {
      numb: 6,
      question: "Which of the following JavaScript cannot do?",
      answer: "All of the Above",
      options: [
        "JavaScript can react to events",
        "JavaScript can manipulate HTML elements",
        "JavaScript can be use to validate data",
        "All of the Above"
      ]
  },

  {
    numb: 7,
    question: "Which of the following options is correct with regard to HTML?",
    answer: "It is used to structure documents",
    options: [
      "It is a modelling language",
      "It is a scripting language",
      "It is a partial programming language",
      "It is used to structure documents"
    ]
  },

  {
    numb: 8,
    question: "When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type",
    answer: "JSObject",
    options: [
      "ScriptObject",
      "JSObject",
      "JavaObject",
      "Jobject"
    ]
  },

  {
    numb: 9,
    question: "What do you add to a template in order to control where page content goes?",
    answer: "Editable Regions",
    options: [
      "Text Frames",
      "HTML Controllers",
      "Editable Regions",
      "Page Content Controllers"
    ]
  },

  {
    numb: 10,
    question: "Whichg of the following is used to create web pages?",
    answer: "HTML",
    options: [
      "HTML",
      "C",
      "JVM",
      "DTD"
    ]
  },

  {
    numb: 11,
    question: "Which of the following JavaScript cannot do?",
    answer: " All of the Above",
    options: [
      "JavaScript can react to events",
      "JavaScript can manipulate HTML elements",
      "JavaScript can be use to validate data",
      " All of the Above"
    ]
  },

  {
    numb: 12,
    question: "Whats so great about XML?",
    answer: "Both A & B",
    options: [
      "Easy data exchange",
      "High speed on network",
      "Only B is correct",
      "Both A & B"
    ]
  },

  {
    numb: 13,
    question: "Which is not a property of attribute Behaviour of Marquee tag?",
    answer: "blur",
    options: [
      "alternate",
      "blur",
      "scrll",
      "slide"
    ]
  },

  {
    numb: 14,
    question: "_________ keyword is used to declare variables in javascript.",
    answer: "Var",
    options: [
      "Var",
      "Dim",
      "String",
      "None of the above"
    ]
  },

  {
    numb: 15,
    question: "The attribute used to define a new namespace is.",
    answer: "Xmlns",
    options: [
      "XMLNS",
      "XmlNameSpace",
      "Xmlns",
      "XmlNs"
    ]
  },

  {
    numb: 16,
    question: "Which of the following options is correct with regard to HTML?",
    answer: "It is used to structure documents",
    options: [
      "It is a modelling language",
      "It is a scripting language",
      "It is a partial programming language",
      "It is used to structure documents "
    ]
  },

  {
    numb: 17,
    question: "Which CSS property can provide to add an effect when changing from one style to another,without using Flash animations or javascript?",
    answer: "Transitions",
    options: [
      "Associations",
      "Transitions",
      "Transistor",
      "None of the above"
    ]
  },

  {
    numb: 18,
    question: "Which browser can supports the transition property?",
    answer: "All of the above",
    options: [
      "Internet Explorer 10",
      "Firefox",
      "Chrome",
      "All of the above"
    ]
  },

  {
    numb: 19,
    question: "Which type of style should you use if you want to use the formats on multiple pages?",
    answer: "Linked",
    options: [
      "Linked",
      "Embeded",
      "Online",
      "Orthogonal"
    ]
  },

  {
    numb: 20,
    question: "____________ is the tainted property of a window object.",
    answer: "Defaultstatus",
    options: [
      "Pathname",
      "Protocol",
      "Defaultstatus",
      "Host"
    ]
  },

  {
    numb: 21,
    question: "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
    answer: "a wrapper",
    options: [
      "a wrapper",
      "a link",
      "a cursor",
      "a form",
    ]
  },

  {
    numb: 22,
    question: "Which of the following statement is not true regarding JavaScript?",
    answer: "A JavaScript embedded in an HTML document is compiled and executed by the client browser",
    options: [
      "JavaScript is an object-based language",
      " JavaScript is event driven",
      "JavaScript is a loosely typed language",
      "A JavaScript embedded in an HTML document is compiled and executed by the client browser"
    ]
  },

  {
    numb: 23,
    question: "Which HTML attribute is used to define inline styles?",
    answer: "Styles",
    options: [
      "Font",
      "Class",
      "Styles",
      "Style"
    ]
  },

  {
    numb: 24,
    question: "_______ is suitable for remote administration of a computer",
    answer: "Telnet",
    options: [
      "FTP",
      "Shell",
      "Remote Procedure Call",
      "Telnet"
    ]
  },

  {
    numb: 25,
    question: "In order to upload a HTML file to a web server, you used.",
    answer: "FTP",
    options: [
      "HTTP",
      "SMTP",
      "SIP",
      "FTP"
    ]
  },

/*       // you can uncomment the below codes and make duplicate as more as you want to add question
     // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  // {
  //  numb: 6,
  //  question: "Your Question is Here",
  //  answer: "Correct answer of the question is here",
  //  options: [
  //    "Option 1",
  //    "option 2",
  //    "option 3",
  //    "option 4"
  //  ]
  //},
*/ 

];