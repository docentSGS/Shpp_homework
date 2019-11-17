window.onload = function() {
  const btnCalc = document.getElementById('btnCalc');
  btnCalc.onclick = calcSum;
}


function calcSum() {
  const first = document.getElementById('usr_input1').value;
  const second = document.getElementById('usr_input2').value;
  const result = document.getElementById('calc_result');
  const pattern = /^-?[0-9]*$/;

  if (!first.match(pattern) || !second.match(pattern)) {
    result.innerHTML = 'Please, enter correct integer number';
    return;
  } else {
    x = parseInt(first);
    y = parseInt(second);
  }
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
  result.innerHTML = sum;
}
