nombre_personaje_array = [];

function submit()
{
var ver_personaje_array = [];
for( var j =1; j<= 4; j++)
{
var nombre_personaje = document.getElementById("personaje"+j).value;
nombre_personaje_array.push(nombre_personaje);
}
var longitud_nombre_personajes_array = nombre_personaje_array.length;

for( var k = 0; k < longitud_nombre_personajes_array; k++)
{
    ver_personaje_array.push("<h4>Nombre -" + nombre_personaje_array [k]+ "</h4>")};

document.getElementById("ver_personaje_con_comas").innerHTML = ver_personaje_array;

var remover_comas = ver_personaje_array.join("");
document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;


document.getElementById("boton_enviar").style.display ="none";
document.getElementById("boton_ordena").style.display = "inline-block";

}

function sorting()
{

nombre_personaje_array.sort();


var ver_personaje_array_ordenar =[];
var longitud_nombre_personajes_array = nombre_personaje_array.length;


for( var k = 0; k < longitud_nombre_personajes_array; k++)
{
    ver_personaje_array_ordenar.push("<h4>Nombre -" + nombre_personaje_array [k]+ "</h4>")}

var remover_comas = ver_personaje_array_ordenar.join("");


document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;

}