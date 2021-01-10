function randomStuff(min, max){
  var pcNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  return pcNumber;
}
function check (arr, us, t){ // controllo base, alcune cose non sono riuscito a farle funzionare qui e le ho messe fuori
  if (t === arr.length){ // se raggiungi il numero necessario hai vinto e si blocca
    alert('Hai Vinto! Sei riuscito a fare ' + t + ' punti!')
    return false
  } else if (arr.indexOf(us) !== -1) { //se inserisci un numero presente hai perso e si blocca
    alert('Hai Perso! Sei riuscito a fare ' + t + ' punti!')
    return false
  } else { // se le due sopra non si verificano va avanti tranquillo
    return true
  }
}
var min = 1;
var max
var long = 16;
var btn = document.getElementById('play');
var pcArray;
var userArray;
var number;
var times;



// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
btn.addEventListener('click', function(){
  switch (prompt('Scegli la difficoltà: facile, medio, difficile! (default è facile)')) {
    case 'facile':
      max = 100;
      break;
    case 'medio':
      max = 80;
      break;
    case 'difficile':
      max = 50;
      break;
    default:
      max = 100;
      break;

  }
  // Il computer deve generare 16 numeri casuali tra 1 e 100, non ripetuti
  pcArray = [];
  while (pcArray.length < long) {
    number = randomStuff(min, max);
    if (pcArray.indexOf(number) === -1){
      pcArray.push(number);
    }
  }
  pcArray.sort(function(a, b){return a - b}); // ordina l'array in ordine crescente
  console.log(pcArray); //mi serve per barar...controllare, assolutamente controllare!
  userArray = [];
  times = -1;
  while (check(pcArray, userN, times)) {
   var userN = parseInt(prompt('inserisci un numero da ' + min + ' a ' + max + '!'));
    if (!isNaN(userN)){ //se è un numero va avanti tranquillo
      if ((userN < min) || (userN > max)){ //se non è compreso tra 1 e 100 ti blocca
        alert('Hai perso, non puoi inserire numeri più piccoli di ' + min + ' o più grandi di ' + max + '!')
        break;
      } else { //se è compreso tra 1 e 100 va avanti tranquillo
        if (userArray.indexOf(userN) === -1){ // se non hai già inserito questo numero, vai avanti tranquillo
          userArray.push(userN)
          times++;
        } else { // se hai già inserito questo numero ti blocca
          alert('Hai perso, non puoi inserire due volte lo stesso numero!');
          break;
        }
      }
    } else { // se non è un numero ti blocca
      alert('Questo non è neanche un numero, prendi in giro?')
      break;
    }
  }
})
