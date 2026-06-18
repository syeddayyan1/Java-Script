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