
function go() {
  let data = document.getElementById('user_input').value;

  let array1 = data.split(',');
  let array2 = array1.map(validUrl).filter(Boolean);
  console.log(array2);
  
  for (let i = 0; i < array2.length; i++) {
          array2[i] = array2[i].replace(/^https?:\/\//, '');
      }


  document.getElementById('res').innerHTML = array2.sort(); //.forEach(alert);
}

function validUrl(value, index, array){
  let res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b)/gi);

    return  res;
  }
