

//("------Ejercicio 1------")




const eresBellisimo = "si"

if (eresBellisimo === "si") {
   console.log("Cierta mente")

} else {
    console.log("No te creo")
}




//("------Ejercicio 2------")




const numero = 4

if (numero % 2 === 0 ) {
 console.log("Es divisible entre 2")
} else {
    console.log("No es divisible entre 2")
}




//("------Ejercicio 3------")




const parOnon = 6

if (parOnon%2 === 0) {
    console.log("Es un numero par")
}else {
    console.log("No es par")
}




//("------Ejercicio 4------")




const ganador = 1000

if (ganador === 1000) {
    console.log("Ganaste un premio")

}else{
    console.log("lo sentimos cliente "+ ganador +" siga participando ")
}



//("------Ejercicio 5------")



const numero1 = 2
const numero2 = 6

if ( numero1 < numero2){
    console.log("El numero "+ numero1 + " es menor que el numero "+ numero2 +"")
} else{
    console.log("El numero "+ numero2 + " es menor que el numero "+ numero1 +"")
}



//("------Ejercicio 6------")



const numero_1 = 10
const numero_2 = 15
const numero_3 = 20

if (numero_1 > numero_2 && numero_1 > numero_3) {
    console.log("El numero "+ numero_1 +" es mayor que "+ numero_2 +" y que "+ numero_3 +"")
}else if (numero_2 > numero_1 && numero_2 > numero_3) {
    console.log("El numero "+ numero_2 +" es mayor que "+ numero_1 +" y que "+ numero_3 +"")
}else if (numero_3 > numero_1 && numero_3 > numero_2) {
    console.log("El numero "+ numero_3 +" es mayor que "+ numero_1 +" y que "+ numero_2 +"")  
}else if (numero_1 === numero_2 || numero_1 === numero_3 || numero_2 === numero_3) {
    console.log("Hay dos numeros iguales")
}



//("------Ejercicio 7------")



const dia = "lunes"

if (dia === "lunes") {
    console.log("Buen inicio de semana")
}else if (dia === "viernes") {
    console.log("Solo hoy y a descanzar")
} else if (dia === "sabado" || dia === "domingo") {
    console.log("Disfrute su fin de semana")
}else {
    console.log("A chambear que aun falta algo para descanzar")
}



//("------Ejercicio 8------")



const calificacion = 9

if (calificacion < 6) {
    console.log("Estas reprobado :(")
}else if (calificacion > 5 && calificacion < 9) {
    console.log("Podrias mejorar")
}else if (calificacion == 9) {
    console.log("Buena calificacion")
} else if (calificacion == 10) {
    console.log("Calificacion excelente")
} else {
    console.log ("El valor ingresado no es valido, escribe un numero entre el 1 y el 10")
}



//("------Ejercicio 9------")

const topping = "oreo"



if (topping === "oreo") {
    console.log(" El topping de oreo cuesta 10 pesos")
} else if (topping === "kitkat") {
    console.log("El topping de kitkat cuesta 15 pesos")
} else if (topping === "brownie"){
    console.log("El topping de brownie cuesta 20 pesos")
}else {
    console.log("No tenemos este topping, lo sentimos")
    console.log("El precio del helado sin topping seria de 50 pesos")
}



//("------Ejercicio 10------")



/* const precios = {
    "course": 4999,
    "carrera": 3999,
    "master": 2999
}

const becas = {
    "facebook": 0.20,
    "google": 0.15,
    "jesua": 0.50
}

const duracion = {
    "course": 2,
    "carrera": 6,
    "master": 12
}
 */
const nivel = 1 //Number(prompt("Elije un nivel \n 1. Course $4999 \n 2. Carrera $3999 \n 3. Master $2999 "))

const beca = 4 //prompt("Tiene alguna de estas becas? \n 1. Facebook 20% \n 2. Google 15% \n 3. Jesua 50% \n 4. No tengo beca ")


function costoPrograma(nivel, beca) {
    let costoMensual = 0
    
    if (nivel === 1) {
        costoMensual = 4999

    }else if (nivel === 2) {
        costoMensual = 3999

    }else if (nivel === 3) {
        costoMensual = 2999
    }        

    if (beca === 1) {
        costoMensual -= costoMensual * 0.2

    }else if (beca === 2) {
        costoMensual -= costoMensual * 0.15

    }else if (beca === 3) {
        costoMensual -= costoMensual * 0.50

    }else if (beca === 4) {
        costoMensual
    }        

    return costoMensual
}

function calcularCostoTotal (nivel, costoMensual) {
    let costoFinal = 0

    if (nivel = 1) {
        costoFinal = costoMensual * 2
    }else if (nivel = 2) {
        costoFinal = costoMensual * 6
    }else if (nivel = 3) {
        costoFinal = costoMensual * 12
    }
    return costoFinal
}



const costoMensual = costoPrograma(nivel, beca)
const costoTotal = calcularCostoTotal(nivel, costoMensual)

console.log("El costo mensual del programa es " + costoMensual)
console.log("El costo total del programa es " + costoTotal)

// solo sirve para igualdades, un ejemplo de como hacer el mismo else if de la funcion pero con otro metodo
/* switch (nivel) {
    case 1:
        costoMensual = 2999
        break;
    case 2:
        costoMensual = 3999
        break;
    case 3:
        costoMensual = 4999        
        break;
    default:
        break;
} */


//("-----Ejercicio 11-----")




/* 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, 
tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */

/* const litros  10

 kilometros por litro = coche 2  moto 1 autobus 5

const vehiculos = {
    "coche": 0.20,
    "moto": 0.10,
    "autobus":0.5
}
 */


const transporte = 2//Number(prompt("Que vehiculo desearia usar? \n 1. Coche $0.20/km \n 2. Moto $0.10/km \n 3. Autobus 0.5/km"))
const distancia = 100//Number(prompt("A que distania en km esta su destino?"))

function precioKm(transporte, distancia) {
    let costo = 0

    if (transporte === 1) {
        costo = 0.20

    }else if (transporte === 2) {
        costo = 0.10

    }else if (transporte === 3) {
        costo = 0.5
    }

    let precioTotal = costo * distancia

    if (distancia <= 100) {
        precioTotal += 5
    }else {
        precioTotal += 10
    }
    
    return precioTotal
}
const precioTotal = precioKm(transporte, distancia)
console.log (precioTotal)

