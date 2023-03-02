/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Imposto variabili per poter utilizzare elementi html
let userWordEl = document.getElementById("userWord");
let btnEl = document.getElementById("btn");
let outputEl = document.getElementById("output");

// faccio in modo che la parola inserita dall'utente diventi un array di lettere...
let letters = userWordEl.value.split("");
// venga capovolto...
letters = letters.reverse();
// e torni a essere una stringa.
reverseWord = letters.join("");

// Creo un evento al click del button
btnEl.addEventListener("click", function() {

    // SE la parola inserita dall'utente è uguale alla parola che abbiamo capovolto
    if(userWordEl.value == reverseWord){
        //  La parola è palindroma
        outputEl.innerHTML = "La parola da te inserita è palindroma";
    // ALTRIMENTI
    } else {
        // la parola non è palindroma
        outputEl.innerHTML = "La parola da te inserita non è palindroma";
    };

});



