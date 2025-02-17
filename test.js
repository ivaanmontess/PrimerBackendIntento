const Contador = require("./clases.js");

const contador1 = new Contador("ivancho");

console.log(contador1.getCuentaIndividual());
console.log(contador1.getCuentaGlobal());
console.log(contador1.getResponsable());