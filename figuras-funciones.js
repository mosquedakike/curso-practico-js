//codigo del cuadrado

console.group("cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;

}

function areaCuadrado(lado) {
    return lado * lado;
}


console.groupEnd();



//codigo del triangulo

console.group("triangulo")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;  
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();



//codigo del circulo

console.group("circulo");

const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}


//circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();