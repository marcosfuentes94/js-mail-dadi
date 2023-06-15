// LISTA DEGLI ACCESSI CONSENTITI
const listaAccessi = ["batman96@gmail.com", "spiderman79@gmail.com","wonderwoman95@gmail.com", "hulk91@gmail.com"];

// CHIEDI EMAIL ALL'UTENTE
let emailUtente = prompt("Inserisci la tua email:");

// VERIFICA SE L'EMAIL E' NELLA LISTA
let accessoConsentito = false;
for (let i = 0; i < listaAccessi.length; i++) {
  if (emailUtente === listaAccessi[i]) {
    accessoConsentito = true;
    break;
  }
}

// MESSAGGIO ESITO CONTROLLO
if (accessoConsentito) {
  console.log("Accesso consentito");
} else {
  console.log("Accesso negato, email non autorizzata.");
}