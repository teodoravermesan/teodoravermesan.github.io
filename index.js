function showHomePage() {
  document.getElementById("home").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("education").style.display = "none";
  document.getElementById("work").style.display = "none";
  document.getElementById("licenses").style.display = "none";
  document.getElementById("languages").style.display = "none";
}
showHomePage();
function showSkillsPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
  document.getElementById("education").style.display = "none";
  document.getElementById("work").style.display = "none";
  document.getElementById("licenses").style.display = "none";
  document.getElementById("languages").style.display = "none";
}

function showEducationPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("education").style.display = "block";
  document.getElementById("work").style.display = "none";
  document.getElementById("licenses").style.display = "none";
  document.getElementById("languages").style.display = "none";
}

function showWorkPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("education").style.display = "none";
  document.getElementById("work").style.display = "block";
  document.getElementById("licenses").style.display = "none";
  document.getElementById("languages").style.display = "none";
}

function showLicensesPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("education").style.display = "none";
  document.getElementById("work").style.display = "none";
  document.getElementById("licenses").style.display = "block";
  document.getElementById("languages").style.display = "none";
}

function showLanguagesPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("education").style.display = "none";
  document.getElementById("work").style.display = "none";
  document.getElementById("licenses").style.display = "none";
  document.getElementById("languages").style.display = "block";
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
