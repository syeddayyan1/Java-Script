// // // class student{
// // //     constructor(name, age) {
// // //         this.name = name;
// // //         this.age = age;
// // //     }
// // // }
  

// // // let s1 = new student("Dayyan", "20")
// // // let s2 = new student("ALi", "18")
 

// // // console.log(s1,s2)


// // // -----------------------------------------------------------------------------------



// // class students{
// //     constructor(name, age, studentclass, result) {
// //         this.name = name
// //         this.age = age
// //         this.studentclass = studentclass
// //         this.result=result
        
// //     }
// // }


// // let s1= new students("Dayyan", 22, "BSCS", "Pass")
// // let s2= new students("Zain", "22", "BSCS", "Pass")
// // let s3= new students("Obaid", "22", "BSCS", "Fail")
// // let s4= new students("ALi", "22", "BSCS", "Pass")
// // let s5 = new students("Noor", "22", "BSCS", "Pass")

// // console.log(s1, s2 , s3, s4, s5 )
// // // -----------------------------------------------------------------------------------



// // // ---------------Methode-----------------------------------

// class Student{
//     constructor(name, age, studentclass, result) {
//         this.name = name
//         this.age = age
//         this.studentclass = studentclass
//         this.result=result
        
//     }

//     //     //  methode//
// //     // methode hum isliye use krty he ke bar bar saboke liye consle.log na lagana are 1 hi
// //     // function me console.log daal diyaa jitne chaiyyee or wo sab object pr kaam krjeygaa bass obj
// //     // ke sath us function ko call krn parega//

//     introduce(){
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.studentclass)
//         console.log(this.result)
//     }

// }



// let s1=new Student("Dayyan", 20, "BSCS" , "Pass")

// let s2 = new Student("Ali", 20, "BSSS", "Pass")

// s1.introduce()
// s2.introduce()


// // // -----------------------------------------------------------------------------------



// // class car{
// //     constructor(name, model, color, demand) {
// //         this.name = name
// //         this.model = model
// //         this.color = color
// //         this.demand=demand
// //     }

// //     data() {
// //         console.log("The Car Name is" , this.name)
// //         console.log("The Car Model is" , this.model)
// //         console.log("The Car Color is" , this.color)
// //         console.log("The Car Demand is" , this.demand)
// //     }
// // }


// // let car1= new car("Cultus", 2012, "White", "200,000")
// // let car2= new car("Kyber", 1990, "White", "100,000")
// // let car3= new car("Mehran", 2019, "Silver", "400,000")
// // let car4 = new car("Alto", 2008, "Grey", "300,000")


// // car1.data()
// // car2.data()
// // car3.data()
// // car4.data()

// // // -----------------------------------------------------------------------------------



// // Abstraction
// // sirf necceserry details deikhata he user ko or unceery details ko hide krta he

// // inhertance
// // inhertance ka matalb child parent ka relation hota he mtlb class 1 me 1 puri detail he or class 2 ke ander
// // // bh kuch property hamey same chaiye tu hum use inhertitance krdengain


// // ----------------------------- Inheritance ------------------------------------------

// // class vehcile {

// //     start() {
// //         console.log("Vehcile Started")
// //     }
// // }


// // class car extends vehcile{
// //     drive() {
// //         console.log("Driving is Starting..............")
// //     }
// // }


// // let car1 = new car()

// // car1.start()
// // car1.drive()

// // // -----------------------------------------------------------------------------------


// class user{

//     login() {
//     console.log("Tap button to login")
//     }
    
//     logout(){
//     console.log("Tap Button to Logout")
//     }

// }

// class customer extends user{
//     buyproduct() {
//         console.log("You buy Product Easily")
//     }
// }

// class admin extends user{
//     deleteuser() {
//         console.log("You Can delete the user Eaisly")
//     }
// }


// let Customer = new customer()

// Customer.login()
// Customer.logout()
// Customer.buyproduct()


// let Admin = new admin()
// Admin.login()
// Admin.logout()
// Admin.deleteuser()


// // // -----------------------------------------------------------------------------------



// // ----------------------------- Encapsulation ------------------------------------------
// Encapsulation a matalab ye he ke sab sepertae rakhna means ye ke 1 class ke ander hi uske methode ko rakha
// dsre class ke liye dusra class bana kr uske ander uska methode rkahna .....


class product{
    constructor(name, price, stock) {
        this.name = name
        this.price = price
        this.stock= stock
    }

    showproduct() {
        console.log("Mobile Name is " , this.name)
        console.log("Mobile Price is " , this.price)
        console.log("Mobile Stock is " , this.stock)
    }

    buyproduct(quintity) {

        if (this.stock >= quintity) {
            console.log("Our stoke is available") 
        }
        else {
             console.log("Our stoke is not available") 
        }
        
        
    }
}


let data = new product("Infinix", 20000, 8)
data.showproduct()
data.buyproduct(3)

