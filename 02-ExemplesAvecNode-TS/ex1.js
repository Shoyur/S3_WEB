let tab1 = new Array(2,3,4,8);

let tab2 = [1,7,9,8,30,40]; //JSON -JavaScript Objet Notation

// let taille = tab2.length;
// for(let i=0; i<taille; i++){
//     //console.log("tab2["+i+"] = "+tab2[i]);
//     console.log(tab2[i]);
// }

// let trouver = (elem) => {
//     let i=0;
//     for(let unNombre of tab2){
//         if(unNombre === elem){
//             return i;
//         } else {
//             ++i;
//         }   
//     }
//     return -1;  
// }

// console.log(trouver(8));
// function afficher(unNombre, puissance) {
//      console.log(unNombre, puissance);
// }

// tab2.forEach(function (unNombre){
//      console.log(unNombre);
// })

// tab2.forEach(function (unNombre){
//      afficher(unNombre, unNombre**2);
// })

// function afficher(unNombre) {
//      console.log(unNombre);
// }

// tab2.forEach(function (unNombre){
//      console.log(unNombre);
// })

// let afficher = function (unNombre) {
//     console.log(unNombre);
// }

// let afficher = (unNombre) => {
//     console.log(unNombre);
// }



// tab2.forEach((unNombre) => {
//     console.log(unNombre);
// });

// tab2.forEach(function (unNombre){
//      console.log(unNombre);
// })

//ES6 - Arrow functions : lambda expressions
// let afficher = (unNombre) => {
//     console.log(unNombre);
// }
// tab2.forEach(afficher);

let f1 = () => 2;

let f2 = (a,b) => {
    b=a**b;
    console.log(a, b);
    return b;
}

//console.log(f1());

console.log("Valeur retournee = "+f2(4,2));