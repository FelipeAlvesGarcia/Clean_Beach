//VW
let vh = window.innerHeight || document.documentElement.clientHeight
let vwtamanho = window.innerWidth || document.documentElement.clientWidth
let vw = vwtamanho / 100;
//

//Tartaruga(fonte)
const tarfonte = document.getElementById("tarfonte");
const tar = document.getElementById("tar");

tar.addEventListener("mouseover", function (){
    tarfonte.style.display = "block";
});
tarfonte.addEventListener("mouseover", function (){
    tarfonte.style.display = "block";
});
tar.addEventListener("mouseout", function (){
    tarfonte.style.display = "none";
});
//

//Carrossel
const itensCarro = document.querySelector(".itensCarro");
const itensCarro2 = document.querySelector(".itensCarro2");
const itens = document.querySelectorAll(".itemCarro");
const left = document.querySelector("#carroLeft");
const right = document.querySelector("#carroRight");
let index = 0;
let tamanho;
var intervalo;
intervalo = setInterval(carrossel, 3500);

function carrossel (){
    index++;
    if (tamanho == 50)
    {
        index=0;
    }
    tamanho = 50 * index;
    itensCarro.style.transform =  `translatex(${-tamanho}%)`;
    itensCarro2.style.transform =  `translatex(${-tamanho}%)`;
}

left.addEventListener("click", ()=>{
    clearInterval(intervalo);
    index = 0;
    tamanho = 50 * index;
    itensCarro.style.transform =  `translatex(${-tamanho}%)`;
    itensCarro2.style.transform =  `translatex(${-tamanho}%)`;
    intervalo = setInterval(carrossel, 4000);
})

right.addEventListener("click", ()=>{
    clearInterval(intervalo);
    index = 1;
    tamanho = 50 * index;
    itensCarro.style.transform =  `translatex(${-tamanho}%)`;
    itensCarro2.style.transform =  `translatex(${-tamanho}%)`;
    intervalo = setInterval(carrossel, 4000);
})

//