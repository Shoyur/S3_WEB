function printString(string){
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
         console.log(string)
         resolve(231)
        }, 
       Math.floor(Math.random() * 100) + 1
      )
    })
}

function printAll(){
    printString("A")
    .then((liste) => {console.log("J'ai reçu la liste : "+liste); return liste;})
    .then((liste) => {liste=123; return liste;})
    .then((liste) => {console.log("Voici la liste triée : "+liste);})
    .catch(() => {})

    console.log("1-Je ne dépend pas de A");
    console.log("2-Cool moi aussi je ne dépend pas de A");
    console.log("3-Super moi aussi.");
}

printAll()
console.log("APRÈS");