"use strict";

// PROBLEMA: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// CREAZIONE DEI 5 NUMERI CASUALI ED INSERIMENTO NEL DOM
document.getElementById("random_number_one").innerHTML = Math.floor(Math.random() * 100) + 1;
document.getElementById("random_number_two").innerHTML = Math.floor(Math.random() * 100) + 1;
document.getElementById("random_number_three").innerHTML = Math.floor(Math.random() * 100) + 1;
document.getElementById("random_number_four").innerHTML = Math.floor(Math.random() * 100) + 1;
document.getElementById("random_number_five").innerHTML = Math.floor(Math.random() * 100) + 1;

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
    let num1 = prompt("Inserisci il primo numero memorizzato");
    let num2 = prompt("Inserisci il secondo numero memorizzato");
    let num3 = prompt("Inserisci il terzo numero memorizzato");
    let num4 = prompt("Inserisci il quarto numero memorizzato");
    let num5 = prompt("Inserisci il quinto numero memorizzato");
    console.log(num1, num2, num3, num4, num5)

    // IF DI CONTROLLO DEI VALORI
    if (num1 === random_number_one){ 
        document.getElementById("results_one").innerHTML = (`OK, sei riuscito a memorizzare il primo numero: ${random_number_one}`);
    } else {
        document.getElementById("results_one").innerHTML = (`N.1 ERRATO, riprova.`);
    }

    if (num2 === random_number_two){ 
        document.getElementById("results_two").innerHTML = (`OK, sei riuscito a memorizzare il secondo numero: ${random_number_two}`);
    } else {
        document.getElementById("results_two").innerHTML = (`N.2 ERRATO, riprova.`);
    }
}


