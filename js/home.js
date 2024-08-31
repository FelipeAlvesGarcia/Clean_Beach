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
const carro = document.getElementById("carro");
const itensCarro = document.querySelector("#itensCarro");
const itens = document.querySelectorAll(".itemCarro")
let index = 0;
let tamanho;

function carativo (){
    index++;
    if (tamanho == 50)
    {
        index=0;
    }
    tamanho = 50 * index;
    itensCarro.style.transform =  `translatex(${-tamanho}%)`;
}
var intervalo;
intervalo = setInterval(carativo, 4000);
//