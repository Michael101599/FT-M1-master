"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
//metáfora del tren
function LinkedList() { //esta es la locomotora, la cual no tiene ninguna carga (contenido), simplemente el null, que será el gancho para los otros vagones (elementos).
  this.head = null;
}

function Node(value) { //este es el vagón, el cual tiene un value, y a su vez tiene el null (this.next) con el cual se enganchan los otros vagones (elementos)
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value){ //se crea un prototype con la función add, la cual nos agregará nuevos elementos a la función constructora.
  let node = new Node(value);
  
  if (this.head === null){ //siempre que head sea null, se le podrán agregar new Node(value) a la función constructora
    this.head = node;
  }
  else {
    let refer = this.head; //se guarda en una variable un head que hace referencia al null original
    while(refer.next !== null){
      refer = refer.next; //pero dado el caso que el head ya esté ocupado con un new Node(value), entonces refer pasa a ser un .next, es decir, un null
    }
    refer.next = node; //y ese refer.next que reemplaza al this.head, es el que guardará el nuevo value que se genere
  }
}

LinkedList.prototype.search = function(value){
  let refer = this.head;

  if (this.head.value === value){
    return true;
  }
  else{
    while(refer.next !== null){
      if(refer.next.value === value){
        refer = refer.next;
      }
    }
  }
  return false;
}

LinkedList.prototype.remove = function(){
  let refer = this.head;

  if (refer === null){
    return null;
  }
  else if (refer !== null && refer.next === null){
    let aux = this.head.value;
    this.head = null;
    this.head._length--;
    return aux;
  }
}
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.bucket = [];
}

HashTable.prototype.hash = function(key){
  let sum = 0;
  for(let i = 0; i < key.length; i++){
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;
}

HashTable.prototype.set = function(){
  if (typeof key !== "string"){
    throw TypeError ("Keys must be strings");
  }
  let i = this.hash(key);
  if (this.buckets[i] === undefined){
    this.bucket[i] = {};
  }
  this.buckets[i][key] = value;
}

HashTable.prototype.get = function(key){
  let i = this.hash(key);
  return this.buckets[i][key];
}

HashTable.prototype.hasKey = function(key){
  let i = this.hash(key);
  return this.buckets[i].hasOwnProperty(key);
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
