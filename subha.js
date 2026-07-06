const btn=document.getElementById("btn");
const title=document.getElementById("title");
const text=document.getElementById("text");

window.onload=()=>{

title.style.opacity="0";

setTimeout(()=>{

title.style.transition="1s";
title.style.opacity="1";

},300);

}

btn.addEventListener("click",()=>{

title.innerHTML="🚀 Welcome to My first Website";

text.innerHTML="Thank you for visiting! I'm learning HTML, CSS, JavaScript and building amazing websites.";

document.body.style.background="linear-gradient(-45deg,#141E30,#243B55,#0F2027,#2C5364)";

btn.innerHTML="Thanks ❤️";

});

document.addEventListener("mousemove",(e)=>{

document.body.style.backgroundPosition=
`${e.clientX/15}px ${e.clientY/15}px`;

});