<!-- simple concatanation
function hide(id) {
  $("#" + id).style.display = "none";
}

string template
function show(id) {
  $(`#${id}`).style.display = "block";
}

better to have function to do specific things

querySelector
$(`#top-menu-bar a[data-page="${activePage}"]`).classList.remove("active");

 The fetch() method starts the process of fetching a resource from a server.
 The fetch() method returns a Promise that resolves to a Response object.

 var => const & let
var name = "teo";
from functions to arrow functions
function hoistedFunction() {
return name;
}

var test = function () {
return name;
};
//arrow functions: () => {}
const getUserName = () => {
return name;
};

anonymous functions

function () {}
() = {}


//use array.map to create skills list
function loadSkills() {
  fetch("skills.json")
    .then((response) => {
      //transform the response into json
      console.info("done?");
      return response.json();
    })
    //the data is transform then the function is transformed
    .then((skills) => {
      //call the function to print skills
      printSkills(skills);
    });
}

function initEvents() {
  //give me the element, add the event listener, the element is clicked and then we have a function that is executed every time at click
  $("#top-menu-bar").addEventListener("click", (e) => {
    const id = e.target.dataset.page;
    console.info("Click on", id);
    if (id) {
      showPage(id);
    }
  });
} -->

[Check my online CV ](https://teodoravermesan.github.io/)
