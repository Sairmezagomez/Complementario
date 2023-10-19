 export default  class Protagonista{
    constructor({
        nombre,
        nacionalidad,
        premios,
        protagonicos,
    })
    {
        this._nombre = nombre;  // privado (si es privado debe llevar get y set y se debe iniciar con guion bajo)
        this._nacionalidad = nacionalidad;
        this._premios = premios;
        this._protagonicos = protagonicos;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    get nacionalidad(){
        return this._nacionalidad;
    }
    set nacionalidad(nuevaNacionaliad){
        this._nacionalidad = nuevaNacionaliad;
    }
    
    get premios(){
        return this._premios;
    }
    set premios (nuevoPremio){
        this._premio = nuevoPremio;
    }
    
    get protagonicos(){
        return this._protagonicos;
    }
    set protagonicos(nuevoProtagonicos){
        this._protagonicos = nuevoProtagonicos;
    }
    
    
}

