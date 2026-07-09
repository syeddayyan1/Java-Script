
// // function sayHello() {
// //     console.log("Hello Dayyan")
// // }

// // function start(abc) {
// //     console.log("abc is running")
// //     abc();
// // }

// // start(sayHello)

// // -------------------------------------------------------------


// // function greet() {
// //     console.log("Assalamo alaikum")
// // }

// // function start(abc) {
// //     console.log("Start Function")
// //     abc();
// // }


// // start(greet)

// // -------------------------------------------------------------


// // function add() {
// //     console.log(10+20)
// // }

// // function cal(abc) {
// //     console.log("calculating........")
// //     abc();
// // }

// // cal(add)

// // -------------------------------------------------------------


// // function calculate(a, b){
// //     console.log(a+b)

// // }

 

// // function process(abc) {
// //     console.log("Processsing.......")
// //     abc(5,5);
// // }

// // process(calculate)

// // -------------------------------------------------------------


// function ali() {
//     console.log("Hello i am Ali")
// }

// function java(){
//     console.log("Hello i am a JavaScript")
// }

// function dayyan(call, call2) {
//     console.log("Hello I am dayyan")
//     call();
//     call2();
// }


// dayyan(ali, java)

// -------------------------------------------------------------


// function ali() {
//     console.log(2 * 4)
//     console.log(2 + 4)
//     console.log(4 - 4)
//     console.log(4 / 4)

// }

// function mc(call) {
//     console.log("Calculation Started...")
//     call();
  
    
    
// }

// mc(ali)

// -------------------------------------------------------------

// function show(result) {
//      console.log("Starting");
//     console.log(result);
// }

// function calculate(callback) {
//     let answer = 10 + 20;

//     callback(answer);
// }

// calculate(show);

// -------------------------------------------------------------

// Task:

// Ek calculate function banao jo do callback functions receive kare.
// Function ke andar do different calculations karo aur dono results ko respective
// callback functions ko pass karo.
// Callback functions ka kaam received result ko console par print karna ho.


// function show(result) {
//     console.log("Calculating.......")
//     console.log("The Calculaiton result is " + result)
// }

// function show2(result) {
//     console.log("The Calculaiton result is " + result)
// }

// function calculate(call1 , call2 ) {
//     let answer1 = 20 + 30;
//     let answer2 = 10 * 20;

//     call1(answer1)
//     call2(answer2)

// }

// calculate(show,show2)


// -------------------------------------------------------------


// Task:

// Ek orderFood naam ka function banao jo ek callback function receive kare.

// Function ke andar:

// Food order process start karo.
// Food ready hone ke baad ek message/result callback ko bhejo.
// Callback function us message ko receive karke console mein print kare.

function start(result) {
    console.log(result)
}

function orderFood(call) {
    console.log("Order Start")
    let a = "Your Food is ready Now"
    call(a)
    
}

orderFood(start)


// -------------------------------------------------------------

