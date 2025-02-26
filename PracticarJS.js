// En este archivo Javascript vamos a practicar las fuciones con el concepto textual y aplicandolo para entenderlo
// Objetivo: Entender diferencias DE TODO

const PrincipalesFuciones = {
    Nombre: 'Ivan', // string o cadena de texto
    edad: 32, //number
    casado: true, // booleano
};
const casado = PrincipalesFuciones 
if(casado){
    console.log("Si el ivancho es casado, va a salir verdadero")
};
// bueno ahora vamos con los OBJETOS
/* 
¿QUe son los objetos?
son estructuras que podemos definir par agrupar valores bajo un mismo criterio
Se puede decir que un objeto es una coleccion de datos relacionados como entidad. Se componen de un listado de pares clave-valor, es decir, tienen propiedades y valores.
*/

const persona1 = {
    nombre: 'vane',
    edad: 27,
    domicilio: 'Diagonal 79',
};

/* 
Constructores: es una funcion que se usa para crear un nuevo objeto cada ves que sea necesario. Con esta "funcion constructora" se puede inicializar las propiedades del objeto al momento de ser instanciado con "new". Ejemplo:
*/

function persona2(nombre, edad, calle){
    this.nombre = 'martin';
    this.edad = 18;
    this.calle = 'piojoso al 2000';
};
const persona3 = new persona2("luciano", 14, "aquella al 1000");

/*
El uso del THIS: la palabra this o este, refiere al elemento actual en el que se esta escribiendo el codigo, osea literalmente se pone solo para cuando le damos los parametros a la funcion misma creada, tambien es util para asegurar que se emplea las propiedades del objeto actual
--------------------------------------

METODOS:
Las fucniones en JS se puede definir en cualquier parte del codigo, y pueden se llamadas de manera posterior.
Los metodos de los objetos tambien son tecnicamente "funciones" solo que se limitan a poder ser ejecutados solo desde el mismo objeto.

*/

// TODO MUY LINDO HASTA ACA ENTENDEMOS, AHORA VAMOS CON LAS CLASES Y NOS VAMOS A PONER COMO LOQUITAS

/* 
CLASES O CLASS: Las clases en JS proveen una sintaxis mas clara y simple para hacer objetos personalizados, son como la suma de todo lo anterior visto. Ejemplo:
*/

class Persona {
    constructor(nombre, edad, nacimiento){
        this.nombre = 'ivan';
        this.edad = 25;
        this.nacimiento = 'argentina';
    }

    funcionHablar (){
        console.log("Hola soy" + this.nombre);
    };
};

const personita1 = new Persona("vanessa", 27, "chilena");
personita1.funcionHablar();

console.log(personita1);