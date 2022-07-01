"use strict";

// Closures

function counter() {
  /*
  Ejercicio 1

  La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando un valor numérico que empieza en 1 e incrementa con cada invocación.

  Ejemplo:
  const nuevoContador = counter()
  nuevoContador()     // 1
  nuevoContador()     // 2
  nuevoContador()     // 3

  const otroContador = counter()
  otroContador()      // 1
  otroContador()      // 2
  otroContador()      // 3
   */
  let conteo = 0; //se establece la variable fuera del bloque de ejecución para que al momento de ejecutar la función múltiples veces, su valor no se reinicie a 0.
  return function nuevoContador(){
    return conteo++;
  }
}

function cacheFunction(cb) {
  /*
  Ejercicio 2

  Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar otra vez cálculos que ya se hicieron anteriormente.

  cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".


  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 

  */
  const objeto = {}; //se crea de inicio el objeto que almacenará el arg, tal como lo plantea el test.
    return function(arg){ //se retorna la función que tendrá como parámetro el arg.
      if (objeto.hasOwnProperty(arg)){ //se pregunta si el objeto tiene a arg como propiedad con el hasOwnProperty.
        return objeto[arg]; //si lo tiene, retorna la propiedad [arg].
      } else {
        objeto[arg] = cb(arg); //se iguala al cb, que es una función que tiene como parámetro a arg, con el parámetro arg del objeto
        return objeto[arg]; //se retorna nuevamente la propiedad [arg], que es equivalente a retornar a cb(arg).
      }
    }
 }

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

/*
  Ejercicio 3

  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

// Este método sirve para direccionar la palabra clave this. Crea una nueva función, que cuando es llamada, asigna a su operador this el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.

/*
  Ejercicio 4
  
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this, "*", "*");
let textoGuiones = crearCadena.bind(this, "-", "-");
let textoUnderscore = crearCadena.bind(this, "_", "_");

// como bind() se utiliza en un contexto,, que por lo general es el this, y en este caso, el this nunca se menciona en el return, si o sí se menciona dentro de los parámetros como el primero, y posteriormente, se definen los parámetros (delimitadorIzquierda, delimitadorDerecha, cadena) en el orden respectivo. La cadena no se menciona porque la asigna el usuario.

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
