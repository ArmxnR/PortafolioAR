// comentario de linea

/*
comentarios
en 
bloque
 */

//Declarciones de variables

    // "="" el igual es de asignación
    //3 tipos
    const nombreVariable = "Este texto";
    let nombreVariableLet = "Este texto"; //Dentro de un contexto
    var nombreVariableVar = "Este texto"; //Universal

    let hola = 465465465;
    let valorBoolean = true;
    var nombrePagina = "Nombre del Alumno";

    //Objetos

    let perrito = {
        nombre : "Perrito",
        edad : 5,
        color : "Blanco",
        peso : function (){
            return this.edad * 5
        }
    };

    let alumno = {
        nombre : "Edy",
        edad : 23,
        hobbie: ["cartar", "Musica", "Bailar", "Caminar"]
    };

    let alumno_2 = {
        nombre : "Edy",
        edad : 23,
        mascota: perrito,
        diasFavoritos: ["Vienes", "Sabado"]
    }


    //Arreglos o arrays

    let arreglo = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    let arreglo_2 = [1,2,3,4,5];
    let arreglo_3 = ["Lunes", 23];
    let arreglo_4 = [perrito, alumno];
    let arreglo_5 = ["lunes", 23, perrito, arreglo_2];


// estructuras JS

//Esto es un pequeño cambio

//Condicionales
if(true){
    
}


//funciones

function sumar( num1, num2){
    return  num1 +  num2;
}

function procesarArreglo(){
    console.log("=======> Break");
    for (let i = 0; i < arreglo.length ; i++) {
        console.log("Días : "+arreglo[i]);
        if (arreglo[i].toLowerCase() == "miercoles") {        
            break;
        }
    }

    console.log("=======>Continue")

    for (let i = 0; i < arreglo.length ; i++) {    
        if (arreglo[i].toLowerCase() == "miercoles") {        
            continue;
        }
        console.log("Días : "+arreglo[i]);
    }
}

let valor = function (){
    
}