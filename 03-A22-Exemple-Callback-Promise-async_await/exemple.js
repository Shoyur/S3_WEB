function printString(string, puissance, callback){
  setTimeout(
    () => {
      let grosCalcul = Math.pow(2, puissance);
      console.log(`Gros calcul pour ${string} = ${grosCalcul}`);
      callback(grosCalcul)
    }, 
    Math.floor(Math.random() * 100) + 1
  )
}

let nouvelleValeur;
let funcA =  (valeur) => {
  console.log("Valeur = "+valeur);
  nouvelleValeur = valeur;
}


function printAll(){
  printString("A", 2, funcA);
  printString("B",nouvelleValeur,funcA);
  printString("C", nouvelleValeur,funcA);
  console.log("Fin des appels");
}
printAll()
console.log("APRÈS");