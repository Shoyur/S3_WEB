// Pour tout le reste sur Promise :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise



// ================================================================
// // async est pour permettre un await à l'intérieur
// async function maFonction1() {
//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Hello');
//             resolve();
//         }, 1000);
//     });
//     console.log('World!');
// }
// maFonction1();
// ================================================================


// Plein de fonctions en attente en même temps...
// ================================================================
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'résultat #1 (3 sec.)');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'résultat #2 (1 sec.)');
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'résultat #3 (2 sec.)');
});

// Promise.all([promise1, promise2, promise3]).then((retours) => {
//     // .all => attend le retour de tous les Promise's
//     // ce retour est fait quand toutes les promesses ont été tenues.
//     console.log(retours);
// });

// Promise.allSettled([promise1, promise2, promise3]).then((retours) => {
//     // .all => attend le retour de tous les Promise's
//     // ce retour est fait quand toutes les promesses ont été tenues OU NON.
//     // et retourne 1 objet par promesse avec la propriété
//     // 'fulfilled' ou 'rejected'.
//     console.log(retours);
// });

// Promise.any([promise1, promise2, promise3]).then((retour) => {
//     // .any => retourne la 1ère promesse retournée
//     console.log(retour);
// });
// ================================================================



// Sinon, si vraiment une en arrièer de l'autre, toutes avec attentes :
// ================================================================
async function maFonction2() {
    const resultat1 = await promise1;
    const resultat2 = await promise2;
}
maFonction2();
