// - chidere all'utente il suo nome:
//   - dichiarare una variabile
let userName;
//   - assegnare alla variabile il valore restituito da un prompt
userName = prompt ("Qual è il tuo nome?");
console.log(userName);

// - chidere all'utente il suo cognome:
//   - dichiarare una variabile
let userLastname;
//   - assegnare alla variabile il valore restituito da un prompt
userLastname = prompt ("Qual è il tuo cognome?");
console.log(userLastname);

// - chidere all'utente il suo colore preferito:
//   - dichiarare una variabile
let userFavouriteColour;
//   - assegnare alla variabile il valore restituito da un prompt
userFavouriteColour = prompt ("Qual è il tuo colore preferito?");
console.log(userFavouriteColour);

// - coincatenare il nome, il cognome e il colore preferito dell'utente con un valore numerico:
//   - dichiarare una variabile che contiene il valore numerico
let passwordNumber = "21";
//   - dichiarare una variabile "passwordCombination" con le quattro stringhe concatenate
let passwordCombination = " " + userName + userLastname + userFavouriteColour + passwordNumber;
console.log("passwordCombination")
// - stampare il messaggio dentro un p:
//   - inserire nell'html un tag p con id="passwordCombination"

//   - recuperare con js gli elementi del dom con id = "passwordCombination"
const passwordCombinationDomElement = document.getElementById ("passwordCombination");
console.dir("passwordCombinationDomElement");
//   - modificare l'innerHTML del p con il valore della variabile "passwordCombination"
passwordCombinationDomElement.innerHTML = passwordCombination