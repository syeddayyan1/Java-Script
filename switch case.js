// let color = "red";

// switch (color) {
//     case "red":
//         console.log("Red Color")
//         break;

//     case "green":
//         console.log("Green COlor")
//         break;

//     case "yellow":
//         console.log("Yellow")
//         break;

// }

// -------------------------------------------------------------------------------

//   Question 1: Write a program user input percentage and take output result is grade//

let num = prompt(" Enter Percentage")
switch (true){
  case num >= 80:
    alert(" A-one Grade");
    break;

  case num >= 70:
    alert("A-Grade");
    break;

  case num >= 60:
    alert("B-Grade");
    break;

  case num >= 50:
    alert("C Grade");
    break;

  case num <= 50:
    alert("Fail");
}

// -------------------------------------------------------------------------------

//   Question 2: Create calculator by switch case

// let num1 = prompt("Enter Number 01")
// let operator= prompt("Enter Operator")
// let num2 = prompt("Enter Number 02")

// switch (operator) {
//     case "+":
//         alert(Number(num1) + Number(num2))
//         break;

//     case "-":
//         alert(Number(num1) - Number(num2))
//         break;

//     case "*":
//         alert(Number(num1) * Number(num2))
//         break;

//     case "/":
//         alert(Number(num1) / Number(num2))
//         break;

// }

// -------------------------------------------------------------------------------

// Question 3: Month Finder

// let month = prompt("Month Finder")
// switch (month) {
//     case "1":
//         alert("January")
//         break;

//     case "2":
//         alert("February")
//         break;

//     case "3":
//         alert("March")
//         break;

//      case "4":
//         alert("April")
//         break;

//      case "5":
//         alert("May")
//         break;

//      case "6":
//         alert("June")
//         break;

//      case "7":
//         alert("July")
//         break;

//      case "8":
//         alert("Augest")
//         break;

//      case "9":
//         alert("September")
//         break;

//      case "10":
//         alert("October")
//         break;

//      case "11":
//         alert("November")
//         break;

//      case "12":
//         alert("December")
//         break;

//     default:
//         alert("Invalid Month")
// }

// -------------------------------------------------------------------------------

// Question 4: Even/Odd (switch(true))

// let num = prompt("Enter Number")

// switch(true) {
//     case num % 2=== 0:
//         alert("Even Number")
//         break;

//     default:
//         alert("Odd Number")

// }

// -------------------------------------------------------------------------------

// Question 5: Discount Checker (switch(true))

// User purchase amount enter kare:

// >= 10000 => 30% Discount
// >= 5000  => 20% Discount
// >= 1000  => 10% Discount
// otherwise => No Discount

// let amount = prompt("Enter Purchase Value")
// switch (true) {
//     case amount >= 10000:
//         alert(" 30% Discount")
//         break;

//     case amount >= 5000:
//         alert(" 20% Discount")
//         break;

//     case amount >= 1000:
//         alert(" 10% Discount")
//         break;

//     default:
//         alert("No Discount")
//  }

//   Question 6 : Vowel or Consonant Checker

// let alphabet = prompt("Enter Alphabet")

// switch (alphabet) {
//     case "a":
//         alert("It is Vowel")
//         break;

//      case "e":
//         alert("It is Vowel")
//         break;

//      case "i":
//         alert("It is Vowel")
//         break;

//      case "0":
//         alert("It is Vowel")
//         break;

//      case "u":
//         alert("It is Vowel")
//         break;

//     default:
//         alert("Consonant")
// }

// Question 7 : Electricity Bill System

// User units enter kare.

// Rules:

// 0 - 100 units      => Rs. 5 per unit
// 101 - 200 units    => Rs. 10 per unit
// 201 - 300 units    => Rs. 15 per unit
// 300+ units         => Rs. 20 per unit

// Output sirf category nahi, total bill bhi nikalo.

// let unit = prompt("Enter Unit")

// switch (true) {
//     case unit <= 100:
//         alert(unit * 5)
//         break;

//     case unit <= 200:
//         alert(unit * 10)
//         break;

//     case unit <= 300:
//         alert(unit * 15)
//         break;

//     case unit > 300:
//         alert(unit * 20)
//         break;
// }
