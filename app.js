const currentTime = document.getElementById("clock"),
content = document.querySelector(".content"),
 setAlarmBtn = document.querySelector('button'),
selectMenu = document.querySelectorAll("select");
let alarmTime, isAlarmSet,
ringtone = new Audio("C:\\Users\\user\\Desktop\\learning\\digital clock\\files\\ringtone.mp3");


// Populate hour and minute options dynamically
    for (let i = 12; i > 0; i--) {
      i = i < 10 ? `0${i}` : i;
      let option = `<option value="${i}">${i}</option>`;
      selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
  }
  

  for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}



//Calling the timeShow function every second
setInterval( () => {
//Getting current time and Date
let date = new Date(),
h = date.getHours(),
m = date.getMinutes(),
s = date.getSeconds(),
ampm = "AM";
if(h >= 12) {
    h = h - 12;
    ampm = "PM";
}
h = h == 0 ? h = 12 : h;
h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;
currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
let formattedAlarmTime = `${h}:${m} ${ampm}`;

    if (alarmTime === formattedAlarmTime) {
        ringtone.play();
        ringtone.loop = true;
    }
}, 1000);


function setAlarm() {
  if (isAlarmSet) {
      alarmTime = "";
      ringtone.pause();
      content.classList.remove("disable");
      setAlarmBtn.innerText = "Set Alarm";
      return isAlarmSet = false;
  }
  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
  if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
      return alert("Please, select a valid time to set Alarm!");
  }
  alarmTime = time;
  isAlarmSet = true;
  content.classList.add("disable");
  setAlarmBtn.innerText = "Clear Alarm";
}
setAlarmBtn.addEventListener("click", setAlarm);



    