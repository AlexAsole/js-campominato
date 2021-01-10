// Il computer deve generare 16 numeri casuali tra 1 e 100.
function randomStuff(min, max){
  var pcNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  return pcNumber;
}
function check (arr, usArr, us, t){
  if (t === arr.length){
    alert('Hai Vinto! Sei riuscito a fare ' + t + ' punti!')
    return false
  }
  if (arr.indexOf(us) !== -1) {
    alert('Hai Perso! Sei riuscito a fare ' + t + ' punti!')
    return false
  }

}
var pcArray = [];
var userArray = [];
var number;
var userN;
var times;

while (pcArray.length < 16) {
  number = randomStuff(1, 100);
  if (pcArray.indexOf(number) === -1){
    pcArray.push(number);
  }
}
console.log(pcArray)

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
times = 0;
do {
  userN = parseInt(prompt('inserisci un numero da 1 a 100!'));
  userArray.push(userN);
  times++;


} while (check(pcArray, userArray, userN, times))
