function glow(){
  let text = document.querySelector(".text");
  text.innerHTML = text.innerText
  .split("")
  .map((letters,i)=>
  `<span style= "transition-delay:${i*40}ms;
  filter:hue-rotate(${i*30}deg)" >
  ${letters}
  </span>`
).join("");

}
glow()



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

