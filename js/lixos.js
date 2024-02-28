//VW
let vhtamanho = window.innerHeight || document.documentElement.clientHeight
let vwtamanho = window.innerWidth || document.documentElement.clientWidth
let vw = vwtamanho / 100;
let vh = vhtamanho / 100;
//
//Ver Mais
const botao = document.getElementById("verm");
const btexto = document.getElementById("vertexto");
const mais = document.getElementById("mais");
var ver = 0;

botao.addEventListener("click", function (){
    vwtamanho = window.innerWidth || document.documentElement.clientWidth
    vw = vwtamanho / 100;
    if (vwtamanho > 600)
    {
        if(ver == 0)
        {
            btexto.innerText = "Ver Menos";
            botao.style.position = "relative";
            botao.style.borderBottom = "none";
            botao.style.borderBottomRightRadius = "0vw";
            ver = 1;
            window.scroll({
                top:700,
                behavior:"smooth",
            });
            mais.style.display = "block";
        }
        else
        {
            btexto.innerText = "Ver Mais";
            botao.style.position = "sticky";
            ver = 0;
            window.scroll({
                top:0,
                behavior:"smooth",
            });
            mais.style.display = "none";
            botao.style.borderBottom = "solid";
            botao.style.borderColor="darkgreen"
            botao.style.borderBottomRightRadius = "4vw";
        }
    }
    else
    {
        if(ver == 0)
        {
            btexto.innerText = "Ver Menos";
            botao.style.position = "relative";
            botao.style.borderBottom = "none";
            botao.style.borderBottomRightRadius = "0vw";
            ver = 1;
            window.scroll({
                top:700,
                behavior:"smooth",
            });
            mais.style.display = "block";
        }
        else
        {
            btexto.innerText = "Ver Mais";
            botao.style.position = "sticky";
            ver = 0;
            window.scroll({
                top:0,
                behavior:"smooth",
            });
            mais.style.display = "none";
            botao.style.borderBottom = "solid";
            botao.style.borderColor="darkgreen"
            botao.style.borderBottomRightRadius = "6vw";
        }
    }
});