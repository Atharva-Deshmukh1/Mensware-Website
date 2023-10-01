let carts = document.querySelectorAll('.add');
for(let i=0; i<carts.length; i++){
    carts[i].addEventListner(`click`,()=>{
        console.log("added");
    })
    // console.log("loop")
}