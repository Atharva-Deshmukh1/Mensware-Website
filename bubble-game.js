var timer = 60;
var score = 0;
var num = 0;

function makebubble(){
    var bubble = "";
    for(var i = 1; i<=96;i++){
    random = Math.floor(Math.random()*10)
    bubble += `<div class="circle">${random}</div>`;
}
document.querySelector(".cbottom").innerHTML = bubble;

}

function runtimer(){
    var a = setInterval(function(){
        if (timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer
    }
    if (timer == 0){
        clearInterval(a);
        
        document.querySelector(".cbottom").innerHTML = `<h2>Game Over. Your Score is: ${score}</h2>`;
    }  
       
    },1000);
}

function newhit(){
    num = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = num;
}

function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
    
}


function eventbubbling(){
    document.querySelector(".cbottom").addEventListener("click",function(details){
        var targethit = (Number(details.target.textContent));
        if (targethit === num){
            increasescore();
            makebubble();
            newhit();
        }
    });
}
var c = 0;
function darktheam(){
    var dark = document.querySelector(".ctop")
    var btn = document.querySelector("button")
    var dar = document.querySelector(".cbottom")
    var main = document.getElementById("main")

    btn.addEventListener("click",function(){
            if (c == 0){
            dark.style.backgroundColor="#414441";
            dar.style.backgroundColor="black";
            main.style.backgroundColor="#241f1f";
            c = 1;
        }
        
    else {
           
                main.style.backgroundColor="white";
                c = 0;
    }

    
    
});
}


runtimer();
makebubble();
newhit();
eventbubbling();
darktheam();