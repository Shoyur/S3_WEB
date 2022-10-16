function printString(string){
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
         console.log(string)
         resolve()
        }, 
       Math.floor(Math.random() * 1000) + 1
      )
    })
}

async function printAll(){
    await printString("A")
    await printString("B")
    await printString("C")
}
printAll()
console.log("APRÈS");
