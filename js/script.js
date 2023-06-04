"use strict";

// PROBLEMA: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// FUNZIONE 0 - GENERAZIONE DEL NUMERO RANDOMICO
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

// FUNZIONE 1 - VERIFICA SE IL NUMERO E' GIA' PRESENTE NELL'ARRAY, SOLO SE NON E' PRESENTE LO AGGIUNGE
function controlRandomNumber(array, number){
    let check = false
    while(check === false){
        if(!array.includes(number)){ // se il numero da inserire è diverso dall'array 
            check = true; // controllo vero
        }
    }    
    return true; // restituisci vero
}
    
// FUNZIONE 3 - PERMETTE L'INSERIMENTO DEI NUMERI UTENTE
function getUserNumber(){
    let user_number = [];

    while(user_number.length < 5){
        let number = parseInt(prompt('Inserisci i numeri memorizzati, uno alla volta'));

        if(!user_number.includes(number)){
            user_number.push(number);
        }
    }
    return user_number;
}

let random_number = []; // array contenitore numeri randomici

// CICLO FOR CHE RIPETE 5 VOLTE IL CODICE
for (let i = 0; i < 5; i++){
    let number = generateRandomNumber (1, 100);

    if(controlRandomNumber(random_number,number)){
        random_number.push(number);
    }
}

// INSERIMENTO NEL DOM HTML
document.getElementById("random").innerHTML = random_number;

// CREAZIONE DEL TIMER PER LA CANCELLAZIONE DEI NUMERI
setTimeout(function(){

    document.getElementById("random").style.display = "none"; // style cancellazione dei numeri
    document.getElementById("results").innerHTML = 'i 30 secondi sono scaduti, inserisci i numeri che ricordi';

},5000);

// CREAZIONE DEL TIMER PER I PROMPT - FUNZIONE 4 - CHE PERMETTE L'INSERIMENTO DEI NUMERI UTENTE
setTimeout(function(){

    // DICHIARAZIONE DELLE VARIABILI CON PROMPT
    let user_number = getUserNumber();
    console.log(user_number)
    let correct_number = []; // numeri corretti
    let score = 0; // punteggio utente dei numeri corretti
    
    for(let i=0; i<user_number.length; i++){
        if(random_number.includes(user_number[i])){
        correct_number.push(user_number[i]);
        score++;
        }
        
    }

    document.getElementById("results").innerHTML = `Hai indovinato ${score} numeri. I numeri corretti sono ${correct_number}`;


},6000);