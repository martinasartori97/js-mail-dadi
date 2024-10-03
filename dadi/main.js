// prova collegamento a javascript
console.log("hello world");

// gioco dei dadi
// genero un numero random da 1 a 6
const giocatore = Math.floor(Math.random() * 6)+1;
console.log(giocatore);

const computer = Math.floor(Math.random() * 6)+1;
console.log(computer);


// stabilisco il vincitore,in base a chi fa il punteggio più alto
if (giocatore > computer){
    console.log(il giocatore vince);
} else if (giocatore < computer){
    console.log(il computer vince);
} else {
    console.log(è un pareggio);
    
}

