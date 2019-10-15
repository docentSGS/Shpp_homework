window.onload = function () {
  let onClickBtn = document.getElementById('matchBtn');
  onClickBtn.addEventListener('click', function(event) {
    event.preventDefault();
    searchAndMark();
  })
};

function searchAndMark() {
  let inputText = document.getElementById('userText').value;
  let regExp = new RegExp(document.getElementById('userExp').value, 'g');
  let outputText = inputText.replace(regExp, '<mark>$&</mark>');

  document.getElementById('result').innerHTML = outputText;
}
