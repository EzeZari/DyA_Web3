console.log("")
console.log("STRINGS")

//A)
var palabraMin = "club atletico river plate"
var palabraMay = palabraMin.toUpperCase();
console.log(palabraMay)

//B)
var palabra = "programacion"
var palabra5Carac = palabra.substring(0 , 5)
console.log (palabra5Carac)


//C)
var palabra 
var palabra3Caract = palabra.substring(palabra.length - 3 )
console.log("Las ultimas 3 letras de la palabra Desarrollador son: "+palabra3Caract)


//D)
var palabra2 = "desarrollador"
var pConMayusyMin = palabra2.substring(0 , 1).toUpperCase() + palabra2.substring(1).toLowerCase();
console.log( pConMayusyMin)

//E)
var palabra3 = "Docu mentación"
var espacioBlanco = palabra3.indexOf(" ")
console.log("El espacio en blanco esta en la posicion "+espacioBlanco)

//F)
var oracion = "desarrollador programador"
var espacio = oracion.indexOf(" ")
var pal1 = oracion.substring(0,espacio)
var pal2 = oracion.substring (espacio + 1)

var mayusyMinDePalabra1 = pal1.substring(0, 1).toUpperCase() + pal1.substring(1).toLowerCase();
var mayusyMinDePalabra2 = pal2.substring(0,1).toUpperCase() + pal2.substring(1).toLowerCase();

var palFinal = mayusyMinDePalabra1 + " " + mayusyMinDePalabra2;
console.log(palFinal)
