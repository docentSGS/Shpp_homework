document.getElementById('btnCalc').onclick = function() {

  const date1 = document.getElementById("usrInput1").value;
  const date2 = document.getElementById("usrInput2").value;

  if (!date1 || !date2) {
    document.getElementById('calc_result').innerHTML = 'Please, enter data';
    return 0;
  }

  let startTime = new Date(date1);
  let finishTime = new Date(date2);

  if (startTime >= finishTime) {
    calcDateAndTime(startTime, finishTime);
  } else {
    calcDateAndTime(finishTime, startTime);
  }
}

function calcDateAndTime(startTime, finishTime) {
  const year = Math.abs(startTime.getFullYear() - finishTime.getFullYear());
  const mon = Math.abs(startTime.getMonth() - finishTime.getMonth());
  const day = Math.abs(startTime.getDate() - finishTime.getDate());
  const hour = Math.abs(startTime.getHours() - finishTime.getHours());
  const min = Math.abs(startTime.getMinutes() - finishTime.getMinutes());
  const sec = Math.abs(startTime.getSeconds() - finishTime.getSeconds());

  document.getElementById('calc_result').innerHTML = "The time span between dates is: " + year + " year " + mon + " mons " + day + " days " + hour + " hours " + min + " min " + sec + " sec.";

}
