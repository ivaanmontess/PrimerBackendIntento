class TicketManager{
    #eventos;

    #preciobaseGanancia;

    constructor(){
        this.#eventos = [];
        this.#preciobaseGanancia = 0.15;
    };

    getEventos(){
        console.log(fecha);
    };

    agregarEvento(nombre, lugar, precio, capacidad=50){
        const evento = {
            id: this.#eventos.legnth +1,
            nombre,
            lugar,
            precio,
            capacidad,
            fecha:new Date(),
            participantes: [],
        };
    }
};