// function scroll(){
//   gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });

// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },

//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

// }
// scroll()



// const throttleFunction=(func, delay)=>{
//   let prev = 0;
//   return (...args) => {
//     let now = new Date().getTime();
//     if(now - prev> delay){
//       prev = now;
//       return func(...args); 
//     }
//   }
// };
// document.querySelector(".pop_up")
// .addEventListener("mousemove",
//  throttleFunction((dets)=>{
//   var div = document.createElement("div");
//   div.classList.add("imgdiv");
//   div.style.left = dets.clientX + 'px';
//   div.style.top = dets.clientY + 'px';

//   var img = document.createElement("img");
//   img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1682430259342-427ec43ebc38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60");
//   div.appendChild(img)

//   document.body.appendChild(div);

//   gsap.to(img,{
//     y:"0",
//     ease:Power1,
//     duration:.6
//   });

//   gsap.to(img,{
//     y:"100%",
//     duration:.6,
//     ease:Power2
//   });
//   setTimeout(function(){
//     div.remove();
//   },2000)
// }, 500));

let previewcontainer = document.querySelector('.product-preview');
let previewbox = previewcontainer.querySelectorAll('.preview');

document.querySelectorAll('.cards').forEach(cards =>{
  cards.onclick = () =>{
    previewcontainer.style.display = 'flex';
    let name = cards.getAttribute('data-name');
    previewbox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  }
});

previewbox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewcontainer.style.display = 'none';
  };
})

previewbox.forEach(close =>{
  close.querySelector('.butn').onclick = () =>{
    close.classList.remove('active');
    // popup.classList.add("open-popup");
    previewcontainer.style.display = 'none';
  };
})
let popup = document.getElementById("popup");
function openpopup(){
  popup.classList.add("open-popup");
}
function closepopup(){
  popup.classList.remove("open-popup");
}
previewbox.forEach(close =>{
  close.querySelector('.butn').onclick = () =>{
    popup.classList.add("open-popup");
  };
})
//        for creating order placed box
let thnks = document.getElementById("thnks");
function openthnks(){
  thnks.classList.add("open-thnks");
}
document.querySelector(".okk").onclick=()=>{
  openthnks();
}
document.querySelector(".t").onclick=()=>{
  thnks.classList.remove("open-thnks");
  popup.classList.remove("open-popup");
}