function calcularPromedio(){

let n1 = parseFloat(prompt("Ingrese el primer número"));
let n2 = parseFloat(prompt("Ingrese el segundo número"));
let n3 = parseFloat(prompt("Ingrese el tercer número"));

if(isNaN(n1) || isNaN(n2) || isNaN(n3)){
document.getElementById("resultado").innerHTML = "Ingrese números válidos";
return;
}

let suma = n1 + n2 + n3;

let promedio = suma / 3;

document.getElementById("resultado").innerHTML =
"El promedio es: " + promedio.toFixed(2);

}