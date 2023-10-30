/* Non siete obbligati a stampare i risultati del documento. Consideratelo un BONUS su ogni esercizio

1. Crea una funzione che crea la versione girata di una parola. Chiedi all'utente una parola e mostra la versione girata della parola.

2. Crea una funzione che concatena una lista di stringhe. Chiedi all'utente quante stringhe vuole concatenare e poi mostragli il risultato.

3. Crea una funzione che calcola il doppio di un numero. Quindi chiedi all'utente 10 numeri. Per ogni numero, mostra all'utente il doppio, usando la funzione.

4. Crea una funzione che transforma una stringa in maiuscolo o minuscolo in base ad un parametro. Quindi, crea un array che contiene tutte le lettere dell'alfabeto, ciascuna randomicamente maiuscola o minuscola.
Consiglio: potete creare la stringa 'abcdefghijklmnopqrstuvz' e con un ciclo for controllare ogni carattere della stringa, ovvero ogni lettera dell'alfabeto.

5. Crea una funzione che esegue il lancio di una moneta (ritorna testa o croce, casualmente). Quindi, chiedi all'utente quanti lanci vuole effettuare e se punta su testa o croce.
Se la maggioranza dei lanci sono uguali a ciò che ha puntato l'utente, mostragli che ha vinto. Altrimenti, mostragli che ha perso.

6. Crea una funzione che genera il lancio di un dado a 6 facce (ritorna un numero casuale tra 1 e 6). Quindi simula un lancio per il computer e un lancio per l'utente. Mostra all'utente quanto è stato il risultato del computer e quanto è stato il risultato dell'utente e comunicagli se ha vinto o meno.

7. Crea una funzione che simula un lancio della roulette (deve ritornare un numero casuale tra 0 e 36).
Quindi chiedi all'utente se vuole puntare su un numero o su pari/dispari. Quindi esegui un lancio della roulette e fagli sapere se ha vinto.

8. Il casinò:
Chiedi all'utente a quale gioco vuole giocare tra lancio della moneta, lancio dei dadi e roulette. Quindi esegui una delle funzioni che avevi già preparato per i precedenti esercizi.

9. Crea una lista di animali (stringhe) che fanno parte dello Zoo. Crea una funzione che a partire da una stringa, ci fa sapere se nello zoo c'è quell'animale. Chiedi all'utente quale animale vuole vedere. Comunicagli, usando la funzione, se l'animale c'è o meno.
BONUS: la funzione deve funzionare anche se l'utente scrive il nome tutto maiuscolo/tutto maiuscolo/un mix. Ci interessa solo che il nome dell'animale sia lo stesso.

10. Crea una funzione che ordina una lista di numeri dal più piccolo al più grande. Chiedi all'utente quanti numeri vuole inserire. Quindi, chiedi all'utente i numeri. Mostra all'utente la lista di numeri ordinata dal più piccolo al più grande.

11. Crea una funzione che ordina una lista di numeri. In base a uno dei parametri, viene ordinata dal più piccolo al più grande o viceversa. Chiedi all'utente quanti numeri vuole inserire. Quindi, chiedi all'utente i numeri. Infine, chiedi all'utente se li vuole visualizzare in ordine crescente o decrescente. Mostra all'utente la lista di numeri ordinata nel modo in cui ha chiesto.

*/

//1. Crea una funzione che crea la versione girata di una parola. Chiedi all'utente una parola e mostra la versione girata della parola.

/*
const userWord = prompt("Write a word");

function reverseWord(string) {
  let slpitWord = string.split("");
  let reverseString = slpitWord.reverse();
  let joinReverseString = reverseString.join("");
  console.log(joinReverseString);
}

reverseWord(userWord);
*/

//2. Crea una funzione che concatena una lista di stringhe. Chiedi all'utente quante stringhe vuole concatenare e poi mostragli il risultato.
/*

// NOT FINISHED
const userNumber = prompt("Write a number");
let stringsArray = ["alessio", "mela", "ciao"];
let concatStrings = stringsArray.join();
console.log(concatStrings);

function stringsConcat() {

}
*/

//3. Crea una funzione che calcola il doppio di un numero. Quindi chiedi all'utente 10 numeri. Per ogni numero, mostra all'utente il doppio, usando la funzione.

/*
for (let i = 0; i < 10; i++) {
  let userNumber = prompt("Write a number");
  function double(number) {
    let timesTwo = number * 2;
    alert(timesTwo);
  }
  double(userNumber);
}
*/

// 4. Crea una funzione che transforma una stringa in maiuscolo o minuscolo in base ad un parametro. Quindi, crea un array che contiene tutte le lettere dell'alfabeto, ciascuna randomicamente maiuscola o minuscola.
// Consiglio: potete creare la stringa 'abcdefghijklmnopqrstuvz' e con un ciclo for controllare ogni carattere della stringa, ovvero ogni lettera dell'alfabeto.

// 5. Crea una funzione che esegue il lancio di una moneta (ritorna testa o croce, casualmente). Quindi, chiedi all'utente quanti lanci vuole effettuare e se punta su testa o croce.
// Se la maggioranza dei lanci sono uguali a ciò che ha puntato l'utente, mostragli che ha vinto. Altrimenti, mostragli che ha perso.

/*
let userThrows = Number(prompt("How many throws do you want?"));
let userChoise = prompt("head or tail?");

let resultsList = [];
let resultAverage = 0;

function coinFlip(throws) {
  for (let i = 0; i < userThrows; i++) {
    let number = Math.random();
    let numberRound = Math.round(number);
    if (numberRound === 1) {
      alert("Tail");
    } else {
      alert("Head");
    }

    let saveResults = resultsList.push(numberRound);
    console.log(resultsList);
  }

  for (let n = 0; n < resultsList.length; n++) {
    let numberToAdd = resultsList[n];
    resultAverage = resultAverage + numberToAdd / resultsList.length;
  }
  console.log(resultAverage);
  if (userChoise === "tail" && resultAverage > 0.5) {
    alert("You Win!");
  } else if (userChoise === "tail" && resultAverage < 0.5) {
    alert("You Lose!");
  } else if (userChoise === "head" && resultAverage < 0.5) {
    alert("You Win!");
  } else if (userChoise === "head" && resultAverage > 0.5) {
    alert("You Lose!");
  } else if (resultAverage === 0.5) {
    alert("Tie, try again");
  }
}

coinFlip(userThrows);
*/

// 6. Crea una funzione che genera il lancio di un dado a 6 facce (ritorna un numero casuale tra 1 e 6). Quindi simula un lancio per il computer e un lancio per l'utente. Mostra all'utente quanto è stato il risultato del computer e quanto è stato il risultato dell'utente e comunicagli se ha vinto o meno.

// 9. Crea una lista di animali (stringhe) che fanno parte dello Zoo. Crea una funzione che a partire da una stringa, ci fa sapere se nello zoo c'è quell'animale. Chiedi all'utente quale animale vuole vedere. Comunicagli, usando la funzione, se l'animale c'è o meno.
// BONUS: la funzione deve funzionare anche se l'utente scrive il nome tutto maiuscolo/tutto maiuscolo/un mix. Ci interessa solo che il nome dell'animale sia lo stesso.

/*
let animalsList = ["cow", "zebra", "tiger", "lion", "parrot", "gazelle"];
let userAnimal = prompt("What animal are you looking for?");

function animalCheck(animal) {
  for (let i = 0; i < animalsList.length; i++) {
    if (animalsList.includes(animal)) {
      alert("The zoo has a " + animal);
      break;
    } else {
      alert("The zoo does not have a " + animal);
      break;
    }
  }
}

animalCheck(userAnimal);
*/

// 10. Crea una funzione che ordina una lista di numeri dal più piccolo al più grande. Chiedi all'utente quanti numeri vuole inserire. Quindi, chiedi all'utente i numeri. Mostra all'utente la lista di numeri ordinata dal più piccolo al più grande.

let numberList = [];
let lenghtNumber = prompt("How many numbers do you want in the list?");

function orderedList(numbers) {
  for (let i = 0; i < lenghtNumber; i++) {
    let userNumber = prompt("Write a number");
    numberList.push(userNumber);
  }
  let order = numberList.sort((a, b) => a - b);
  alert(order);
}

orderedList(lenghtNumber);
