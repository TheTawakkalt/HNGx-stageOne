const d = new Date();
let day = d.toISOString().split(".")[0] + "Z";
let utc = document.getElementById("utc");
let utctime = document.createTextNode(day);
utc.appendChild(utctime);
let dow = document.getElementById("day");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayow = weekday[d.getDay()];
let dayText = document.createTextNode(dayow);
dow.appendChild(dayText);
