window.onload = function() {
  const button = document.getElementById('btn_create');
  button.onclick = makeChessboard;
}

function makeChessboard() {
  const boxSize = document.getElementById('user_size').value;
  const box = document.getElementById('box');
  const patern = /^[0-9]x[0-9]$/; // /^[0-9]+x[0-9]+$/

  box.innerHTML = '';

  if (!boxSize.match(patern)) {
    box.innerHTML = 'Please, enter data to valid format';
    return 0;
  }

  let coordinateArray = boxSize.split('x');
  let x = parseInt(coordinateArray[0]);
  let y = parseInt(coordinateArray[1]);

  for (let i = 0; i < x; i++) {
    let boxRow = document.createElement('div');
    boxRow.className = 'board';
    box.appendChild(boxRow);
    for (let j = 0; j < y; j++) {
      let boxElement = document.createElement('div');
      if (i%2 == j%2) {
        boxElement.className ='blackBlock';
      } else {
        boxElement.className ='whiteBlock';
      }
      boxRow.appendChild(boxElement);
    }
  }
}
