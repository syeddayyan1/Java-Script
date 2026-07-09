async function getData() {
    
    return new Promise((resolve, reject) => {
        
        setTimeout((e) => {
            resolve(455)
        }, 3000)

    })

}

     async function main() {
        
        console.log("Hello")
        console.log("I am ")
        console.log(" Async Await")

        let data = await getData()
        console.log(data)

         console.log("Load")
        console.log("code")
        console.log("runed")

    }


main();
 




// ye then wala option he jo ke use nh hota he ab zyda tar

// console.log("Loading Moduels")
// console.log("DO Something Else")
// console.log("Load Data")

// let data = getData()

// data.then((e) => {
//     console.log(data)
//     console.log("3sec")
//     console.log("Baad aajeyga")
// })







 