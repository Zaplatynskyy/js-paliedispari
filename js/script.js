// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma





// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const scelta = prompt('Scegli se giocare "pari" o "dispari"');
const numUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
const numComputer = randomNum(1, 5);

const sum = numUtente + numComputer;

console.log('Hai scelto', scelta);
console.log('Hai scelto il numero', numUtente);
console.log('Il computer ha scelto il numero', numComputer);
console.log('La somma dei due numeri (' + sum + ') è', pariDispari(sum));

if(pariDispari(sum) == scelta){
    console.log('Hai vinto');
}else {
    console.log('Hai perso');
}

// *******funzioni
// funzione che genera un numero random tra num1 e num2
function randomNum(num1, num2) {
    const random = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    return random;
}
// funzione che definisce un numero pari o un numero dispari
function pariDispari(num) {
    if(num % 2 == 0) {
        return 'pari';
    }
    return 'dispari';
}