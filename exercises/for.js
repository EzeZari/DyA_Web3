console.log(" ")
console.log("FOR")

var array5 =["lunes ","martes","miercoles","jueves","viernes"]

//A)
for(var i=0;i < array5.length;i++ ){
    //alert(array5[i])
    console.log(array5[i])
}

//B)
for (let i = 0; i < array5.length; i++) {
  let palabraModificada = array5[i].charAt(0).toUpperCase() + array5[i].slice(1);
  //alert(palabraModificada);
  console.log(palabraModificada)
}

//C)
var sentence = " ";

for(let i=0; i<array5.length; i++){
    sentence += array5[i]+" ";
}
//alert(sentence.trim())

//D)
var arrayVacio = [];

for(var i=0; i < 10; i++){
    arrayVacio.push(i);
}
console.log(arrayVacio)