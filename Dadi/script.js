// GENERA NUMERO CASUALE DA 1 A 6 PER IL GIOCATORE
const giocatore = Math.floor(Math.random() * 6) + 1;

// GENERA NUMERO CASUALE DA 1 A 6 PER IL COMPUTER
const computer = Math.floor(Math.random() * 6) + 1;

// STAMPA I PUNTEGGI
console.log("Il giocatore ha ottenuto: " + giocatore);
console.log("Il computer ha ottenuto: " + computer);

// DETERMINA IL VINCITORE IN BASE AL PUNTEGGIO PIU' ALTO
if (giocatore > computer) {
  console.log("PLAYER WINS!");
} else if (giocatore < computer) {
  console.log("CPU WINS!");
} else {
  console.log("DRAW!");
}
