"use strict";

// PROBLEMA: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// DICHIARAZIONE DELLE VARIABILI NUMERI CASUALI
let r_number_one = parseInt(Math.floor(Math.random() * 100) + 1);
let r_number_two = parseInt(Math.floor(Math.random() * 100) + 1);
let r_number_three = parseInt(Math.floor(Math.random() * 100) + 1);
let r_number_four = parseInt(Math.floor(Math.random() * 100) + 1);
let r_number_five = parseInt(Math.floor(Math.random() * 100) + 1);

// INSERIMENTO NEL DOM DEI NUMERI CASUALI
document.getElementById("random_number_one").innerHTML = r_number_one;
document.getElementById("random_number_two").innerHTML = r_number_two;
document.getElementById("random_number_three").innerHTML = r_number_three;
document.getElementById("random_number_four").innerHTML = r_number_four;
document.getElementById("random_number_five").innerHTML = r_number_five;

// DICHIARAZIONE DELLE FUNZIONI

// CREAZIONE DEL TIMER PER LA CANCELLAZIONE DEI NUMERI
setTimeout(myFunctionNumber, 30000);

// FUNZIONE 1 - CANCELLAZIONE DEI NUMERI CON DISPLAY NONE
function myFunctionNumber(){
    // CANCELLAZIONE DEI NUMERI CON DISPLAY NONE
    document.getElementById("random_number_one").style.display = "none";
    document.getElementById("random_number_two").style.display = "none";
    document.getElementById("random_number_three").style.display = "none";
    document.getElementById("random_number_four").style.display = "none";
    document.getElementById("random_number_five").style.display = "none";
}

// CREAZIONE DEL TIMER PER I PROMPT
setTimeout(myFunctionTimer, 31000);

// FUNZIONE 2 - CONTENENTE LE VARIABILI CON PROMPT
function myFunctionTimer(){

    // DICHIARAZIONE DELLE VARIABILI CON PROMPT
    alert("OK i 30 secondi a tua disposizione sono scaduti, per favore inserisci i 5 numeri che hai memorizzato");
    let num1 = parseInt(prompt("Inserisci il primo numero memorizzato"));
    let num2 = parseInt(prompt("Inserisci il secondo numero memorizzato"));
    let num3 = parseInt(prompt("Inserisci il terzo numero memorizzato"));
    let num4 = parseInt(prompt("Inserisci il quarto numero memorizzato"));
    let num5 = parseInt(prompt("Inserisci il quinto numero memorizzato"));
    console.log(typeof num1, num2, num3, num4, num5)

    // IF DI CONTROLLO DEI VALORI
    if (num1 === r_number_one){ 
        document.getElementById("results_one").innerHTML = (`OK, sei riuscito a memorizzare il primo numero: ${r_number_one}`);
    } else {
        document.getElementById("results_one").innerHTML = (`N.1 ERRATO, riprova.`);
    }
    
    if (num2 === r_number_two){
        document.getElementById("results_two").innerHTML = (`OK, sei riuscito a memorizzare il secondo numero: ${r_number_two}`);
    } else {
        document.getElementById("results_two").innerHTML = (`N.2 ERRATO, riprova.`);
    }

    if (num3 === r_number_three){
        document.getElementById("results_three").innerHTML = (`OK, sei riuscito a memorizzare il terzo numero: ${r_number_three}`);
    } else {
        document.getElementById("results_three").innerHTML = (`N.3 ERRATO, riprova.`);
    }

    if (num4 === r_number_four){
        document.getElementById("results_four").innerHTML = (`OK, sei riuscito a memorizzare il quarto numero: ${r_number_four}`);
    } else {
        document.getElementById("results_four").innerHTML = (`N.4 ERRATO, riprova.`);
    }

    if (num5 === r_number_five){
        document.getElementById("results_five").innerHTML = (`OK, sei riuscito a memorizzare il quinto numero: ${r_number_five}`);
    } else {
        document.getElementById("results_five").innerHTML = (`N.5 ERRATO, riprova.`);
    }
}


