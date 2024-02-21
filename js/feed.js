//Estrelas
const es1 = document.getElementById("es1");
const es2 = document.getElementById("es2");
const es3 = document.getElementById("es3");
const es4 = document.getElementById("es4");
const es5 = document.getElementById("es5");
const es1i = document.getElementById("es1i");
const es2i = document.getElementById("es2i");
const es3i = document.getElementById("es3i");
const es4i = document.getElementById("es4i");
const es5i = document.getElementById("es5i");
var num;
function estrelas (nu) {
    var apaga = nu;
    var i = 5;
    for(nu; nu>=1; nu--)
    {
        switch (nu)
        {
            case 5:
                es5i.src = "img/estrela.png";
            break;
            case 4:
                es4i.src = "img/estrela.png";
            break;
            case 3:
                es3i.src = "img/estrela.png";
            break;
            case 2:
                es2i.src = "img/estrela.png";
            break;
            case 1:
                es1i.src = "img/estrela.png";
            break;
        }
    }
    for(i; i>apaga; i--)
    {
        switch (i)
        {
            case 5:
                es5i.src = "img/estrela2.png";
            break;
            case 4:
                es4i.src = "img/estrela2.png";
            break;
            case 3:
                es3i.src = "img/estrela2.png";
            break;
            case 2:
                es2i.src = "img/estrela2.png";
            break;
        }
    }
}
var estrela1 = 1;
es1.addEventListener("click", function (){
    num = 1;
    estrelas(num);
    if (estrela1 == 2)
    {
        estrela1 = 1;
    }
    else{
        estrela1 = 2;
    }
    if (estrela1 == 1)
    {
        es1i.src = "img/estrela.png"
    }
    else
    {
        es1i.src = "img/estrela2.png";
    }
    console.log(estrela1)
});
es2.addEventListener("click", function (){
    num = 2;
    estrelas(num);
});
es3.addEventListener("click", function (){
    num = 3;
    estrelas(num);
});
es4.addEventListener("click", function (){
    num = 4;
    estrelas(num);
});
es5.addEventListener("click", function (){
    num = 5;
    estrelas(num);
});
//