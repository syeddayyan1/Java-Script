// print yellow

//  let color= [ "yellow" , "green", "red"]
//  console.log(color[0])

// -----------------------------------------------------------------------------


//  let nums = [3, 7, 12, 9, 15];
// 👉 Question:
// Is array mein se second largest number print karo

// let num=[3,7,12,9,15]
// let sorted=num.sort((a ,b) => b-a);
// console.log(num[1])

// -----------------------------------------------------------------------------


// Function banao:

// name: greet
// parameter: name
// output: "Hello name"
// 👉 call karo "Ali" ke sath

// function greet(name){
//     console.log("Hey" +name)
// }

// greet("ALi")

// -----------------------------------------------------------------------------


// function multiply  2 numbers

// function num(a,b){
//     return a*b;
// }

// result=num(3,5)
// console.log(result)

// -----------------------------------------------------------------------------



// Largest value print krana with condition

//  let num=[9,3,4,30,80]
//  let max=num[0]

//  for(let i=1 ; i< num.length  ; i++){
//     if (num[i] >max) {
//     max= num[i]

//     }
//  }

// console.log(max)

// -----------------------------------------------------------------------------


// smallest value print krana with condition


// let num=[9,8,12,6,5]
// let max=num[0]

// for(let i=1; i<num.length; i++){
//     if(num[i]<max ){
//         max=num[i]
//     }
// }

// console.log(max)

// -----------------------------------------------------------------------------


// largest value print karna with sort

// let num=[9,8,3,19,12]
// let sorted= num.sort((a,b) => b-a )
// console.log(num[1])


// let nums = [8, 3, 12, 5, 9];
// 👉 Question:
// Is array mein se third element ka double print karo

// let num=[8,3,12,5,9]
// console.log(num[2]*2)


// ---------------------------------------------------------------------------



// Question 1 (Array + Loop)

// Ek array banao:
// Loop laga kar sari fruits ki values print karwao.

// let fruits=[ "Mango", "Banana" , "Oranage" , "Apple"]

// for( i= 0;  i < fruits.length ; i++){

//     console.log(fruits[i])

// }

// ---------------------------------------------------------------------------


// Question 2 (Array + Condition)
// let numbers = [10, 15, 20, 25, 30];
// Loop lagao aur sirf even numbers print karo.


// let number=[1,2,3,4,5,6,7,8,9,10]

// for(i=0; i<number.length ; i++){

//     if(number[i] % 2 === 0 ){
//         console.log(number[i])
//     }

// }

// -----------------------------------------------------------------------------



// Ab ek aisa question jo Array + Loop + Condition tino use karwaye.

// Question 4
// let numbers = [5, 12, 8, 20, 3, 15];

// Loop lagao aur sirf woh numbers print karo jo 10 se bade hain.


// let number =[ 5,12,8,3,15,20,21,76,56]

// for (i=1; i<number.length; i++){

//     if( number[i] > 10){
//         console.log(number[i])
//     }
// }


// -----------------------------------------------------------------------------



// Ab Function + Array combine karte hain.

// Question 5
// Ek function banao:
// showNumbers()
// Aur function ke andar ye array rakho:
// let numbers = [10, 20, 30, 40, 50];
// Jab function call ho to loop laga kar sari values print karwao.

// function shownumber(){
//     let number=[10,20,30,40,50]

//     for(i=0; i < number.length ; i++){
//      console.log (number[i])
// }

// }
// shownumber()


// -----------------------------------------------------------------------------



// let evencount=0;
// let oddcount=-0;

// function checknumbers(){
//     let numbers=[1,2,4,7,11,3,5,]

//     for ( let i=0; i<numbers.length ; i++){

//         if(numbers[i] %2 === 0){
            
//             evencount++
//         }

//         else{
//             oddcount++
//         }
//     }

//     console.log( "Even =" , evencount)
//     console.log( "odd =", oddcount)
// }

// checknumbers()


// -----------------------------------------------------------------------------


//  Arrow Function


// function ali(name){
//     console.log(name)
// }

// ali("Dayyan")


// const zain = (name) =>{
//     console.log(name)
// }

// zain("Dayyan")



// let sum=(a,b)=> a+b
// result = sum(2,4)
// console.log(result)
 
// "Code ko short aur readable banane ke liye aur modern JavaScript
// me zyada use hone ki wajah se arrow function use hota he ."


// -----------------------------------------------------------------------------


let num1=prompt("ENter first Number")
let operator=prompt("ENter operator")
let num2=prompt("Enter 2nd Number")

function calculator( num1 , operator, num2){

    switch(operator){
        case "+":
        alert(Number(num1) + Number(num2))
        break;


        case "-":
        alert(Number(num1) - Number(num2))
        break;


    }

}

calculator(num1, operator, num2)

// -----------------------------------------------------------------------------