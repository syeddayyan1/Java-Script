// let promises = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("Number is not supporting You")
//     }

//     else (
//         setTimeout(() => {
//             console.log("Processing.....")
//             resolve("Done")
//         })
        
//     )
// })


// promises.then((a) => {
//     console.log(a)
// })


// promises.catch((err) => {
//     console.log(err)
// })





let promise= new Promise((resolve, reject) => {
    let num = Math.random();

    if (num < 0.5) {
        reject("Try Again")
    }

    else {
        resolve("Succesfull")
    }
})

promise.then((a) => {
    console.log(a)
    
})

promise.catch((err) => {
    console.log(err)
})