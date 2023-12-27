var activePage = "home";

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function showHomePage() {
  hide(activePage);
  show("home");
  activePage = "home";
}
function showSkillsPage() {
  console.log("activePage", activePage);
  hide(activePage);
  show("skills");
  activePage = "skills";
}

function showEducationPage() {
  hide(activePage);
  show("education");
  activePage = "education";
}

function showWorkPage() {
  hide(activePage);
  show("work");
  activePage = "work";
}

function showLicensesPage() {
  hide(activePage);
  show("licenses");
  activePage = "licenses";
}

function showLanguagesPage() {
  hide(activePage);
  show("languages");
  activePage = "languages";
}
showHomePage();
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
