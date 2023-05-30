"use strict";

// PROBLEMA: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// CREAZIONE DEI 5 NUMERI CASUALI
document.getElementById("number_random_one").innerHTML = Math.floor(Math.random() * 100) + 1;
document.getElementById("number_random_two").innerHTML = Math.floor(Math.random() * 100) + 1;
document.getElementById("number_random_three").innerHTML = Math.floor(Math.random() * 100) + 1;
document.getElementById("number_random_four").innerHTML = Math.floor(Math.random() * 100) + 1;
document.getElementById("number_random_five").innerHTML = Math.floor(Math.random() * 100) + 1;

// DICHIARAZIONE DELLE VARIABILI
//alert("Ciao Benvenuto, per favore inserisci i 5 numeri che hai memorizzato");
//let num1 = prompt("Inserisci il primo numero memorizzato");
//let num2 = prompt("Inserisci il secondo numero memorizzato");
//let num3 = prompt("Inserisci il terzo numero memorizzato");
//let num4 = prompt("Inserisci il quarto numero memorizzato");
//let num5 = prompt("Inserisci il quinto numero memorizzato");
//console.log(num1, num2, num3, num4, num5)

// VARIABILI DI CONTROLLO

// DICHIARAZIONE DELLE FUNZIONI

// FUNZIONI

// FUNZIONE 1