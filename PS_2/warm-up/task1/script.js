function calcSum() {
  let x = parseInt(document.getElementById("num1").value);
  let y = parseInt(document.getElementById("num2").value);
  let sum = 0;
  if(x < y) {
    for(let i = x; i <= y; i++){
      if(Math.abs(i)%10===2 || Math.abs(i)%10===3 || Math.abs(i)%10===7)
      sum += i;
    }
  } else {
    for(let i = y; i <= x; i++){
      if(Math.abs(i)%10===2 || Math.abs(i)%10===3 || Math.abs(i)%10===7)
      sum += i;
    }
  }
  document.getElementById("res").innerHTML = sum;
}
