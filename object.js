let person = {
    name: "ALi",
    age: "17",
    city: "karachi",
}
 
console.log(person)



let phone = {
 
    brand: "Infinix",
    model:10,
    price: "20,000",    
}

// console.log(phone)


phone.brand = "Techno"
phone.model = 12;

    console.log(phone)


// Example 3
    
let student={
    name: "Aliyan",
    age: 20,
    marks: 85,
    adress:{
        city: "karachi",
        area: "Gushan",

    }

}

console.log(student)


student.marks = 90,
    student.email = "sddayyan36@gmail.com",
    student.adress.country = "pakistan"

delete student.age,

console.log(student)
// console.log(Object.values(student))
// console.log(Object.keys(student))