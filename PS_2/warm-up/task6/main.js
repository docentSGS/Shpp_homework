window.onload = function () {
  const button = document.getElementById('matchBtn');
  button.addEventListener('click', function(event) {
    event.preventDefault();
    searchAndMark();
  })
};

function searchAndMark() { 
  let inputText = document.getElementById('user_text').value;
  let regExp = new RegExp(document.getElementById('user_regEx').value, 'g');
  let outputText = inputText.replace(regExp, '<mark>$&</mark>');

  document.getElementById('result').innerHTML = outputText;
}
