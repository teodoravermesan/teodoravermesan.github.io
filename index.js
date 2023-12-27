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
fetch("skills.json")
  .then(function (response) {
    //transform the response into jason
    console.info("done?");
    return response.json();
  })
  //the data is transform then the function is transformed
  .then(function (skills) {
    //call the function to print skills
    printSkills(skills);
  });

//better to gave function to do specific things
//get the skills from outside and the print them
function printSkills(skills) {
  var skillsMapResult = skills.map(function (skill) {
    var cls = skill.favorite ? "favorite" : "";
    console.info("inside map", cls, skill);
    return `<li class = "${cls}">${skill.name} <span> - ${skill.endorcements}</span></li>`;
  });
  $("#skills ul").innerHTML = skillsMapResult.join("");
}
