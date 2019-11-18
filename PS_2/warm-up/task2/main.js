function calcSec() {
  const usrTime = document.getElementById("usrInput2").value;
  const resultStep2 = document.getElementById('result_time');
  const timePattern = /^\d{2}:\d{2}:\d{2}$/;

  if (!usrTime.match(timePattern)) {
    resultStep2.innerHTML = 'Please, enter correct data';
    return 0;
  }

  if (usrTime.match(timePattern)) {
    let temp = usrTime.split(':');
    let res = (+temp[0])*3600 + (+temp[1])*60 + (+temp[2]);
    resultStep2.innerHTML = res + ' seconds';
  }
}

function calcTime() {
  const usrSec = parseInt(document.getElementById('usrInput1').value);
  const resultStep1 = document.getElementById('result_sec');
  const secPattern = /^\d{1,}$/;

  if (!secPattern.test(usrSec)) {
    resultStep1.innerHTML = 'Please, enter correct data';
    return 0;
  }

  if (secPattern.test(usrSec)) {
    hours   = Math.floor(usrSec / 3600);
    minutes = Math.floor((usrSec - (hours * 3600)) / 60);
    seconds = Math.floor(usrSec % 60);
    if (hours < 10) {
      hours   = "0" + hours;
    }  if (minutes < 10) {
      minutes = "0" + minutes;
    }  if (seconds < 10) {
      seconds = "0" + seconds;
    }
    resultStep1.innerHTML = hours + ':' + minutes + ':' + seconds;
  }
}
