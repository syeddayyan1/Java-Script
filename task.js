// 1. Write a program that takes input a name from user & greet the users


// let name = prompt("What is Your Name")
// alert("Hello" + name)

// ----------------------------------------------------------------------------------------



//2.  print table of 2

// let i;
// for (i = 1; i <= 10; i++) {
//     console.log(i*2)

// }

// ----------------------------------------------------------------------------------------



// 3. Write a program to take “city” name as input from user.If user enters “Karachi”,
// welcome the user like this: “Welcome to city of lights”

// let city = prompt("What is your city name");
// if (city === "karachi"){
//     alert(" Welcome to city of lights")
// }

// ----------------------------------------------------------------------------------------



// 4.  Write a program to take “gender” as input from user. If the user is male, give
//  the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.


// let gender=prompt(" What is your Gender")
// if( gender === "male"){
//     alert("Good Morning Sir")
// }
// if (gender === "female")
// {
//     alert(" Good Morning Ma'am ")
// }

// ----------------------------------------------------------------------------------------


//5.  Write a program to take input color of road traffic signal from the user & show the message according to this
// table: Signal color Message re
//  vehicles must stop yellow vehicles should get ready to move green vehicles can move now.


// let color = prompt("What are the colors of Traffic Signals")
// if( color === "red"){
//     alert("vehicles must stop ")
// }
// else if (color === "yellow"){
//     alert("vehicles should get ready to move")
// }

// else if( color === "green")
// {
//     alert("vehicles can move now ")
// }

// ----------------------------------------------------------------------------------------


// 6.  Write a program to take input max age & current age from user. If the current age is less than or equal to max age,
// the message “You are welcome”

// let age = prompt("Enter Max age")
// let age2 = prompt("Enter current age")

// if( age >= age2){
//     alert("Your'e Welcome")
// }

// ----------------------------------------------------------------------------------------


// 7. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less
//  than 0.25litres, show the message “Please refill the fuel in your car”

// let fuel=prompt("Remaining Fuel")
// if( fuel=== "0.25"){
//     alert("Please refill the fuel in your car")
// }

// ----------------------------------------------------------------------------------------


// 8. Write a program to take input the marks obtained in three subjects & total marks. Compute
// & show the resulting percentage on your page.

//  let english=prompt("Enter the marks of English: ")
//  let urdu=prompt("Enter the mark of Urdu:")
//  let math=prompt("Enter the mark of Math:")
//  let sum= Number(english)+Number(urdu)+Number(math)
//  alert("Your obtained mark is" +sum)
//  let total=prompt("Enter Total Marks:")

//  if(sum >= 80){
//     alert(" Grade: A+ , Remarks: Excellent")
 
//  }
//  else if(sum>=70){
//     alert(" Grade A: , Remarks: Good")
 
//  }
//  else if(sum>=60){
//     alert(" Grade: B , Remarks: You Need to improve")
 
//  }
//  else if(sum<=60){
//     alert(" Grade: F , Remarks: Fail")
 
//  }

// ----------------------------------------------------------------------------------------

// 10. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Take input from users,
//  the following:  a. Name of item1  b. Name of item2 c. Price of item 1 d. Price of item 2 e. Ordered quantity of item 1
// f. Ordered Quantity of item 2 g. Shipping charges Compute the total cost. If the total cost is above 2000 PKR , offer them
// 10% discount & show the receipt in your browser.


// let item1=prompt("Name of item 01")
// let item2=prompt("Name of item 02")
// let price1=prompt("Priece of item 01")
// let price2=prompt("price of item 02")
// let quantity1=prompt("Ordered of item 01")
// let quantity2=prompt("Ordered of item 02")
// let sum = Number(price1)+Number(price2)

// if(sum>=2000){
//     alert(" Congratulation! You have 10% Discount")
// }
// else{
// alert("Sorry! You have No Discount")
// }


// 11. Guess game:  Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
//  a. If user guesses the same number, show  “Bingo! Correct answer”.  b. If the guessed
// number +1 is the secret number, show  “Close enough to the correct answer”.


// let number=prompt("Guess the scerete Number")
// if(number==3){
//     alert("Bingo! Correct Answer")
// }

// else if(number==4){
//     alert("Close enough to the correct answer")

// }
// else{
//     alert("Wrong Answer")
// }

// ----------------------------------------------------------------------------------------

// 12. Write a program to check whether the given number is divisible by 3. Show the message to
// the user if the number is divisible by 3.

// let number = prompt("Enter any Number")
// if (number % 3 == 0 ) {
//     alert("This Number is divisible by 3")
     
// }
// else {
//     alert("This number is not divisible by 3")
//  }

// ----------------------------------------------------------------------------------------

// 13. Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)

// let team1 = prompt("Enter Score of Team 1")
// let team2 = prompt("Enter Score of Team 2")

// if (team1 > team2) {
//     alert(" Team 01 won the Match")
// }

// else if (team2 > team1) {
//     alert(" Team 2 won the match")
// }

// else if (team1 == team2) {
//     alert(" This Match is Tie ")
// }


// ----------------------------------------------------------------------------------------

// 15. Write a program that checks whether the given input is an
// even number or an odd number.

// let num = prompt("Enter Number")
// if (num % 2 == 0) {
//      alert("Given Input is Even Number")
// }
 

// else {
//     alert(" Given Number is Odd Number")
// }


// ----------------------------------------------------------------------------------------

// 16. Weather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// let temp = prompt(" Enter Temperature")
// if (temp >= 40) {
//      alert(" It is too hot outside")
// }
// else if (temp >= 30) {
//     alert(" The Weather today is Normal")
// }
 
// else if (temp >= 20) {
//     alert(" Today weather is Cool ")
// }

// else if (temp >= 10) {
//     alert(" OMG! Today weather is so cool")
// }

// ----------------------------------------------------------------------------------------


// 18. Write a program that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.

// let day = prompt(" Enter day Name")
// if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday")
// {
//     alert(" It's a week day ")
// }

// else if  (day == "satarday") {
//     alert(" It's Weekend")
// }

// else if (day == "sunday") {
//     alert(" Yay! It's Holiday")
// }


// ----------------------------------------------------------------------------------------


// 19. Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”

// let score = prompt("Input user Score")
// if (score >= 50) {
//     alert(" You are passed")
// }

// else {
//     alert(" Try again")
// }

// ----------------------------------------------------------------------------------------


//  20. Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal
// Show the output to make sure it works (e.g. "The greater
// number of 5 and 10 is 10.").


// let num1=prompt("Enter number 01")
// let num2 = prompt("Enter Number 02")

// if (num1 > num2) {
//     alert("The Greater Number is "  +num1)
// }

// else if (num2 > num1) {
//     alert("The Greater Number is "  +num2)
// }

// else if (num1 == num2) {
//     alert( + num1+ "=" +num2)
// }



// ----------------------------------------------------------------------------------------


// 21. The Translator:
// Write a program that:
// a. takes 1 input, a language code (e.g. "es", "de", "en")
// b. tells "Hello, World" for the given language, for atleast 3
// languages. It should default to returning English.
// (Hint: use translate.google.com to check the translation of
// hello world in different languages)

// let language= prompt(" Enter Language Code")
// if (language == "en") {
//     alert("Hello, World")
// }

// else if (language == "de") {
//     alert("Hallo, Welt")
// }

// else if (language == "es") {
//     alert("Hola, Mundo ")
// }


// ----------------------------------------------------------------------------------------


// 22. Write a program to take input a number & tell whether it’s a
// positive or negative number.

// let number = prompt(" Enter Number")
// if (number > 0 ){
//     alert("This number is Positive ")
// }

// else if (number < 0) {
//     alert(" This Number is Negative ")
// }


// ----------------------------------------------------------------------------------------


// 23. The Pluralizer: Write a program that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1
// dog".
// Run the program for a few different inputs and show the result
// to make sure it works.

// let num = prompt(" Enter Number")
// let noun = prompt(" Enter Noun")
// alert( + num + "  "   +noun)



// ----------------------------------------------------------------------------------------



// 14. Take a string, a number and a Boolean in three variables.
// Write a program that checks the type of variables & responds
// accordingly


// let inp = prompt("Enter Value")
// alert(typeof(inp))

// let inp = prompt("Enter Value")
// if (!isNaN(inp)) {
//     alert( inp+ " is Number")
// }
// else {
//     alert( inp+ " is " +typeof(inp))
// }


// ----------------------------------------------------------------------------------------


// 17. Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

alert("This is a calculator Program")
let num1 = prompt("Enter First Number")
let operator=prompt("Enter operator")
let num2 = prompt("Enter Second Number")


if (operator == "+") {
    alert(Number(num1) + Number(num2))
}

else if (operator == "-") {
    alert( Number(num1) - Number(num2))
}

else if (operator == "*") {
    alert( Number(num1) * Number(num2))
}

else if (operator == "/") {
    alert( Number(num1) / Number(num2))
}





// ----------------------------------------------------------------------------------------



