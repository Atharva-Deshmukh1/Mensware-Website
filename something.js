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
let popup = document.getElementById("popup");
let thnks = document.getElementById("thnks");



previewbox.forEach(close =>{
  close.querySelector('.butn').onclick = () =>{
    close.classList.remove('active');
    previewcontainer.style.display = 'none';
  };
})
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