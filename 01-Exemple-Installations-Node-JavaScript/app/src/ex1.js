//Module pour pouvoir lire à la console via le clavier.
const rls = require('readline-sync');

const nom = rls.question("Entrez votre nom : ");
console.log("Votre nom est : "+nom);

let age = parseInt(rls.question("Entrez votre age : "));
age=age+1;
console.log("Votre age apres votre anniversaire est :"+age);