//VW
let vwtamanho = window.innerWidth || document.documentElement.clientWidth
let vw = vwtamanho / 100;
//
const botao = document.getElementById("info");
const divinfo = document.getElementById("infotexto");
const fundo = document.getElementById("fundo");
let ativo = false;
let i = false;
let n = false;

botao.addEventListener("click", function () {
    if (ativo == false)
    {
        botao.style.opacity = "1";
        divinfo.style.transform = `translatex(${35*vw}px)`;
        botao.style.transform = `translatex(${35*vw}px)`;
        ativo = true;
        fundo.style.display = "block";
    }
    else
    {
        botao.style.opacity = "0.6";
        divinfo.style.transform = `translatex(${0}px)`;
        botao.style.transform = `translatex(${0}px)`;
        fundo.style.display = "none";
        ativo = false;
    }
});

fundo.addEventListener("mouseover", function (){
    i = true;
    if (i==true && n == true)
    {
        botao.style.opacity = "0.6";
        divinfo.style.transform = `translatex(${0}px)`;
        botao.style.transform = `translatex(${0}px)`;
        fundo.style.display = "none";
        ativo = false;
        i = false;
        n = false;
    }
});
botao.addEventListener("mouseover", function () {
    n = true;
});