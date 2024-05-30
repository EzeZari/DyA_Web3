console.log(" ")
console.log("FUNCIONES")

//A)
function suma(a, b) {
  return a + b;
}

let rtaSuma = suma(5, 3);
console.log(rtaSuma); // Debería mostrar 8


//B)
function suma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    alert('Error: uno de los parámetros no es un número');
    return NaN;
  }
  return a + b;
}

var rta = suma(5, '3'); 
console.log(rta); 

//C)
function validateInteger(num) {
  return Number.isInteger(num);
}

console.log(validateInteger(5)); // true
console.log(validateInteger(5.3)); // false

//D)
function suma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    alert('Error: uno de los parámetros no es un número');
    return NaN;
  }
  
  if (!validateInteger(a) || !validateInteger(b)) {
    alert('Error: uno de los parámetros no es un número entero, se redondeará');
    a = Math.round(a);
    b = Math.round(b);
  }
  
  return a + b;
}

let rtaNumEnteros = suma(5.2, 3.5); 
console.log(rtaNumEnteros); 