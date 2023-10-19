
export default class Pelicula {
    constructor({
        nombre,
        duracion,
        origen,
        director,
        protagonistas = [],
    })

    {
        this._nombre = nombre;  // privado (si es privado debe llevar get y set y se debe iniciar con guion bajo)
        this._duracion = duracion; 
        this._origen = origen;  //privado
        this._director = director; 
        this._protagonistas = protagonistas; 
        
    }
    
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get duracion(){
        return this._duracion;
    }
    set duracion(nuevaDuracion){
         this._duracion = nuevaDuracion;
    }
    get origen (){
         return this._origen;
     }
     set origen(nuevoOrigen){
         this._origen = nuevoOrigen;
     } 
    
    get director(){
        return this._nombre;
    }
    set director(nuevoDirector){
        this._director = nuevoDirector;
    }

    get protagonistas(){
        return this._protagonista;
    }
    set protagonistas(nuevoProtagonistas){
        this._protagonistas = nuevoProtagonistas;
    }
}

