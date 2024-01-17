function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    if (skills.style.display == "block") {
        skills.style.display = "none";
    } else {
        skills.style.display = "block";
    }
    if (skillsMember.style.display == "block") {
        skillsMember.style.display = "none";
    } else {
        skillsMember.style.display = "block";
    }
}