function calcularPromedio(){

    let n1 = parseFloat(prompt("Ingrese el primer número"));
    let n2 = parseFloat(prompt("Ingrese el segundo número"));
    let n3 = parseFloat(prompt("Ingrese el tercer número"));

    let suma = n1 + n2 + n3;

    let promedio = suma / 3;

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "El promedio es: " + promedio;

}