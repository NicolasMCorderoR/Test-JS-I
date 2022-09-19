// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  // FUNCION CONSTRUCTORA
  function Usuario(usuario, nombre, email, password) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }
  Usuario.prototype.saludar = function () {
    console.log("Hola, mi nombre es " + this.nombre)
  }

  // // CLASE
  // class Usuario {
  //   constructor(usuario, nombre, email, password) {
  //     this.usuario = usuario;
  //     this.nombre = nombre;
  //     this.email = email;
  //     this.password = password;
  //   }
  //   saludar() {
  //     console.log("Hola, mi nombre es " + this.nombre)
  //   }
  // }
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.saludar = function () {
    console.log("Hello World");
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  // Tu código:
  this.reverse = function () {
    str.reverse();
  }
}

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

class Persona {
  //Escribir el constructor aquí:
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
  }
  detalle() {
    console.log(this.nombre + " " + this.apellido + " " + this.edad + " " + this.domicilio);
  }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  //Tu código:
  class persona extends Persona {
    constructor(nombre, apellido, edad, domicilio) {
      super(nombre, apellido, edad, domicilio);
    }
  }
}

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  //Tu código:
  persona.datos = function(){
    console.log(this.nombre + ", " + this.edad + " años")
  }
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona
};
