// alert('Ciao');
// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// Il computer deve generare 16 numeri casuali da 1 a 100.

for (var i = 1; i <= 16 ; i++) {
  var genera = getRandomIntInclusive(100, 1);
  console.log(genera);
}
// var arrayNumeri = [];
// arrayNumeri.push(genera);
// console.log(genera);
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// In seguito deve chiedere all’utente di inserire un numero alla
// volta, sempre compreso tra 1 e 100.

for (var i = 1; i <=16; i++){
  var numeroUtente = parseInt(prompt('Inserisci 16 numeri compresi tra 1 e 100'));
  console.log(numeroUtente);
}

// var numeriUtente = getUserNumber(numeri);
// console.log(numeri);

// function getUserNumber(numeri) {
//   for (var i = 1; i <=16; i++){
//     var scelta = parseInt(prompt('Inserisci 16 numeri compresi tra 1 e 100'));
//
//   }
//   return scelta;
// }
