//Chiedi all'utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull'esito del controllo.

const user=[
    "hello@email.it",
    "me@email.it",
    "info@email.it",
    "myname@email.it",
    "hr@email.it",
];
const userMail= prompt(
    "inserisci la tua mail"
)
const validateEmail = (userMail) => {
    return String(userMail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  

  if (validateEmail(userMail)) {
    
    if (users.includes(userMail)) {

      outputMessage = "Hai già registrato un account con questa mail";
    }
    
    else {

      outputMessage = "Non hai ancora registrato un account con questa mail";
    }
  }

  else {
    outputMessage = "mail non valida";
  }
  

  alert(outputMessage);