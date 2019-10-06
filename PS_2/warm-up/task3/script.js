function calcTimeSpan() {
  let date1 =  document.getElementById("usr_dt1").value;
  let date2 = document.getElementById("usr_dt2").value;
  let start = new Date(date1);
  let finish = new Date(date2);
  let year = finish.getFullYear() - start.getFullYear();
  let mon = finish.getMonth() - start.getMonth();
  let day = finish.getDate() - start.getDate();
  let hour = finish.getHours() - start.getHours();
  let min = finish.getMinutes() - start.getMinutes();
  let sec = finish.getSeconds() - start.getSeconds();

  document.write("The time span between dates is: " + year +" year "+ mon + " mons " + day + " days " + hour +" hours " + min + " min " + sec + " sec.");
}
