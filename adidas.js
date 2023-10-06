// function scroll(){
//     gsap.registerPlugin(ScrollTrigger);
  
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true
//   });
  
//   locoScroll.on("scroll", ScrollTrigger.update);
  
//   ScrollTrigger.scrollerProxy(".main", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
  
//     pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//   });
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   ScrollTrigger.refresh();
  
//   }
// scroll()


let previewcontainer = document.querySelector('.product-preview');
let previewbox = previewcontainer.querySelectorAll('.preview');

document.querySelectorAll('.card').forEach(cards =>{
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

let popup = document.getElementById("popup");
let thnks = document.getElementById("thnks");

previewbox.forEach(close =>{
  close.querySelector('.butn').onclick = () =>{
    close.classList.remove('active');
    previewcontainer.style.display = 'none';
    popup.classList.add("open-popup");
    document.querySelector(".okk").onclick=()=>{

      thnks.classList.add("open-thnks");
    }
  };
  document.querySelector(".t").onclick=()=>{
    thnks.classList.remove("open-thnks");
    popup.classList.remove("open-popup");
  }
  document.querySelector(".not-okk").onclick=()=>{

    popup.classList.remove("open-popup");
  }
})

