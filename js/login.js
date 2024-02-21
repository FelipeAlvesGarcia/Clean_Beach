const botao = document.getElementById("info");
const divinfo = document.getElementById("infotexto");
const fundo = document.getElementById("fundo");
let ativo = false;
let i = false;
let n = false;

botao.addEventListener("click", function () {
    //VW
    let vwtamanho = window.innerWidth || document.documentElement.clientWidth
    let vw = vwtamanho / 100;
    //
    if (vwtamanho <= 600)
    {
        if (ativo == false)
        {
            botao.style.opacity = "1";
            divinfo.style.transform = `translatex(${80*vw}px)`;
            botao.style.transform = `translatex(${79.9*vw}px)`;
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
    }
    else
    {
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

//Botão responsível
const resp = document.getElementById("botaolo");
const ca = document.getElementById("ca");
const lo = document.getElementById("lo");
ca.style.display = "block";

resp.addEventListener("click", function (){
    if(ca.style.display == "block")
    {
        ca.style.display = "none";
        lo.style.display = "block";
    }
    else
    {
        lo.style.display = "none";
        ca.style.display = "block";
    }
});