// prova collegamento a javascript
console.log("hello world");


//chiedo all'utente di inserire la sua email
let email = prompt("inserisci la tua email");
console.log("email");

// lista di email autorizzate
 let authorizedEmail = ["esempio1@email.com","esempio2@gmail.com","esempio3@gmail.com"];
 console.log(authorizedEmail);

// controllo se l'email è nella lista di quelle autorizzate
if (authorizedEmail.includes(email)){
    console.log("accesso consentito");
    else{
        console.log("accesso negato");
        
    }
    
}
 



