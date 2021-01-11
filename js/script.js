function randomStuff(min, max){ // funzione numeri casuali
  var pcNumber = Math.floor(Math.random() * (max + 1 - min) + min);
  return pcNumber;
}

function check (arr, us){ // funzione controllo numero incluso
  if (arr.indexOf(us) !== -1) {
    return false
  }
  return true
}

function InCheck(us, n, m){ // funzione controllo input valido
  if (isNaN(us)) {
    return false
  }
  if (us < n || us > m) {
    return false
  }
  return true
}

var btn = document.getElementById('play');
var min = 1;
var max;
var long = 16;
var pcArray;
var userArray;
var number;
var userN;
var perfect;



btn.addEventListener('click', function(){
  max = 0;
  pcArray = [];
  perfect = 0;
  userArray = [];
  userN = 0;
  switch (prompt('Scegli la difficoltà: facile, medio, difficile!')) { //scelta diffoltà
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
      max = 20;
      break;

  }
  // Il computer deve generare 16 numeri casuali tra 1 e 100, non ripetuti
  while (pcArray.length < long) {
    number = randomStuff(min, max);
    if (pcArray.indexOf(number) === -1){
      pcArray.push(number);
    }
  }
  pcArray.sort(function(a, b){return a - b}); // ordina l'array in ordine crescente
  console.log(pcArray); //mi serve per barar...controllare, assolutamente controllare!
  perfect = max - pcArray.length;
  while (check(pcArray, userN) && userArray.length < perfect) { // finchè il numero inserito o
                                                                // la lunghezza dell'array è inferiore
                                                                // al massimo consentito vai avanti
    userN = parseInt(prompt('inserisci un numero da ' + min + ' a ' + max + '!'));
    if (InCheck(userN, min, max)){ // se è un numero va avanti
      if(userArray.indexOf(userN) !== -1){ // se hai già inserito il numero ti blocca e riparti
        alert('Questo numero lo hai già inserito!')
      } else { // se non hai già inserito il numero vai avanti
        if(check(pcArray, userN) === false){ // se scrivi un  numero compreso nell'array ti blocca
          alert('Hai perso! Hai fatto '+ userArray.length + ' punti!' )
        }
        userArray.push(userN)
        if(userArray.length === perfect){ // se l'array utente ha raggiunto il massimo consentito hai vinto
          alert('Hai vinto! Hai fatto '+ userArray.length + ' punti!' )
        }
      }
    } else { // se non è un numero o un numero non compreso nell'intervallo min-max ti blocca e riparte
      alert('Lo ripeto, devi scrivere UN numero da ' + min + ' a ' + max +'!')
    }
  }
})
