//VW
let vwtamanho = window.innerWidth || document.documentElement.clientWidth
let vw = vwtamanho / 100;
//
const desc1 = document.getElementById("desc1");
const desc2 = document.getElementById("desc2");
const bo1 = document.getElementById("bo1");
const bo2 = document.getElementById("bo2");
const vitrine = document.getElementById("jogos");
const jogos = vitrine.querySelectorAll(".jo");
const numj = jogos.length;
let index = 3;
let tamanho;
let i;
let ver;

function passar () {
    tamanho = 100 / numj * index;
    vitrine.style.transform = `translatex(${-tamanho}%)`;
    i=0;
    for (i=0; i<numj; i++)
    {
        if (i==index)
        {
            jogos[i].style.opacity = "1";
            jogos[i].style.transform = `scale(1)`
        }
        else
        {
            jogos[i].style.opacity = "0.5";
            jogos[i].style.transform = `scale(0.6)`
        }
    }   
    ver = (index+1) % 2;
    if (ver==1)
    {
        desc2.style.display = "flex";
        desc1.style.display = "none";
    }
    else
    {
        desc1.style.display = "flex";
        desc2.style.display = "none";
    }
}

bo2.addEventListener("click", function (){
    if (index<numj-2)
    {
        index++;
    }
    else
    {
        index = 1;
    }
    passar();
});
bo1.addEventListener("click", function (){
    if (index<=1)
    {
        index = numj-2;
    }
    else
    {
        index--;
    }
    passar();
});