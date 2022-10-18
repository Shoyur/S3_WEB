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
    // then est exécuté quand le Promise est terminé,
    // et dans ce cas ci, liste est ce que resolve a envoyé,
    // donc d'abord (liste) vaut 231
    .then((liste) => {console.log("J'ai reçu la liste : "+liste); return liste;})
    .then((liste) => {liste=123; return liste;})
    .then((liste) => {console.log("Voici la liste triée : "+liste);})
    .catch(() => {})


    // imprime tout ça tout de suite avant les .then
    console.log("1-Je ne dépend pas de A");
    console.log("2-Cool moi aussi je ne dépend pas de A");
    console.log("3-Super moi aussi.");
}

printAll()
console.log("APRÈS");

// 1-Je ne dépend pas de A
// 2-Cool moi aussi je ne dépend pas de A
// 3-Super moi aussi.
// APRÈS
// A
// J'ai reçu la liste : 231
// Voici la liste triée : 123