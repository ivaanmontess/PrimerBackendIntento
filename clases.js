/*class Usuario{
    constructor(nombre){
        this.nombre = nombre;
    }
    static especie = "humano";
    saludar = () =>{
        console.log(`hoLa mi rey soy ${this.nombre}`);
    }

}
*/

class Contador {
    //atributos
    //constructor
    //metodos
    static CONTADOR_GLOBAL;

    constuctor(nombreResponsable){
        this.responsable = this.responsable;
        this.contadorResponsable = 0; 
    }

    getResponsable(){
        return this.responsable;
    }

    contar(){
        this.contadorResponsable += 1;
        Contador.CONTADOR_GLOBAL++;
    }

    getCuentaIndividual(){
        return this.contadorResponsable;
    }

    getCuentaGlobal(){
        return Contador.CONTADOR_GLOBAL;
    }
}

module.exports = Contador;