console.log("we r connected");

let setAlarm = document.getElementById("alarmSubmit");
// you must use url for playing music on alarm time
var audio = new Audio('<music url>');

// function to play the alarm ring tone
function ringBell() {
    audio.play();
}
setAlarm.addEventListener('click', setAlarmSubmit);

function setAlarmSubmit(e) {
    e.preventDefault();
    console.log("function is working")
    let alram = document.getElementById("alarm")
    alarmDate = new Date(alram.value);
    console.log(`Alarm is set for ${alarmDate}`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            console.log("Ringing Now");
            ringBell();
        }, timeToAlarm)
    }
}