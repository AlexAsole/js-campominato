// Il computer deve generare 16 numeri casuali tra 1 e 100.
function randomStuff(min, max){
  var pcNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  return pcNumber;
}

var pcArray = [];
var number

for (var i = 0; i < 16; i++) {
  number = randomStuff(1, 100);
  pcArray.push(number);
}

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
