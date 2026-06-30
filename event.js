// ON CLICK //

let button = document.getElementById("btn")

button.addEventListener("click", () => {
    // alert("i was Clicked Yahhhh!")
    // document.querySelector(".box").innerHTML="Hey Dayyan"
    document.body.style.background = "green"
})

///////////////////////////////////////////////////////////////

// Double CLICK //

// let button = document.getElementById("btn")

// button.addEventListener("dblclick", () => {
//     // alert("i was Clicked Yahhhh!")
//     // document.querySelector(".box").innerHTML="Hey Dayyan"
//     document.body.style.background = "green"
// })

////////////////////////////////////////////////////////

          // click krety he element remove//

let text = document.querySelector(".box")
text.addEventListener("click", (e)=>{
    // alert(" I was Clicked")
    // document.body.style.background="yellow"
    // console.log(e.target.parentNode);

    let remove=document.querySelector("p")
    remove.remove();

})

// let button= document.getElementById("btn")

// button.addEventListener("click", ()=>{

//     alert("I was Clicked and i remove Now")
    
//     let remove= document.getElementById("btn")
//     remove.remove()
// })