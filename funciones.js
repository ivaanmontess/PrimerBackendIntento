function saludar(){
    console.log("Saludo cordial")
}

// como funciona o la convocamos?
saludar(); //asi de simple


// Hay otra funcion de tipo flecha

const saludar2 = () => {
    console.log("Holis con otra funcion")
};
saludar2();


const sumar = (valor1, valor2) =>{
    return valor1 + valor2;
}
const restar = (valor1, valor2) =>{
    return valor1 - valor2;
}
const dividir = (valor1, valor2) =>{
    return valor1 / valor2;
}
const multiplicar = (valor1, valor2) =>{
    return valor1 * valor2;
}

console.log(sumar(5,5));
console.log(restar(6,3));
console.log(dividir(12,2));
console.log(multiplicar(123,123));
