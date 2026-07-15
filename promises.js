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
// ---------------------------------------------------------------------------




// let promise= new Promise((resolve, reject) => {
//     let num = Math.random();

//     if (num < 0.5) {
//         reject("Try Again")
//     }

//     else {
//         resolve("Succesfull")
//     }
// })

// promise.then((a) => {
//     console.log(a)
    
// })

// promise.catch((err) => {
//     console.log(err)
// })
// ---------------------------------------------------------------------------


// Age Checker

// let promises=new Promise((resolve, reject) => {
//     let age = Number(prompt("Enter your age"));
//     if (age >= 18) {
//         resolve("You Can Enter")
//     }

//     else {
//         reject("You Cannot Enter")
//     }
// })


// promises.then((a) => {
//     console.log(a)
// })

// promises.catch((a) => {
//     console.log(a)
// })

// ---------------------------------------------------------------------------

// Task:

// Ek loginUser naam ka Promise banao.
// Requirements:
// User se username lo.
// Agar username "admin" hai:
// resolve() karo aur message bhejo:
// Login Successful
// Agar username "admin" nahi hai:
// reject() karo aur message bhejo:
// Invalid Username

// let loginUser = new Promise((resolve, reject) => {
//     let input = prompt("Enter User Name")
    
//     if (input === "admin") {
//         resolve("Login succesfully")
//     }

//     else {
//         reject("Invalid User Name")
//     }
// })


// loginUser.then((a) => {
//     console.log(a)
// })

// loginUser.catch((a) => {
//     console.log(a)
// })

// ---------------------------------------------------------------------------

// Promise.all() = Sab complete hone ke baad result dega.
// Promise.race() = Jo sabse pehle complete hoga wahi return hoga.
// Promise.any() = Jo pehla successful promise hoga uska result dega.
// Promise.allSettled()= Sab promises complete hone ka wait karega.Chahe fail hon ya pass.

// ---------------------------------------------------------------------------

//  kam same but diifrent methode on Promises

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//      console.log("processsing")
//       resolve("Done")
//     }, 2000);
    
// })

// promise.then((name) => {
//   console.log(name);
// });



let promises = new Promise((resolve, reject) => {

   async function getdata(){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  let data = await response.json()
  console.log(data)
 resolve("Done")

  }

  
getdata()
})



promises.then((a) => {
  console.log(a)
})

promises.catch((err) => {
  console.log(err)
})
  
