window.addEventListener("load", () => {
    const sectionMain = document.getElementById("main");
    const sectionGoal = document.getElementById("goal");
    const sectionMission = document.getElementById("mission");
    const sectionContact = document.getElementById("contact");
    const sectionMainBoundingRect = sectionMain.getBoundingClientRect();
    const sectionGoalBoundingRect = sectionGoal.getBoundingClientRect();
    const sectionMissionBoundingRect = sectionMission.getBoundingClientRect();
    const sectionContactBoundingRect = sectionContact.getBoundingClientRect();

    let dateOfButton = 0;
    let scrollDebounce = 2000;

    window.addEventListener("click", function(args) {
        if (args.target != null && (args.target.nodeName == "A" || args.target.nodeName == "BUTTON")) {
            dateOfButton = Date.now();
        }
    });

    window.addEventListener("scroll", function(args) {
        if (Date.now() - dateOfButton < scrollDebounce) {
            return;
        }
        const bodyRect = document.body.getBoundingClientRect();
        const negY = -bodyRect.y;
        if (negY <= sectionMainBoundingRect.bottom) {
            if (window.location.hash != "") {
                history.replaceState("", document.title, window.location.pathname + window.location.search);
            }
        } else if (negY <= sectionGoalBoundingRect.bottom) {
            if (window.location.hash != "#goal") {
                history.replaceState(null, null, "#goal");
            }
        } else if (negY <= sectionMissionBoundingRect.bottom) {
            if (window.location.hash != "#mission") {
                history.replaceState(null, null, "#mission");
            }
        } else if (negY <= sectionContactBoundingRect.bottom) {
            if (window.location.hash != "#contact") {
                history.replaceState(null, null, "#contact");
            }
        }
    });
});