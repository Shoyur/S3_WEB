function printString(valeur){
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
         console.log("Valeur reçue dans printString = "+valeur)
         ++valeur;
         resolve(valeur)
        }, 
       Math.floor(Math.random() * 100) + 1
      )
    })
}

async function printAll(){
    let valeur = 123;
    let newValeur;
    console.log("Valeur de départ = "+valeur)
    newValeur= await printString(valeur)
    console.log("Nouvelle valeur du premier appel = "+newValeur)
    newValeur= await printString(newValeur)
    console.log("Nouvelle valeur du deuxième appel = "+newValeur)
    newValeur= await printString(newValeur)
    console.log("Nouvelle valeur du troisième appel = "+newValeur)
}
printAll()
console.log("APRÈS");
