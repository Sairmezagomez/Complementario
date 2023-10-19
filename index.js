import Pelicula from "./pelicula.js";
import Director from "./director.js";
import Protagonista from "./protagonista.js";


const director_1 = new Director ({nombre:"Guillermo del Toro", nacionalidad: "Mexicana", premios:"Premios Oscar"});
console.log(director_1);

const director_2 = new Director ({nombre: "Cristopher Nolan",nacionalidad:"EstadoUnidense", premios: "Premios Oscar"});
console.log(director_2);


const protagonista_2 = new Protagonista ({nombre: "Henry Cavaciel",nacionalidad:"EstadoUnidense", premios: "Premios Oscar", protagonicos: 5});
console.log(protagonista_2);

const protagonista_1 = new Protagonista ({nombre:"Keanu Reeves", nacionalidad: "EstadoUnidense", premios:"Premios Oscar", protagonicos: 3});
console.log(protagonista_1);

const pelicula_1 = new Pelicula ({nombre:"Matrix", duracion: 120, origen: "Estados Unidos", director : director_1, protagonistas:[protagonista_1] });
console.log(pelicula_1);

const pelicula_2 = new Pelicula ({nombre:"Sonidos de Libertad", duracion: 180, origen: "Estados Unidos", director: "Eduardo Veraztegui", protagonistas: "Henry Cavincel"});
console.log(pelicula_2);




      

