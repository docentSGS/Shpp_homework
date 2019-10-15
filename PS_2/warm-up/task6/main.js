
function searchAndMark() {

  let userText = document.getElementById('user_text').value;
  let regExp = new RegExp(document.getElementById('user_regEx').value, 'g');
  let outText = userText.replace(regExp, '<mark>$&</mark>');
  
  // document.getElementById('result').innerHTML = outText;
  document.write(outText);
}
