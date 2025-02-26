// ES7 ->
// Exponencial (**)
// includes -> arrays

const valor1 = 5;

//console.log(5**3);

// INCLUDES (Incluye un array y selecciona uno en especifico en un console log)

const nombres = ['ivan', 'sirius' , 'milton'];

console.log(nombres.includes('ivan'));

// -----------------------------------
// ES8
// Object.entries(), Object.values() y Objects.keys
// Sirve para tener mas control sobre los objetos

//const estudiante1 = {
//    nombre: 'joaquin',
//    apellido: 'Tipadro',
//    edad: 35,
//}

//console.log(Object.entries(estudiante1)); //Una re pelotudes
//console.log(Object.keys(estudiante1));
//console.log(Object.values(estudiante1));

// ES9 Nuevas funcionalidades

/* const estudiante1 = {
    nombre: 'joaquin',
    apellido: 'Tipadro',
    edad: 35,
}

const direccionEstudiante1 ={
    ciudad: 'buenos aires',
    barrio: 'la plata',
    cp: 1900,
}

// spread sirve para hacer una desestructuracion
const {apellido} = estudiante1;
console.log(apellido)

const estudianteUnificado = { ...estudiante1, ...direccionEstudiante1};
console.log(estudianteUnificado);
//Esto sirve para unificar dos objetos en uuno solo en consola.
// osea se usan los puntos suspensivos para arrastrar la unificacion

// operador rest -> resta o quita alguna cosa que no nos interese

const {cp, ...elResto} = estudianteUnificado;
console.log(elResto);

*/

/*ES10
// .trim() -> valores de string
// .flat () -> arrays
// Dynamic import

const cadena = '    hola locura    '
// console.log({cadena});
const eliminarEspacios = cadena.trim();
console.log({eliminarEspacios});

const numeros = [300, 400, 500, [2,3,4,5], 600, 700]
console.log(numeros.flat());
*/

//ES11
// nullish -> colocar un valor por defecto

let estaLloviendo;

const llueve = estaLloviendo || 'La variable no tiene ningun valor'

console.log({llueve});
//Si no se ponen los dos palitos, automaticamente se pone "unidefined"


