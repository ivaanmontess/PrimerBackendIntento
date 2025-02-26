// map() devuelve un nuevo array dependiendo de la logica que yo le de
// por ejemplo aca quise que los numeros del array "numeros" se sumen x2

const numeros = [3,4,5,7];
//const numeros1 = [6,8,10,14];

const numerosDobles = numeros.map((value) =>{
    return value + value;
});

console.log(numerosDobles);


// push() -> agregarle un nuevo valor al array del final

numeros.push(10);
console.log(numeros);

// find() -> busca un array que busquemos

const buscar = numeros.find((value) => {
    if(value == 7)
        return value;
});

console.log(buscar);

//Reducer() -> Funciona como un acumulador

const total = numeros.reduce((acumulador, value) =>acumulador+value);
console.log(total);
