

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



const precios = {
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

let costo = {
    precios, 
    becas,
    duracion,
    finalPrice: function () {
        return this.price - (this.price * this.discount)
    }
}



//("-----Ejercicio 11-----")

/* 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, 
tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */