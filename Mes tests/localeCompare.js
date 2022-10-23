let x = 'A';
let y = 'a';

let resultat = x.localeCompare(y, undefined, { sensitivity: 'accent' })

console.log(resultat);




x = 'A';
y = 'à';

resultat = x.localeCompare(y, undefined, { sensitivity: 'base' })

console.log(resultat);

// 0 = true, et -1 = false