
let previewcontainer = document.querySelector('.product-preview');
let previewbox = previewcontainer.querySelectorAll('.preview');

document.querySelectorAll('.container .cards').forEach(cards =>{
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
    popup.classList.add("open-popup");
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