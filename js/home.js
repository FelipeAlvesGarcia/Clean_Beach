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
const itens = document.getElementById("itens");

var index = 0;
var quantia = 2;
var tamanho;
function carativo (){
    index++;
    if (index >= 2)
    {
        index=0;
    }
    tamanho = 50 * index;
    itens.style.transform =  `translatex(${-tamanho}%)`;
    console.log(vwtamanho);
}

var intervalo;
function car () {
    if (vwtamanho <= 900)
    {
        intervalo = setInterval(carativo, 4500);
    }
}
//