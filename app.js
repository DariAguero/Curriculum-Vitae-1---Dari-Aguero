
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrar0cultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}


let links = document.querySelectorAll("nav a");
for (var x = 0; x<links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;

    }
}

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);

let javascript = document.getElementById("javascript");
crearBarra(javascript);

let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);

let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);

let php = document.getElementById("php");
crearBarra(php);

let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

let contadores=[-1,-1,-1,-1,-1,-1];

let entro=false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 17, 0, intervalHtml);
        },100);
        const intervalJavaScript = setInterval(function(){
            pintarBarra(javascript, 17, 1, intervalJavaScript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 15, 2, intervalWordpress);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 15, 3, intervalPhotoshop);
        },100);
        const intervalphp = setInterval(function(){
            pintarBarra(php, 14, 4, intervalphp);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 14, 5, intervalIlustrator);
        },100);
        
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "antiquewhite";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}