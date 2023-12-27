function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function showHomePage() {
  show("home");
  hide("skills");
  hide("education");
  hide("work");
  hide("licenses");
  hide("languages");
}
showHomePage();
function showSkillsPage() {
  show("skills");
  hide("home");
  hide("education");
  hide("work");
  hide("licenses");
  hide("languages");
}

function showEducationPage() {
  show("education");
  hide("home");
  hide("skills");
  hide("work");
  hide("licenses");
  hide("languages");
}

function showWorkPage() {
  show("work");
  hide("home");
  hide("skills");
  hide("education");
  hide("licenses");
  hide("languages");
}

function showLicensesPage() {
  show("licenses");
  hide("home");
  hide("skills");
  hide("education");
  hide("work");
  hide("languages");
}

function showLanguagesPage() {
  show("languages");
  hide("home");
  hide("skills");
  hide("education");
  hide("licenses");
  hide("work");
}

var homeLink = document.querySelectorAll("#top-menu-bar a")[0];
homeLink.addEventListener("click", showHomePage);

var skillsLink = document.querySelectorAll("#top-menu-bar a")[1];
skillsLink.addEventListener("click", showSkillsPage);

var educationLink = document.querySelectorAll("#top-menu-bar a")[2];
educationLink.addEventListener("click", showEducationPage);

var workLink = document.querySelectorAll("#top-menu-bar a")[3];
workLink.addEventListener("click", showWorkPage);

var licenseLink = document.querySelectorAll("#top-menu-bar a")[4];
licenseLink.addEventListener("click", showLicensesPage);

var languagesLink = document.querySelectorAll("#top-menu-bar a")[5];
languagesLink.addEventListener("click", showLanguagesPage);
