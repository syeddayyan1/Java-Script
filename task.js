// 1. Write a program that takes input a name from user & greet the users

// let name = prompt("What is Your Name")
// alert("Hello" + name)



//2.  print table of 2

// let i;
// for (i = 1; i <= 10; i++) {
//     console.log(i*2)

// }



// 3. Write a program to take “city” name as input from user.If user enters “Karachi”,
// welcome the user like this: “Welcome to city of lights”

// let city = prompt("What is your city name");
// if (city === "karachi"){
//     alert(" Welcome to city of lights")
// }






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


// 6.  Write a program to take input max age & current age from user. If the current age is less than or equal to max age, 
// the message “You are welcome” 

// let age = prompt("Enter Max age")
// let age2 = prompt("Enter current age")

// if( age >= age2){
//     alert("Your'e Welcome")
// }


// 7. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less
//  than 0.25litres, show the message “Please refill the fuel in your car” 

// let fuel=prompt("Remaining Fuel")
// if( fuel=== "0.25"){
//     alert("Please refill the fuel in your car")
// }




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


let number=prompt("Guess the scerete Number")
if(number==3){
    alert("Bingo! Correct Answer")
}

else if(number==4){
    alert("Close enough to the correct answer")

}
else{
    alert("Wrong Answer")
}