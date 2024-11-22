const titulo = document.querySelector("h1");
const subTitulos = document.querySelectorAll("h2");
const textos = document.querySelectorAll("span");
const links = document.querySelectorAll("a");

const corTitulo = titulo.style.color;
const corSubTitulo = subTitulos[0].style.color;
const corTexto = textos[0].style.color;
const corLink = links[0].style.color;

let diurno = true;
function noturno(){

    if (diurno){
        document.body.style.backgroundColor = "black";
        titulo.style.color = "white";

        subTitulos.forEach(subTitulo => {
            subTitulo.style.color = "white";
        });

        textos.forEach(texto => {
            texto.style.color = "white";
        });

        console.log(links);

        links.forEach(link => {
            link.style.color = "white";
        });

        return diurno = false;
    } else{
        document.body.style.backgroundColor = "white";

        titulo.style.color = corTitulo;

        subTitulos.forEach(subTitulo => {
            subTitulo.style.color = corSubTitulo;
        });

        textos.forEach(texto => {
            texto.style.color = corTexto;
        });

        links.forEach(link => {
            link.style.color = corLink;
        });

        return diurno = true;
    }
}


const seta = document.getElementById("setaBaixo");
const popUp = document.getElementById("popUp");
const corpo = document.querySelector("body");
const copo2 = document.getElementById("corpo");

seta.addEventListener("mouseover",() =>{
    popUp.style.display = "block";
    popUp.innerHTML = "<p class='texto'>Você está com o mouse em cima da seta amarela</p>";
});

corpo.addEventListener("click", () =>{
    popUp.style.display = "none";
});

