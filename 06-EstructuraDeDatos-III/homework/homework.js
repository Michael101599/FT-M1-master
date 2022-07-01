"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

let arbol = new BinarySearchTree(value);

BinarySearchTree.prototype.insert = function(value){
  if(value > this.value){
    if(this.right === null){
      this.right = arbol;
    }
    else{
      this.right.insert(value);
    }
  }
  if(value < this.value){
    if(this.left === null){
      this.left = arbol;
    }
    else{
      this.left.insert(value);
    }
  }
} 

BinarySearchTree.prototype.contains = function(value){
  if(value === this.value){
    return true;
  }
  if(value > this.value){
    if(this.right === null){
      return false;
    }
    else{
      return this.right.contains(value);
    }
  }
  if(value < this.value){
    if(this.left === null){
      return false;
    }
    else{
      return this.left.contains(value);
    }
  }
}

BinarySearchTree.prototype.size = function(){
  if(this.left === null && this.right === null) return 1;
  if(this.left !== null && this.right === null) return 1 + this.left.size();
  if(this.left === null && this.right !== null) return 1 + this.right.size();
  if(this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size();
}

BinarySearchTree.prototype.searchInOrder = function(value, array){
  if(!value) return;
  this.searchInOrder(value.left, array);
  array.push(value);
  this.searchInOrder(value.right, array);
  return array;
}

BinarySearchTree.prototype.searchPreOrder = function(value, array){
  if(!value) return;
  array.push(value);
  this.searchPreOrder(value.left, array);
  this.searchPreOrder(value.right, array);
  return array;
}

BinarySearchTree.prototype.searchPostOrder = function(value, array){
  if(!value) return;
  this.searchPostOrder(value.left, array);
  this.searchPostOrder(value.right, array);
  array.push(value);
  return array;
}

BinarySearchTree.prototype.searchBFS = function(cb, array){
  if(!array){
    var array = [];
  }
  cb(this.value)
  this.left && array.push(this.left);
  this.right && array.push(this.right);
  array.length && array.shift().searchBFS(cb, array);

  }


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
