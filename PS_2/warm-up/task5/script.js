
/*Идея: входящий текст делим по запятой, заганяем в массив.
далее итерируемся по массиву, проверяем каждый стринг на соотв.формату;
то что не соотв - удаляем
то что соотв - выывести без http */


function go() {
  let data = document.getElementById('user_input').value;

  let array1 = data.split(',');
  let array2 = array1.map(validUrl);
  array2.remove(',');

  array2.
  document.getElementById('res').innerHTML = out;
}

function validUrl(value, index, array){
  let res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b)/gi);

   return  res;//(res !== null);
}

function remove(item){
  
  delete array2[item];
  array2.sort();
  array2.pop();
}
