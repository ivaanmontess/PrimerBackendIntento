// Un objeto representa coloquialmente una caja.

// Esta caja podes guardar cosas: String, arrays, metodos, etc.

const estudiante1 = {
    nombre: 'Ivan',
    apellido: 'montes',
    fechaNacimiento: '2000-01-12',
    obtenerEdad:  function calcularEdad(fechaNacimiento){

        const fechaNacimientoObj = new Date(this.fechaNacimiento);
    
        // le sumo 3 horas por el utc, ya que estamos en argentina
        fechaNacimientoObj.setHours(fechaNacimientoObj.getHours() + 3);
        let fechaActual = new Date();
    
        //le resto 3 horas por el utc, ya que estamos en arg
        fechaActual.setHours(fechaActual.getHours() - 3);
    
        //obetener el dia y el mes de la fecha actual
        let diaNacimiento = fechaNacimientoObj.getDate();
        let mesNacimiento = fechaNacimientoObj.getMonth() +1; // devuelve el mes del 0-11 por eso le sumo 1
    
        // Calcular la edad
        let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
    
    
        //Ajustar la edad si el mes actual es antes del mes de nacimiento, o si es el mismo mes pero el dia actual es antes del dia de nacimiento.
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento));
            -- edad;
        return edad;
    }
    
    
};
const estudiante2 = {
    nombre: 'vanessa',
    apellido: 'fuenzalida',
    fechaNacimiento: '1997-07-12',
    obtenerEdad: function calcularEdad(fechaNacimiento){

        const fechaNacimientoObj = new Date(this.fechaNacimiento);
    
        // le sumo 3 horas por el utc, ya que estamos en argentina
        fechaNacimientoObj.setHours;(fechaNacimientoObj.getHours() + 3);
        let fechaActual = new Date();
    
        //le resto 3 horas por el utc, ya que estamos en arg
        fechaActual.setHours(fechaActual.getHours() - 3);
    
        //obetener el dia y el mes de la fecha actual
        let diaNacimiento = fechaNacimientoObj.getDate();
        let mesNacimiento = fechaNacimientoObj.getMonth() +1; // devuelve el mes del 0-11 por eso le sumo 1
    
        // Calcular la edad
        let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
    
    
        //Ajustar la edad si el mes actual es antes del mes de nacimiento, o si es el mismo mes pero el dia actual es antes del dia de nacimiento.
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento))--edad;
        return edad;
    }
    
    
};

console.log(estudiante1);
console.log(estudiante1.obtenerEdad());