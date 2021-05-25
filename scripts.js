function clock() 
{
const fullDate = new Date();
let hours = fullDate.getHours();
let minutes = fullDate.getMinutes();
let secs = fullDate.getSeconds();

if (minutes < 10) {mintues = "0" + minutes};
if (secs < 10) {secs = "0" + secs};
if (hours > 12) {hours = hours -12};
if (hours > 12) {hours = "0"+ (hours -12)}
else if (hours < 10) {hours = "0" + hours};

document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('secs').innerHTML = secs;
}
 
setInterval (clock, 1000);

clock();