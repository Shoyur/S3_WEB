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

async function printAll(){
  let nouvelleValeur = await printString("A", 2);
  console.log("nouvelleValeur = "+nouvelleValeur);
  nouvelleValeur = await printString("B", nouvelleValeur);
  console.log("nouvelleValeur = "+nouvelleValeur);
  nouvelleValeur = await printString("C", nouvelleValeur);
  console.log("nouvelleValeur = "+nouvelleValeur);
  console.log("Fin des appels");   
}
console.log("Après printString. Vraiment !!!");

printAll()
