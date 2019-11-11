function makeChessboard() {
  let size = document.getElementById('user_size').value;
  let tempArray = size.split('x');
  let x = parseInt(tempArray[0]);
  let y = parseInt(tempArray[1]);

  let box = document.getElementById('box');
  
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
makeChessboard();
