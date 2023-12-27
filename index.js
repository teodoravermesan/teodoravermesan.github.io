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

function showPage(id) {
  hide(activePage);
  $(`#top-menu-bar a[data-page="${activePage}"]`).classList.remove("active");
  show(id);
  $(`#top-menu-bar a[data-page="${id}"]`).classList.add("active");
  activePage = id;
}

showPage(activePage);

$("#top-menu-bar").addEventListener("click", function (e) {
  var id = e.target.dataset.page;
  console.info("Click on", id);
  if (id) {
    showPage(id);
  }
});
//querySelector
//use array.map to create skills list
var skills = [
  "HTML",
  "CSS",
  "Java",
  "javaScript",
  "Cucumber",
  "Selenium",
  "Jira",
  "TestRail",
];
var skillsMapResult = skills.map(function (skill) {
  console.info("inside map", skill);
  return `<li>${skill}</li>`;
});
//console.warn("result", skillsMapResult);
$("#skills ul").innerHTML = skillsMapResult.join("");
