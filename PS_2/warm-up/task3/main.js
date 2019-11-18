document.getElementById('btnCalc').onclick = function() {
  
  const date1 = document.getElementById("usrInput1").value;
  const date2 = document.getElementById("usrInput2").value;

  if (!date1 || !date2) {
    document.getElementById('calc_result').innerHTML = 'Please, enter data';
    return 0;
  }

  if (date1 >= date2) {
    calcDateAndTime(date1, date2);
  } else {
    calcDateAndTime(date2, date1);
  }
}

function calcDateAndTime(num1, num2) {
  const start = new Date(num1);
  const finish = new Date(num2);
  const year = start.getFullYear() - finish.getFullYear();
  const mon = start.getMonth() - finish.getMonth();
  const day = start.getDay() - finish.getDay();
  const hour = Math.abs(start.getHours() - finish.getHours());
  const min = Math.abs(start.getMinutes() - finish.getMinutes());
  const sec = start.getSeconds() - finish.getSeconds();

  document.getElementById('calc_result').innerHTML = "The time span between dates is: " + year +" year "+ mon + " mons " + day + " days " + hour + " hours " + min + " min " + sec + " sec.";

}
