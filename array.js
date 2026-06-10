let arr = [2, 3, 4, 5, 6, 8]

arr[0]= 23
console.log(arr)
console.log( arr[2])
console.log(arr[3])
console.log(arr.length)

// convert in string propert
console.log(arr.toString())

// arrah joint property
console.log(arr.join(" and "))

// array me se value nikalna

let array = [1, 2, 4,6,8,23]
array.pop()
console.log(array)

//  Array me value dalna

let arry = [2, 4, 6, 8]
arry.push(100);
console.log(arry)
// console.log(arry.length)

// array delete

let aary = [9, 6, 8, 3, 5]
 delete arry[0]
console.log(aary)

// concat aaray Combine

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]

console.log(a1.concat(a2, a3))

// sort array sequenc wise 

let b1 = [2,3,1,4,5,7,9,6,0,8]
console.log(b1.sort())


// splice value nikalna

let numbers = [1, 2, 3, 4, 5]
numbers.splice(1,2)
console.log(numbers)

// splice value nikal kr dusri value add krnana

let number = [1, 7, 3, 9, 2]
number.splice(1,2,222,333)
console.log(number)


// slice vaalue dena ke kaha se shrow ho or kaha tak jae or un values ko skip krdeta he

let numberr = [2, 3, 4, 6, 8]
numberr.splice(1, 2)
console.log(numberr)

