//Question : pourquoi les 2 boucles donnent des résultats différents
for(var x=0; x<=4; x++){
    let test = () => {
        console.log(x);
    }
    setTimeout(test, 100);
}

for(let x=0; x<=4; x++){
    let test = () => {
        console.log(x);
    }
    setTimeout(test, 100);
}