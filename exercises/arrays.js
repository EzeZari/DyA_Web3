console.log("")
console.log("ARRAYS ")

//A)
let meses =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(meses[4]);
console.log(meses[10]);

//B)
mesesOrdenados = meses.slice().sort()
console.log(mesesOrdenados)

//C)
meses.unshift("Inicio")
meses.push("Final")
console.log(meses)

//D)
meses.shift() //Elimina el primer elemento
meses.pop() //Elimina el ultimo elemento.
console.log(meses)

//E)
meses.reverse() 
console.log(meses)

meses.reverse()
//F)
let unicoString = meses.join (" - ")
console.log(unicoString)

//G)
nuevoMeses = meses.slice(4,11)
console.log(nuevoMeses)
