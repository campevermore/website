const sectionMain = document.getElementById("main");
const sectionGoal = document.getElementById("goal");
const sectionMission = document.getElementById("mission");
const sectionContact = document.getElementById("contact");
const sectionMainBoundingRect = sectionMain.getBoundingClientRect();
const sectionGoalBoundingRect = sectionGoal.getBoundingClientRect();
const sectionMissionBoundingRect = sectionMission.getBoundingClientRect();
const sectionContactBoundingRect = sectionContact.getBoundingClientRect();

window.addEventListener("scroll", function(args) {
    const bodyRect = document.body.getBoundingClientRect();
    const negY = -bodyRect.y;
    console.log("NEGY: " + negY);
    if (negY <= sectionMainBoundingRect.bottom - 20) {
        if (window.location.hash != "") {
            console.log("MAIN");
            history.replaceState("", document.title, window.location.pathname + window.location.search);
        }
    } else if (negY <= sectionGoalBoundingRect.bottom) {
        if (window.location.hash != "#goal") {
            console.log("GOAL");
            history.replaceState(null, null, "#goal");
        }
    } else if (negY <= sectionMissionBoundingRect.bottom) {
        if (window.location.hash != "#mission") {
            console.log("MISSION");
            history.replaceState(null, null, "#mission");
        }
    } else if (negY <= sectionContactBoundingRect.bottom - 20) {
        if (window.location.hash != "#contact") {
            console.log("CONTACT");
            history.replaceState(null, null, "#contact");
        }
    }
});