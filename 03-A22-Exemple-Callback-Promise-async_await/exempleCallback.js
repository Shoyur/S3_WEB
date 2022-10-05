
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
  printString("A", 2, (valeur) => {
    console.log("valeur = "+valeur);
    nouvelleValeur = valeur;
    printString("B", nouvelleValeur, (valeur) => {
      console.log("valeur = "+valeur);
      nouvelleValeur = valeur;
      printString("C", nouvelleValeur, (valeur) => {
        console.log("valeur = "+valeur);
        nouvelleValeur = valeur;
        console.log("Fin des appels");
      });
    });
  });
  console.log("Après printString. Vraiment !!!");





    // printString("B", () => {
    //   printString("C", () => {console.log("APRÈS");})
    // })
  
}
printAll()
