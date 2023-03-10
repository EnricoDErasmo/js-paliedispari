/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// Imposto variabili per poter utilizzare elementi html
let userWordEl = document.getElementById("userWord");
let btnEl = document.getElementById("btn");
let outputEl = document.getElementById("output");


// Creo un evento al click del button
btnEl.addEventListener("click", function() {

    if (isPalindrome(userWordEl.value) == true) {

        outputEl.innerHTML = "La parola è palindroma";

    } else {

        outputEl.innerHTML = "La parola non è palindroma";

    };

    
});



// Function -------------------------------------------------

function isPalindrome (word) {

    // faccio in modo che la parola inserita dall'utente diventi un array di lettere...
    let letters = word.split("");
    // venga capovolto...
    letters = letters.reverse();
    // e torni a essere una stringa.
    let = reverseWord = letters.join("");
    
    // SE la parola inserita dall'utente è uguale alla parola che abbiamo capovolto
    if(word == reverseWord){
        //  La parola è palindroma
        return true;
    // ALTRIMENTI
    } else {
        // la parola non è palindroma
        return false;
    };
    
}


// ---------------------------------------------------------------------------------------




/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// Imposto variabili per poter utilizzare elementi html
let evenBtn = document.getElementById("even-btn");
let oddBtn = document.getElementById("odd-btn");
let playBtn = document.getElementById("play-btn");
let outputElSec = document.getElementById("output-secondary");

let userNumberEl = document.getElementById("user-number");

// Faccio in modo che al click di pari venga creata una classe active
evenBtn.addEventListener("click", function(){

    evenBtn.className = "active";
// Se la classe active è presente faccio in modo che:
    if (evenBtn.className = "active"){
    //   (aggiungo un evento al click del pulsante gioca)
        playBtn.addEventListener("click", function(){
        // (Faccio in modo che l'utente possa scegliere solo un numero da uno a 5 altrimenti comparirà un alert)
            if (userNumberEl.value >= 1 && userNumberEl.value <= 5 ) {
            // (genero un numero casuale da 1 a 5 per il computer)
                let randomNumber = Math.floor(Math.random() * 5 + 1);
            // (Imposto una variabile che sia il risultato della somma tra il numero dell'utente e il numero casuale del computer)
                let finalNumber = userNumberEl.value + randomNumber;
            // SE la somma dei due numeri + pari l'utente ha vinto
                if (finalNumber % 2 == 0) {

                    outputElSec.innerHTML = `Il numero che hai scelto è ${userNumberEl.value}, il numero del tuo avversario è ${randomNumber}, la somma è pari, hai vinto!`;

                    console.log(`Il numero che hai scelto è ${userNumberEl.value}, il numero del tuo avversario è ${randomNumber}, la somma è pari, hai vinto!`);
            // ALTRIMENTI ha perso
                } else {

                    outputElSec.innerHTML = `Il numero che hai scelto è ${userNumberEl.value}, il numero del tuo avversario è ${randomNumber}, la somma è dispari, hai perso!`;

                    console.log(`Il numero che hai scelto è ${userNumberEl.value}, il numero del tuo avversario è ${randomNumber}, la somma è dispari, hai perso!`);
                };
                
                console.log(randomNumber);
            // L'alert che compare se l'utente sceglie un numero che non è compreso tra 1 e 5
            } else {
        
                alert("Ricarica e inserisci un numero da 1 a 5");
            
            };
         
        });

    };


});



// Prova funzione---------------------------

// function isEven (num) {

//     if (num % 2 == 0) {   

//     return "pari";

//     } else {

//     return "dispari";

//     }
// }
// --------------------------------------



// Ripeto lo stesso procedimento per il button dispari ma poi inverto i risultati
oddBtn.addEventListener("click", function(){

    oddBtn.className = "active";

    if (oddBtn.className = "active"){

        playBtn.addEventListener("click", function(){
        
            if (userNumberEl.value >= 1 && userNumberEl.value <= 5 ) {
            
                let randomNumber = Math.floor(Math.random() * 5 + 1);
        
                let finalNumber = userNumberEl.value + randomNumber;
        
                if (finalNumber % 2 == 0) {

                    outputElSec.innerHTML = `Il numero che hai scelto è ${userNumberEl.value}, il numero del tuo avversario è ${randomNumber}, la somma è pari, hai perso!`;

                    console.log(`Il numero che hai scelto è ${userNumberEl.value}, il numero del tuo avversario è ${randomNumber}, la somma è pari, hai perso!`);
        
                } else {

                    outputElSec.innerHTML = `Il numero che hai scelto è ${userNumberEl.value}, il numero del tuo avversario è ${randomNumber}, la somma è dispari, hai vinto!`;

                    console.log(`Il numero che hai scelto è ${userNumberEl.value}, il numero del tuo avversario è ${randomNumber}, la somma è dispari, hai vinto!`);
                };
                
                console.log(randomNumber);
                
            } else {
        
                alert("Ricarica e inserisci un numero da 1 a 5");
            
            };
         
        });

    };


});




    
    








