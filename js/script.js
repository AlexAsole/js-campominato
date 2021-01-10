// Il computer deve generare 16 numeri casuali tra 1 e 100.
function randomStuff(min, max){
  var pcNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  return pcNumber;
}
function check (arr, us, t){
  if (t === arr.length){
    alert('Hai Vinto! Sei riuscito a fare ' + t + ' punti!')
    return false
  } else if (arr.indexOf(us) !== -1) {
    alert('Hai Perso! Sei riuscito a fare ' + t + ' punti!')
    return false
  } else {
    return true
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
pcArray.sort()
console.log(pcArray)

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
times = -1;
while (check(pcArray, userN, times)) {
  userN = parseInt(prompt('inserisci un numero da 1 a 100!'));
  if (!isNaN(userN)){
    if (userArray.indexOf(userN) === -1){
      userArray.push(userN)
    } else {
      alert('Hai perso, non puoi inserire due volte lo stesso numero!');
      break;
    }
    times++;
  } else {
    alert('Questo non è neanche un numero, prendi in giro?')
    break;
  }
}
