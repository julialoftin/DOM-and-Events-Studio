// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let takeoff = document.getElementById("takeoff");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    takeoff.addEventListener("click", function(){
        alert("Confirm that the shuttle is ready for liftoff");
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = 10000;
    });

    let landing = document.getElementById("landing");

    landing.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    let missionAbort = document.getElementById("missionAbort");

    missionAbort.addEventListener("click", function(){
        alert("Confirm that you want to abort the mission");
        document.getElementById("flightStatus").innerHTML = "Mission aborted."
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    let up = document.getElementById("up");
    let rocket = document.getElementById("rocket")

    up.addEventListener("click", function(){
        rocket.style.bottom = "10px";
    })

});