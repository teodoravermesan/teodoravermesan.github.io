let activePage = "home";

function $(selector) {
  return document.querySelector(selector);
}

function hide(id) {
  $("#" + id).style.display = "none";
}

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

function initEvents() {
  $("#top-menu-bar").addEventListener("click", (e) => {
    const id = e.target.dataset.page;
    if (id) {
      showPage(id);
    }
  });
}
function loadSkills() {
  fetch("skills.json")
    .then((response) => response.json())
    .then((skills) => {
      printSkills(skills);
    });
}

function printSkills(skills) {
  skills = sortSkillsByEndorcements(skills);
  const skillsMapResult = skills.map((skill) => {
    const cls = skill.favorite ? "favorite" : "";
    return `<li class = "${cls}">${skill.name} <span> - ${skill.endorcements}</span></li>`;
  });
  $("#skills ul").innerHTML = skillsMapResult.join("");
}

function sortSkillsByEndorcements(skills) {
  return skills.sort((a, b) => b.endorcements - a.endorcements);
}

function sortSkillsByName(skills) {
  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

function loadEducation() {
  fetch("education.json")
    .then((response) => response.json())
    .then((education) => {
      printEducation(education);
    });
}

function printEducation(education) {
  education = sortEducationByDate(education);
  const educationMapResult = education.map((ed) => {
    return `<li class = >${ed.period} <span> : ${ed.place}</span> •  ${ed.degree}</span></li>`;
  });
  $("#education ul").innerHTML = educationMapResult.join("");
}

function sortEducationByDate(education) {
  return education.sort((a, b) => b.period > a.period);
}

function loadExperience() {
  fetch("experience.json")
    .then((response) => response.json())
    .then((experience) => {
      printJsonIntoTable(experience, "experience-table");
    });
}

function loadLanguages() {
  fetch("languages.json")
    .then((response) => response.json())
    .then((languages) => {
      printJsonIntoTable(languages, "languages-table");
    });
}

function printJsonIntoTable(jsonData, elementId) {
  var col = [];
  for (var i = 0; i < jsonData.length; i++) {
    for (var key in jsonData[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  //This Code creates HTML table
  var table = document.createElement("table");
  //This Code getsrows for header creader above.
  var tr = table.insertRow(-1);
  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
  }
  //This Code adds data to table as rows
  for (var i = 0; i < jsonData.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = jsonData[i][col[j]];
    }
  }
  //This Code gets the all columns for header
  var divContainer = document.getElementById(elementId);
  divContainer.innerHTML = " ";
  divContainer.appendChild(table);
}

showPage(activePage);
initEvents();
loadEducation();
loadExperience();
loadLanguages();
loadSkills();

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
onscroll();
