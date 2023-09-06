let imgs=document.querySelector("img")
let heart=document.getElementById("Heart")
let heart2=document.getElementById("heartwo")
let clear=0;


const dil=()=>{
    console.log("click me");
    heart.style.opacity="0.8"
    heart.style.transform="translate(-50%,-50%) scale(2)"
    heart2.style.color="red"
    setTimeout(()=>{
        heart.style.opacity="0"
    },1000)
}

const smalldil=()=>{
    if(clear==0){
        heart2.style.color="red"
        clear=1;
    }
    else{
        heart2.style.color="white"
        clear=0;
    }
}

imgs.addEventListener("dblclick",dil)
heart2.addEventListener("click",smalldil);