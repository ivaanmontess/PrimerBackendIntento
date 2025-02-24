
//import Calculadora from './calculadora';

const modo = 'calculo';

const ejemploImport = async () => {

    if(modo === 'calculo'){
        const {default: Calculadora} = await import ('./calculadora.js');
        const c1 = new Calculadora();
        c1.sumar(1,2);
        c1.restar(1,2);
    };
};

ejemploImport();
=====
const Contador = require("./clases.js");

const contador1 = new Contador("ivancho");

console.log(contador1.getCuentaIndividual());
console.log(contador1.getCuentaGlobal());
console.log(contador1.getResponsable());
