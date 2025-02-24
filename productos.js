// Actividad: hacer una separacion en consola de los objetos dentro del array
// luego de eso hacer que no se repitan en consola los obj.


const productos = [
    {
        manzanas: 3,
        peras: 2,
        carne:1,
        jugos: 5,
        dulces: 2,
    },
    {
        manzanas: 1,
        sandia: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
];

const tipos = [];

productos.forEach((value) => {
    const typeProduct = Object.keys(value);
    typeProduct.forEach((item)=>{
        if(!tipos.includes(item)){
            tipos.push(item);
        }
        
    })
});
console.log(tipos);