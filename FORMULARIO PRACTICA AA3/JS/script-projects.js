$(document).ready(function(){
    console.log("Pagina lista para usar");
    procesarEquipos();
    procesarEtiquetas();

    procesarCurso();

    $("#idNewProject").on('click',function(){
        //Lanzar modal de formulario de registro de nuevo curso
        $("#idModalNewProject").modal('show');        
    });

});

let listaEquipos = [
    {
        id: "E01",
        nombre: "Persona 01"
    },
    {
        id: "E02",
        nombre: "Persona 02"
    },
    {
        id: "E03",
        nombre: "Persona 03"
    },
    {
        id: "E04",
        nombre: "Persona 04"
    },
    {
        id: "E05",
        nombre: "Persona 05"
    }
]

function procesarEquipos(){
    $("#idTeamsProject").empty();
    listaEquipos.forEach(etiqueta => {
        $("#idTeamsProject").append('<option value="'+etiqueta.id+'">'+etiqueta.nombre+'</option>');
    });
}

let listaEtiquetas = [
    {
        id: 1,
        nombre: "Programación"
    },
    {
        id: 2,
        nombre: "Diseño"
    },
    {
        id: 3,
        nombre: "Creatividad"
    },
    {
        id: 4,
        nombre: "Negocios"
    },
    {
        id: 5,
        nombre: "Marketing"
    },
    {
        id: 6,
        nombre: "Idiomas"
    },
]

function procesarEtiquetas(){
    $("#idTagsProject").empty();
    listaEtiquetas.forEach(etiqueta => {
        $("#idTagsProject").append('<option value="'+etiqueta.id+'">'+etiqueta.nombre+'</option>');
    });
}

let listaCursos = [
    {
        idProy : 1,
        titulo : "Javascript",
        descripcion : "JavaScript es un lenguaje de programación ampliamente utilizado para desarrollar aplicaciones web interactivas.",
        fechaCreacion : "01-04-2025",
        responsable: "Alumno Certus",
        equipo:["Persona 1", "Persona 2", "Persona 3", "Persona 4"],
        presupuesto:1321321,
        imagen: "https://img.freepik.com/free-vector/web-programming-background_1300-188.jpg?t=st=1746461551~exp=1746465151~hmac=33218cb3fd583644656eb45f0bba1e703b1be0bac4557bfead41e5a4734dbd60&w=740",
        etiquetas : ["Programación", "Creatividad", "Idiomas"]
    },
    {
        idProy : 2,
        titulo : "Python",
        descripcion : "Python es un lenguaje de programación de alto nivel, versátil y conocido por su simplicidad y legibilidad.",
        fechaCreacion : "01-05-2025",
        imagen: "https://img.freepik.com/premium-vector/python-icon_1181510-14.jpg?w=740",
        etiquetas : ["Programación", "Idiomas"]
    },
    {
        idProy : 3,
        titulo : "HTML Y CSS",
        descripcion : "HTML (HyperText Markup Language) y CSS (Cascading Style Sheets) son tecnologías fundamentales para la creación de páginas web..",
        fechaCreacion : "02-05-2024",
        imagen: "https://img.freepik.com/free-vector/coding-concept-illustration_114360-859.jpg?t=st=1746461881~exp=1746465481~hmac=5c47ec4dbc8acee148a2211f830c206bc2205dbf1a228abacfc59dbaeaa0349d&w=740",
        etiquetas : ["Creatividad", "Idiomas"]
    },
    {
        idProy : 4,
        titulo : "Github",
        descripcion : "GitHub es una plataforma de desarrollo colaborativo basada en Git, un sistema de control de versiones.",
        fechaCreacion : "04-05-2024",
        imagen: "https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-2801.jpg?t=st=1746461417~exp=1746465017~hmac=90056375087b1bab95cc48f2faa62110fd4f15919b766f5ed501a0ebfce66b50&w=740",
        etiquetas : ["Programación"]
    }
];

function procesarCurso(){
    debugger
    //Limpiar el contenedor
    $("#idContenedor").empty();
    
    //Reccoriendo el arreglo de proyectos
    listaCursos.forEach(p => {
        $("#idContenedor").append(
        '<div class="card mb-3 mr-mod idInputc" style="max-width: 540px;">'+
            '<div class="row g-0">'+
                '<div class="col-md-4">'+
                    '<img src="'+p.imagen+'" class="img-fluid rounded-start" alt="'+p.titulo+'">'+
                '</div>'+
                '<div class="col-md-8">'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">'+p.titulo+'</h5>'+
                        '<p class="card-text">'+p.descripcion+'</p>'+
                        '<p class="card-text"><small class="text-body-secondary">'+p.fechaCreacion+'</small></p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>');
    });
    /*
    for(let p=0; p<listaCursos.length; p++){
        //Agregar Tarjeta de Proyecto
        $("#idContenedor").append();
    };*/

}


function mostrarConfirmacion(){    
    if (validarFormulario()) {
        $("#idModalConfirmation").modal('show');
    }else{
        alert("Completa el formulario");
    }    
}

function guardarInformacion(){
    let nuevoCurso = {
        idProy : listaCursos.length + 1,
        titulo : $("#idTitleProject").val(),
        descripcion : $("#idDescription").val(),
        fechaCreacion : $("#idDateCreated").val(),
        responsable: $("#idLeader").val(),
        equipo: $("#idTeamsProject").val(),
        presupuesto: parseFloat($("#idPrep").val()),
        imagen: $("#idImg").val(),
        etiquetas : $("#idTagsProject").val()
    };

    listaCursos.push(nuevoCurso);

    procesarCurso();

    $("#idModalConfirmation").modal('hide');
    $("#idModalNewProject").modal('hide');

    //Limpiando Inputs
    $("#idTitleProject").val('');
    $("#idDescription").val('');
    $("#idDateCreated").val('');
    $("#idLeader").val('');
    $("#idTeamsProject").val('');
    parseFloat($("#idPrep").val(undefined));
    $("#idImg").val('');
    $("#idTagsProject").val('');   
}


function validarFormulario(){
    let validacion = true;

    //validacion cada input

    let vTitulo = $("#idTitleProject").val();
    if (vTitulo == undefined  || vTitulo == null || vTitulo.trim() == "") {
        validacion = false;
        //$("#eTitleProject").attr('display: block');
    }

    let vDescripcion = $("#idDescription").val();
    if (vDescripcion == undefined  || vDescripcion == null || vDescripcion.trim() == "") {
        validacion = false;
    }

    let vFecha = $("#idDateCreated").val();
    if (vFecha == undefined  || vFecha == null || vFecha.trim() == "") {
        validacion = false;
    }

    let vResponsable = $("#idLeader").val();
    if (vResponsable == undefined  || vResponsable == null || vResponsable.trim() == "") {
        validacion = false;
    }

    let vPresupuesto = $("#idPrep").val();
    if (vPresupuesto == undefined  || vPresupuesto == null || vPresupuesto.trim() == "") {
        validacion = false;
    }
    
    let vImagen = $("#idImg").val();
    if (vImagen == undefined  || vImagen == null || vImagen.trim() == "") {
        validacion = false;
    }

    let vEtiquetas = $("#idTagsProject").val();
    if (vEtiquetas == null || vEtiquetas.length == 0 ) {
        validacion = false;
    }

    let vEquipo = $("#idTeamsProject").val();
    if (vEquipo == null || vEquipo.length == 0 ) {
        validacion = false;
    }

    return validacion;
}