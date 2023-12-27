function variablesExamples() {
  console.info("page loaded");
  console.debug(5 - 2);

  //boolean
  var employed = false;
  console.info("Am i employed " + employed);
  //integer
  var age = 24;
  console.info("my age " + age);
  //string
  var name = "Teo";
  console.info("my name " + name);
  //array is object
  var skills = ["hmtl", "css", "js"];
  //object
  var person = {
    employee: false,
    age: 29,
  };
  //function
  var el = document.getElementById("el");
  //example
  console.info("name is: " + typeof name);
  console.info("employed is: " + typeof employed);
  console.info("age is: " + typeof age);
  console.debug("skills is: " + skills + typeof skills);
  console.info("person is", person, typeof person);
  console.info("document.getElementBy is: " + typeof document.getElementById);
}

function change(name) {
  var jobTitle = document.getElementById("job-title");
  console.warn(jobTitle);
  console.info(jobTitle.innerHTML);
  jobTitle.innerHTML = name;
  console.info(jobTitle.innerHTML);
}

variablesExamples();
//change("QA");

function emptyFn() {}
function getWelcomeMsg(name) {
  var msg = "Hello " + name + ", " + "welcome to my site.";
  return msg;
}
//function, name, parameters, code block
function getMsg(name) {
  return `Hey ${name}, i'm glad to help you learn.`;
}
//call getWelcomeMsg and store result in variable
var welcomeNick = getWelcomeMsg("Nick");
var welcomeJohn = getWelcomeMsg("John");

//print variable value in console
console.info(welcomeNick);

//json objects with function inside

//js event listeners
//function
console.log(typeof document.getElementById);

function jsownWithFunctions() {
  var person = {
    name: "nick",
    employee: false,
    age: 29,
    learn: function () {
      console.info("i am learning js");
    },
    play: function () {
      console.info("my name is", this.name);
    },
    knowledge: function () {
      console.info("i have knowledge");
    },
  };

  person.learn();
  person.play();

  console.info(person["name"]);
  var action = "knowledge";
  person[action]();
}
jsownWithFunctions();
