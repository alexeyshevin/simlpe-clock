var timeObj = document.getElementById("clock");
function clock() {
  let time = new Date().toTimeString().replace(/ .*/, '');

  return time;
}
setInterval(() => timeObj.innerHTML = clock(), 1000);

window.onload = clock;
