function calcSec() {
  let usr_time = document.getElementById("usr_num").value;
  let temp = usr_time.split(':');
  let res = (+temp[0])*3600 + (+temp[1])*60 + (+temp[2]);

  document.getElementById('result_time').innerHTML = res;
}

function calcTime() {
  let user_sec = parseInt(document.getElementById('usr_input').value);
  let hours   = Math.floor(user_sec / 3600);
  let minutes = Math.floor((user_sec - (hours * 3600)) / 60);
  let seconds = Math.floor(user_sec % 60);
  if (hours < 10) {
    hours   = "0" + hours;
  }  if (minutes < 10) {
    minutes = "0" + minutes;
  }  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById('result_sec').innerHTML = hours + ':' + minutes + ':' + seconds;
}
