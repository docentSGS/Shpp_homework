window.onload = function() {
  rebuildTable(workingData);

  document.getElementById('category').addEventListener('click', function() {
    rebuildTable(sortColumn(workingData, "category"));
  });

  document.getElementById('name').addEventListener('click', function() {
    rebuildTable(sortColumn(workingData, "name"));
  });

  document.getElementById('filter').addEventListener('change', function(event) {
    if (event.target.value === '') {
      workingData = GOODS;
      rebuildTable(workingData);
    } else {
      workingData = GOODS.filter(entry => entry.category === event.target.value)
      rebuildTable(workingData);
    }
  });

  document.getElementById('findGoods').addEventListener('input', function(event) {
    workingData = GOODS.filter(entry => entry.name.toLowerCase().match(event.target.value.toLowerCase()));
    rebuildTable(workingData);
  });
}

function rebuildTable(data) {
  let newTable = '<tbody>';
  let totalPrise = 0;
  data.forEach((entry) => {
    newTable += '<tr>';
    for (let element in entry) {
      newTable += '<td>' + entry[element] + '</td>';
    }
    newTable += '</tr>';
    totalPrise += entry.amount * entry.price;
  });
  newTable += '</tbody>';

  ALL_TABLE_DATA.innerHTML = newTable;
  AMOUNT.innerHTML = totalPrise +'$';
}

let flag = true;

function sortColumn(array, title) {
  array.sort((a, b) => {
    if (flag){
      return sortData(a, b, title);
    } else{
      return sortData(b, a, title);
    }
  });
  flag = !flag;
  return array;
}

function sortData(a, b, title) {
  if (a[title] > b[title]){
    return 1;
  }
  if (a[title] < b[title]){
    return -1;
  }
  return 0;
}

const ALL_TABLE_DATA = document.getElementById('tBody');
const AMOUNT = document.getElementById('sumTotal');
const GOODS = [{
  category: 'furniture',
  name: 'Chair',
  amount: 1,
  price: 20
},{
  category: 'supplies',
  name: 'Gel Pen',
  amount: 20,
  price: 2
},{
  category: 'other',
  name: 'Trash Bin',
  amount: 1,
  price: 5
},{
  category: 'furniture',
  name: 'Sofa',
  amount: 1,
  price: 50
},{
  category: 'supplies',
  name: 'Notebook',
  amount: 3,
  price: 3
},{
  category: 'other',
  name: 'Calendar 2019',
  amount: 1,
  price: 3
}];

let workingData = GOODS;
