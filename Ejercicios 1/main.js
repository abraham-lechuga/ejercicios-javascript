//------1-------
function f(x, y = 2, z = 7) {
  return x + y + z;
}
console.log(f(5, undefined)); //Regresa la sumatoria de los valores de las variables y se le asigna el valor de 5 a la variable x

//------2-------
var animal = "kitty";
var result = animal === "kitty" ? "cute" : "still nice"; //Si el valor de la variable animal es igual a kitty, lanza el mensaje de cute. Si es diferente lanza el mensaje de still nice
console.log(result);

//------3-------
var animal = "kitty";
var result = "";

if (animal === "kitty") {
  result = "cute";
} else {
  result = "still nice";
}

console.log(result); //Si el valor de la variable animal es igual a kitty, lanza el mensaje de cute. Si es diferente lanza el mensaje de still nice

//------4------
var a = 0;
var str = "not a";
var b = "";
b = a === 0 ? ((a = 1), (str += " test")) : (a = 2); //Si la variable "a" es igual a 0, imprime la primer condicion. En caso contrario se iguala a 2 la variable "a"
console.log(b);

//------5------
var a = 0;
a === 1 ? alert("Hey, it is 1!") : 0; //Si la varuable "a" es igual a 1, lanza una alerta. En casi contrario lo iguala a 0
console.log(a);

//------6------
//a === 1 ? alert('Hey, it is 1!') : alert('Weird, what could it be?');
//if (a === 1) alert('Hey, it is 1!') else alert('Weird, what could it be'); //Manda el siguiente texto por falla en la declaración de la función "Unexpected token 'else'" si se escribe en una sola línea

//------7-------
var animal = "kitty";
for (var i = 0; i < 5; ++i) {
  //(animal === 'kitty') ? break:console.log(i); //Tiene un error de sintaxis y lanza el siguiente mensaje "Unexpected token 'break'" ya que no se pueden usar declaraciones de control en operadores ternarios
}

//------8------
var value = 1;
switch (value) {
  case 1:
    console.log("I will always run");
    break; //La declaración de de control "break" para el proceso una vez que se cumple para no ejecutar los siguientes casos en la condicional "switch"
  case 2:
    console.log("I will never run");
    break;
}

//------9------
var animal = "Lion";
switch (animal) {
  case "Dog":
    console.log('I will not run since animal !== "Dog"');
    break;
  case "Cat":
    console.log('I will not run since animal !== "Cat"');
    break;
  default:
    console.log("I will run since animal does not match any other case");
}

//------10-------
// function john() {
//   return "John";
// }

// function jacob() {
//   return "Jacob";
// }

// switch (name) { //
//   case john(): //Compara la variable "name" con la función "john"
//     console.log('I will run if name === "John"');
//     break;
//   case "Ja" + "ne": //Hace una concatenación para obtener el nombre de "Jane"
//     console.log('I will run if name === "Jane"');
//     break;
//   case john() + " " + jacob() + " Jingleheimer Schmidt":
//     console.log("His name is equal to name too!");
//     break;
// }

// console.log(name);

//------11------
var x = "a"
switch (x) {
   case "a":
   case "b":
   case "c":
      console.log("Either a, b, or c was selected.");
      break;
   case "d":
      console.log("Only d was selected.");
      break;
   default:
      console.log("No case was matched.");
      break;
}

//------12------
var x = 5 + 7;
console.log(x);
var x = 5 + "7";
console.log(x);
var x = "5" + 7;
console.log(x);
var x = 5 - 7;
console.log(x);
var x = 5 - "7";
console.log(x);
var x = "5" - 7;
console.log(x);
var x = 5 + "x";
console.log(x);

//------13------
var a = 'Hello' || '';
console.log(a);
var b = '' || [];
console.log(b);
var c = '' || undefined;
console.log(c);
var d = 1 || 5;
console.log(d);
var e = 0 || {};
console.log(e);
var f = 0 || '' || 5;
console.log(f);
var g = '' || 'yay' || 'boo';
console.log(g);

//------14------
var a = 'hello' && '';
console.log(a);
var b = '' && [];
console.log(b);
var c = undefined && 0;
console.log(c);
var d = 1 && 5;
console.log(d);
var e = 0 && {};
console.log(e);
var f = 'hi' && [] && 'done';
console.log(f);
var g = 'bye' && undefined && 'adios';
console.log(g);

//------15------
var foo = function(val) {
  return val || 'default';
}

console.log( foo('burger') );
console.log( foo(100) );
console.log( foo([]) );
console.log( foo(0) );
console.log( foo(undefined) );

//------16------
// var isLegal = age >= 18;
// console.log(isLega);
// var tall = height >= 5.11;
// console.log(tall);
// var suitable = isLegal && tall;
// console.log(suitable);
// var isRoyalty = status === 'royalty';
// console.log(isRoyalty);
// var specialCase = isRoyalty && hasInvitation;
// console.log(specialCase);
// var canEnterOurBar = suitable || specialCase;
// console.log(canEnterOurBar);

//------17------
for (var i = 0; i < 3; i++) {
  if (i === 1) {
      continue; //Si se cumple esta condicione, la omite y sigue con el proceso hasta llegar a las comparación establecida en el for
  }
  console.log(i);
}

//------18------
var i = 0;
while (i < 3) {
    if (i === 1) {
        i = 2;
        continue; //Si se cumple esta condicione, la omite y sigue con el proceso hasta llegar a las comparación establecida en el bucle while
    }
    console.log(i);
    i++;
}

//------19------
for(var i = 0; i < 5; i++){
  nextLoop2Iteration:
  for(var j = 0; j < 5; j++){
    if(i == j) break nextLoop2Iteration;
    console.log(i, j);
  }
}

//------20------
function foo() {
  var a = 'hello';
  
  function bar() {
    var b = 'world';
    console.log(a);
    console.log(b);
  }
  console.log(a);
  console.log(b);
}
console.log(a);
console.log(b);

//------21------
// function foo() {
//   const a = true;

//   function bar() {
//     const a = false;
//     console.log(a);
//   }

//   const a = false;
//   a = false;
//   console.log(a);
// }

//------22------
var namedSum = function sum (a, b) {
  return a + b;
}

var anonSum = function (a, b) {
  return a + b;
}
console.log(namedSum(1, 3));
console.log(anonSum(1, 3));

//------23------
var a = [1, 2, 3, 8, 9, 10];
a.slice(0, 3).concat([4,5,6,7], a.slice(3,6));
console.log(a);

var a = [1, 2, 3, 8, 9, 10];
a.splice(3, 0, ...[4, 5, 6, 7]);
console.log(a);

//------24------
var array = ['a', 'b', 'c']

array.join('->');
array.join('.');
'a.b.c'.split('.');
'5.4.3.2.1'.split('.');
console.log(array);

//------25------
var array = [5, 10, 15, 20, 25];

Array.isArray(array);
array.includes(10);
array.includes(10, 2);
array.indexOf(25);
array.lastIndexOf(10, 0);
console.log(array);

//------26------
var array = ['a', 'b', 'c', 'd', 'e', 'f'];

array.copyWithin(5, 0, 1);
array.copyWithin(3, 0, 3);
array.fill('Z', 0, 5);
console.log(array);

var array = ['Alberto', 'Ana', 'Mauricio', 'Bernardo', 'Zoe'];

array.sort();
array.reverse();
console.log(array);