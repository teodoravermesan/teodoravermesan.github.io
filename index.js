var activePage = "skills";

function $(selector) {
  return document.querySelector(selector);
}
//simple concatanation
function hide(id) {
  $("#" + id).style.display = "none";
}

//string template
function show(id) {
  $(`#${id}`).style.display = "block";
}
//better to have function to do specific things
function showPage(id) {
  hide(activePage);
  //querySelector
  $(`#top-menu-bar a[data-page="${activePage}"]`).classList.remove("active");
  show(id);
  $(`#top-menu-bar a[data-page="${id}"]`).classList.add("active");
  activePage = id;
}

function initEvents() {
  //give me the element, add the event listener, the element is clicked and then we have a function that is executed every time at click
  $("#top-menu-bar").addEventListener("click", function (e) {
    var id = e.target.dataset.page;
    console.info("Click on", id);
    if (id) {
      showPage(id);
    }
  });
}
//use array.map to create skills list
function loadSkills() {
  fetch("skills.json")
    .then(function (response) {
      //transform the response into json
      console.info("done?");
      return response.json();
    })
    //the data is transform then the function is transformed
    .then(function (skills) {
      //call the function to print skills
      printSkills(skills);
    });
}

//get the skills from outside and the print them
function printSkills(skills) {
  skills = sortSkillsByEndorcements(skills);
  var skillsMapResult = skills.map(function (skill) {
    var cls = skill.favorite ? "favorite" : "";
    console.info("inside map", cls, skill);
    return `<li class = "${cls}">${skill.name} <span> - ${skill.endorcements}</span></li>`;
  });
  $("#skills ul").innerHTML = skillsMapResult.join("");
}

function sortSkillsByEndorcements(skills) {
  return skills.sort(function (a, b) {
    console.log(a, b);
    return b.endorcements - a.endorcements;
  });
}

function sortSkillsByName(skills) {
  return skills.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}
showPage(activePage);
initEvents();
loadSkills();

// The fetch() method starts the process of fetching a resource from a server.
// The fetch() method returns a Promise that resolves to a Response object.
