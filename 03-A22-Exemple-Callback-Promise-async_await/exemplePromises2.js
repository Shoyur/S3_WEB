
function printString(string, puissance){
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        let grosCalcul = Math.pow(2, puissance);
        console.log(`Gros calcul pour ${string} = ${grosCalcul}`);
        resolve(grosCalcul)
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  });
}

function printAll(){
  printString("A", 2)
  .then((valeur) => {
      console.log("valeur = "+valeur);
      nouvelleValeur = valeur;
    printString("B",nouvelleValeur)
    .then((valeur) => {
        console.log("valeur = "+valeur);
        nouvelleValeur = valeur;
        printString("C",nouvelleValeur)
        .then((valeur) => {
            console.log("valeur = "+valeur);
            nouvelleValeur = valeur
            console.log("Fin des appels");
        })
      })
    });
}

  console.log("Après printString. Vraiment !!!");





    // printString("B", () => {
    //   printString("C", () => {console.log("APRÈS");})
    // })
  

printAll()
