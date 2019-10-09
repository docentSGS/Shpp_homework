
function go() {
  let data = document.getElementById('user_input').value;

  let array1 = data.split(',');
  let array2 = array1.map(validUrl).filter(Boolean);
  console.log(array2);

  let tempArr;

  for (var i = 0; i < array2.length; i++) {

  
  }

  // array2.sort();

  // for (let i = 0; i < array2.length; i++) {
  //         array2[i] = array2[i].replace(/^https?:\/\//, '');
  //     }
  // let array3;
  // for (let i = 0; i < array2.length; i++) {
  //   // let array3 = array2[i].replace(/^https?:\/\//, " ");
  //   array3 = array2[i].toString().replace(/^https?:\/\//, " "); //("http://", "");
  //   }

    for (let i = 0; i < array2.length; i++) {
      document.write("<a href='" + array2[i] + "'>" + array2[i] + "</a>" + "<br>");
      // let link = array2[i];
      // let element = document.createElement('a');
      // element.setAttribute("href", link);
      // element.innerHTML = array2[i];
      // document.body.appendChild(element);
    }
    //   let a = document.createElement('a');
    //   for (let i = 0; i < array2.length; i++) {
    //       let link = document.createTextNode(array2[i]);
    //       a.appendChild(link);
    //       a.title = array2[i];
    //       a.href = array2[i];
    //       document.body.appendChild(a );
    // }



    document.getElementById('res').innerHTML = array2.sort(); //.forEach(alert);
  }

  function validUrl(value, index, array){
    let res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b)/gi);

      return  res;
    }
