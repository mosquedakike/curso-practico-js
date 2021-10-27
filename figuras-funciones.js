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


//interaccion con html
//calcular area y perimetro de un cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calculAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

//triangulo
function calcularPerimetroTriangulo() {
    const inputUno = document.getElementById("InputTrianguloA");
    const valueUno = inputUno.value;
    const inputDos = document.getElementById("InputTrianguloB");
    const valueDos = inputDos.value;
    const inputTres = document.getElementById("inputTrianguloC");
    const valueTres = inputTres.value;

    const perimetro = perimetroTriangulo(Number(valueUno), Number(valueDos), Number(valueTres));
    alert(perimetro);
}

function calcularAreaTriangulo() {
    //(base * altura) / 2;
    const inputTres = document.getElementById("inputTrianguloC");
    const valueTres = inputTres.value; 
    const inputCuatro = document.getElementById("inputTrianguloD");
    const valueCuatro = inputCuatro.value;

    const area = areaTriangulo(Number(valueTres), Number(valueCuatro));
    alert(area);
}


//circulo