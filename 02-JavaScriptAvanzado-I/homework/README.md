
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

<!-- 1. Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.
2. Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado.
3. Las variables declaradas son una propiedad no-configurable de su contexto de ejecución (de función o global). Las variables sin declarar son configurables (p. ej. pueden borrarse). -->

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a; // 8
    console.log(b); // 8
    b = c; // 9
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1 aunque debería lanzar error
```

```javascript
console.log(bar); // undefined
console.log(baz); // error, x no está declarado
foo(); //"Hola!"
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // arroja "Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor) ; //Franco
   }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // Tony
console.log(pm); // Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //"9px"
"$" + 4 + 5 //"$45"
"4" - 2 //"2"
"4px" - 2 //NaN
7 / 0 //Inf
{}[0] //---
parseInt("09") //9
5 && 2 //2
2 && 5 //5
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] //23 porque se suman los parámetros, no los valores, entonces resulta en [33] - [10], y en la resta si se operan los valores
3>2>1 //3 > 2 es true, pero true > 1 es false
[] == ![] //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // retorna Undefined
   console.log(foo()); // retorna 2, ya que JS lee la función primero, diferente en el caso de una variable.

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack; //retorna "Undefined", ya que al final se establece que el parámetro de la función getFood es false, por ende nunca se toma en cuenta el contexto de ejecucióndel if
    }
    return snack; // También retorna "Undefined", ya que el parámetro que se estableció al momento de ejecutar la función es false, por ende todo lo que está en el contexto del if, no existe.
}

getFood(false); //esto determina que el parámetro de la función getFood, es false.
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // dibuja en consola "Aurelio De Rosa", ya que se establece que el getFullName hará referencia al objeto prop.

var test = obj.prop.getFullname; // En este caso, al estar todo dentro de una variable, forma parte del contexto global, y en dicho contexto se estableció en un principio que el nombre es "Juan Pérez".

console.log(test()); // Undefined, ya que test figura como una variable, no como una función, la cual nunca se definió.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); //se muestra primero, ya que en el scope se hace el console inicialmente.
   setTimeout(function() { console.log(2); }, 1000); //se muestra de última en consola, ya que se le asignó que su tiempo de ejecución sería de 1000 milisegundos en el setTimeOut.
   setTimeout(function() { console.log(3); }, 0); //se muestra en tercer lugar, ya que el tiempo de ejecución del console es de 0 milisegundos, pero si depende de un callback (setTimeOut) para ser ejecutado.
   console.log(4); //se muestra de segundo, ya que aun estando en la última posición del scope, no requiere de un callback para ser expresado.
}

printing();
```
