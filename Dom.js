//    DOM Class 1

// JavaScript DOM - Call by Children, Parent & Sibling Nodes
   
// document.body.firstElementChild
// document.body.firstElementChild.children
// document.body.firstElementChild.children[2]
// document.body.firstElementChild.children[2].previousSibling
// document.body.firstElementChild.children[2].nextSibling
// document.body.style.background="green"

// ---------------------------------------------------------------
// ---------------------------------------------------------------

//    DOM Class 2
// JavaScript DOM - Selecting by Ids, Classes


// change color Calling by Class name

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.background = "red"

// ---------------------------------------------------------------

// By id select
// document.getElementById("redbox").style.background="yellow"

// ---------------------------------------------------------------


// sirf pehla box ka color chane hoga
// document.querySelector(".box").style.background = "green"


// // is se sare classes box ka color change hoga
// document.querySelectorAll(".box").forEach(e => {
//     e.style.background= "green"
// })


// Matches Methode
// e=document.getElementsByTagName("div")
// e[4].matches("#redbox")
// false
// e[3].matches("#redbox")
// true




// -------------------------------------------------------------
// // Practise Question:  Give 5 boxes, assign a random
// // color and a random background to each box using DOM concept

// let boxes = document.getElementsByClassName("box")

// boxes[2].style.background = "red"
// boxes[1].style.background = "Yellow"
// boxes[0].style.background = "Green"
// boxes[3].style.background = "Orange"
// boxes[4].style.background = "purple"

// boxes[0].style.color = "white"
// boxes[1].style.color = "green"
// boxes[2].style.color = "blue"
// boxes[3].style.color = "purple"
// boxes[4].style.color="yellow"


//   Math.random kuch bh random vlue ladeta he
// Math.floor value ko decimal se hata deta he

let boxes = document.getElementsByClassName("box")

function randomcolor() {
    let r = Math.floor(Math.random() * 233)
    let g = Math.floor(Math.random() * 254)
    let b = Math.floor(Math.random() * 222)
    
    return `rgb(${r}, ${g} , ${b})`;
}

for (i = 0; i < boxes.length; i++){
    boxes[i].style.backgroundColor = randomcolor();
    boxes[i].style.color = randomcolor();
}


// --------------------------------------------------------------------------------------




