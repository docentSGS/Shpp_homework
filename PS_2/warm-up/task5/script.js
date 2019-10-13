
const userLinks = document.getElementById('user_input');
userLinks.onblur = prepareLinkText;

//Prepare the user to transform text into links
function prepareLinkText() {
  let data = userLinks.value;
  let tempArray = data.split(',');

  tempArray = tempArray.map(function(e) {
    return e.replace(/\s/g, '');
  });

  tempArray = tempArray.map(function(e) {
    return e.replace(/^https?:\/\//, '');
    });

    let finishedArray = tempArray.map(validUrlAndIp).filter(Boolean);
    console.log(finishedArray);
    finishedArray.sort();
    makeLink(finishedArray);
  }

  // Make an array of substrings links
  function makeLink(finishedArray) {
    for (let i = 0; i < finishedArray.length; i++) {
      let link = document.createElement('a');
      let linkTitle = document.createTextNode(finishedArray[i]);
      link.appendChild(linkTitle);
      link.target = 'blank';
      link.href = finishedArray[i];
      link.innerHTML = finishedArray[i] + '<br>';
      document.body.appendChild(link);
    }
  }
  
  // Weed out the garbage from the input by the user data
  function validUrlAndIp(value, index, array){
    let res = value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b)/gi);
      return res;
    }
