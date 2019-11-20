window.onload = function () {
  const onClickBtn = document.getElementById('matchBtn');
  onClickBtn.addEventListener('click', function(e) {
    e.preventDefault();
    searchAndMark();
  })
};

function searchAndMark() {
  const inputText = document.getElementById('userText').value;
  const regExp = new RegExp(document.getElementById('userExp').value, 'g');

  document.getElementById('result').innerHTML = inputText.replace(regExp, '<mark>$&</mark>');
}
