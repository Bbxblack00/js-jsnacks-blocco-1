
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri ("a" più piccolo di "b" e "b" grande al
// massimo quanto il numero di elementi dell'array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra "a" e "b"

function random() {
  var rnd = Math.floor(Math.random() * 100) + 1;
  return rnd;
}

function rndArray(limit) {
  var arr = [];
  var numRnd;
  for (var i = 0; i < limit; i++) {
    numRnd = random();
    arr.push(numRnd);
  }
  return arr;
}

function splitter(min, max, array) {

  var limitedArray = [];
  var temp;
  for (var i = min; i < max; i++) {
    limitedArray.push(array[i]);
  }

  console.log(limitedArray);

}

function init() {

  var lim = parseInt(prompt("inserisci il numero di elementi dell'array"));

  var arrayPc = rndArray(lim);
  var maxUser = parseInt(prompt('inserisci il limite massimo'));
  var minUser = parseInt(prompt('inserisci il limite minimo'));

  splitter(minUser, maxUser, arrayPc);

}

$(document).ready(init)
