//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
alert(
    "GIOCO DEI DADI! verranno tirati 2 dadi, e assegnati in maniera casuale 2 numeri da 1 a 6, uno al pc e l'altro a te. il numero piu alto vince! "
)
 const pcNumber= Math.floor(Math.random() * 6 +1)
 console.log(pcNumber);
 

 const userNumber=  Math.floor(Math.random() * 6 +1)
 console.log(userNumber);
 

 let outputMessage

 if(userNumber>pcNumber) {
  outputMessage= `HAI VINTO! il tuo numero è ${userNumber} mentre quello del pc è ${pcNumber} :)`
 }

  else if (pcNumber>userNumber) {

 outputMessage= `HAI PERSO! il tuo numero è ${userNumber} mentre quello del pc è ${pcNumber} :(`
 }
 else {
    outputMessage=`PAREGGIO! il tuo numero è ${userNumber} e quello del pc è ${pcNumber}`
 }
 alert(
    outputMessage
 )