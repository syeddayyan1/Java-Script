//  async function getdata() {
    
//     return new Promise((resolve, reject) => {
//         setTimeout((e) => {
//             resolve(455)
//         }, 3000)
//     })

// }

//  async function main() {
//     console.log("Hello")
//     console.log("Dayyan")
//     console.log("Noor")

//      let data = await getdata()
//      console.log(data)
//      console.log("Program")
//      console.log("Run")
    
// }

// main();
 

// ---------------------------------------------------------------------


// // ye then wala option he jo ke use nh hota he ab zyda tar

// // console.log("Loading Moduels")
// // console.log("DO Something Else")
// // console.log("Load Data")

// // let data = getData()

// // data.then((e) => {
// //     console.log(data)
// //     console.log("3sec")
// //     console.log("Baad aajeyga")
// // })


// ---------------------------------------------------------------------



//  async function loginUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout((e) => {
//             resolve("Login Successfull")
//         },3000)
//     })
// }


//  async function main() {
//     console.log("Checking User.....")

//     let data =  await loginUser();
//      console.log(data)
//      console.log("welcome to Dashboard")
// }

// main();
 
// ---------------------------------------------------------------------



//  -------------------FETCH API-------------------------------------------------

// async function getUsers() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//      let data = await response.json();

//     console.log(data);
// }

// getUsers();

// -----------------------------------------------------------------------

// async function getData() {

//     let response = await fetch("https://jsonplaceholder.typicode.com/users")
    
//     let result = await response.json();
    
//     return result
    
// }

// async function main() {
//     console.log("Hello")
//     console.log("Dayyan")

//     let result = await getData();
//     console.log(result)

//     console.log("Runed")
//     console.log("Noor")
//     console.log("OKayy")
    
// }


// main();

// --------------------------Error Handling--------------------------
 


// async function getData() {
     
//     try {

//        let response = await fetch("https://jsonplaceholder.typicode.com/users")
//        let result = await response.json();
//        console.log(result)
        
//     }

//     catch{
//         console.log("Something is Wrong")
//     }
     
// }

// getData();
 

// ---------------------------------------------------------------------------

 async function start() {
     let result = await fetch("https://jsonplaceholder.typicode.com/todos/1")
     let data = await result.json();
     return data
}



    async function main() {
        console.log("Hello Buddy")
    
    try {

    let data = await start()
    console.log(data)
    console.log("yaaahhoooo")
        
        }
           catch {
        console.log("Something is wrong")
    }

    }

main();



