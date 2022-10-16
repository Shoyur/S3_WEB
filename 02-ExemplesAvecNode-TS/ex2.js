//Question : pourquoi les 2 boucles donnent des résultats différents
for (var x=0; x <= 4; x++) {
    let test = () => { console.log(x); }
    setTimeout(test, 100);
}

for (let x=0; x <= 4; x++) {
    let test = () => { console.log(x); }
    setTimeout(test, 100);
}

// Donne =>
// 
// 5
// 5
// 5
// 5
// 5
// 
// 0
// 1
// 2
// 3
// 4
// 
// Car la 1ere boucle appelle test 5 fois, 
// environ 100ms après que les boucles soient terminées,
// et à ce moment là, var x vaut déjà 5.
// Mais ensuite pour la dernière, test est applé avec un LET x,
//  qui donne la vraie valeur....
// *** Pas exactement certain pourquoi...