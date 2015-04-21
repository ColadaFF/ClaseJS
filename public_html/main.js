/*
 * 
 * @type Array
 * Creamos un vector que nos permitirá almacenar objectos de Usuarios después.
 */
var Usuarios = [];



function textFunction() {
    //Tomamos el elemento mensaje1 en la variable mensaje
    var mensaje = document.getElementById("mensaje1");
    //Le agregamos un style display block para mostrarlo
    mensaje.style.display = "block";
}
function femeninoFunction() {
    var mensaje = document.getElementById("mensaje2");
    mensaje.style.display = "block";
}

/*
 * Utilizamos el operador $ para decirle a javaScript que utilizaremos jQuery,
 * el cual importamos previamente en el archivo html.
 * Luego buscamos el elemento dentro nuestro html y utilizamos la función 'on'
 * que nos permite saber cuando se ejecuta un evento, en este caso el evento 'click'
 * por ultimo utilizamos la función toogleClass para quitar o poner una clase cuando
 * el evento click sea disparado.
 */
$('#masculino').on('click', function() {
    $('div.form-group').toggleClass('class');
});

/*
 * Buscamos el elemento con el operados $ de jQuery y esperamos a que se dispare
 * la función submit, la cual es una función propia de los formularios, la cual 
 * recibe el parametro e, el cual nos permite obtener el formulario completo para
 * operar sobre este.
 */
$('#formAction').on('submit', function(e) {
    
    //Prevenimos las acciones por defecto de los formularios
    e.preventDefault();
    
    //Validamos que el campo apellido no venga vacio
    if(e.target.apellido.value === ''){
        //Si el campo viene vacio, mostramos un mensaje
        alert("Debes llenar todos los campos.");
    }
    
    //Creamos un objeto JSON para almacenar los valores del formulario
    var valoresFormulario = {};
    
    //Asignamos los valores del formulario a atributos de nuestro objecto JSON
    valoresFormulario.nombre = e.target.nombre.value;
    valoresFormulario.apellido = e.target.apellido.value;
    valoresFormulario.telefono = e.target.telefono.value;
    valoresFormulario.direccion = e.target.direccion.value;
    
    //Agregamos el objeto JSON al vector que declaramos al inicio de este documento.
    Usuarios.push(valoresFormulario);
    
    //Imprimimos por consola el vector de usuarios. 
    console.log(Usuarios);
});

