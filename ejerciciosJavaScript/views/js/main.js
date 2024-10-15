/*------------ suma de dos numeros ------------------*/

// const numberOne = prompt('Ingrese el numero uno');
// const numberTwo = prompt('Ingrese el numero dos');
// let result = Number(numberOne) + Number(numberTwo); 
// console.log(`el resultado de la suma es: ${result}`)

/*--------- promedio de 3 numeros -----------*/
// const numOne = prompt('Ingrese número uno'); 
// const numTwo = prompt('Ingrese número dos'); 
// const numThree = prompt('Ingrese número 3'); 
// let average = (Number(numOne) + Number(numTwo) + Number(numThree)) / 3; 
// console.log(`el promedio es: ${average}`);

/*-------------- calculo de area de triangulo -----------------*/

// const base = prompt('Ingrese la base del triángulo en cm'); 
// const  height = prompt('Ingrese la altura del triángulo en cm'); 
// let areaTringle = (base * height)/2;
// console.log(`el area del triangulo es ${areaTringle} cm cuadrados`)

/*----------- conversión grados celsius a farenheit -------------- */
// let degressCelsius = prompt('Ingrese los grados en Celsius');    
// let celsiusToFarenheit = (degressCelsius * (9/5)) + 32; 
// console.log(`${celsiusToFarenheit} F°`)

/*---------- conversión kilometros a millas ----------------*/
// const kilometers = prompt('Ingrese los kilometros'); 
// const miles = kilometers * 0.621371; 
// console.log(`${miles} millas`);

/*------- calculo de iva de producto -----------*/ 
// let productPrice = prompt('Ingrese el precio del producto'); 
// const iva = 0.19; 
// let ivaProduct = productPrice * iva; 
// console.log(`El valor del iva del producto es ${ivaProduct}`);

/*------------Calculo de salario semanal -------------*/
// let hoursWorked = prompt('Ingrese las horas trabajadas en la semana');
// let hourlyPay = prompt('Ingrese su pago por horas'); 
// let weeklySalary; 
// weeklySalary = hoursWorked * hourlyPay; 
// console.log(`El salario a la semana es: ${weeklySalary}`);

/*-------------- conversion dias a minutos, hotas y segundos ----------*/ 
// const days = prompt('Ingrese los días'); 
// let hours = days * 24;  
// let minutes = days * 1440;
// let seconds = days * 86400; 
// console.log(`${hours} horas, ${minutes} minutos, ${seconds} segundos`); 

/*----------------Precio total con descuento ------------------*/
// let priceProduct = Number(prompt('Ingrese precio del producto'));
// const discount = 0.10; 
// priceProduct -= (priceProduct * discount);
// console.log(`el valor del producto con el descuento es: ${priceProduct.toFixed(2)}`);

/*---------- Intercambio de números --------------*/
// let numberOne = prompt('Ingrese el numero uno'); 
// let numberTwo = prompt('Ingrese el número dos');
// const tempNumber = numberOne; 
// numberOne = numberTwo; 
// numberTwo = tempNumber; 
// console.log(`${numberOne} y ${numberTwo}`);


/*-------------- Calculo de perimetro rectangulo-------------*/
// const base = prompt('Ingrese la base del rectangulo'); 
// const height = prompt('Ingrese la altura del rectangulo'); 
// let rectanglePerimeter = 2 * (Number(base) + Number(height));
// console.log(`El perimetro del rectangulo es ${rectanglePerimeter}`); 

/*-----------------Conversion libras a kg------------------------*/
// let pounds = prompt('Ingrese las libras a convertir'); 
// let kilograms = pounds * 0.453592; 
// console.log(`${kilograms} kilogramos`);

/*---------- Calculo de hipotenusa con teorema de pitagoras-----------*/
// const legOne = Number(prompt('Ingrese el primer cateto')); 
// const legTwo = Number(prompt('Ingrese el segundo cateto')); 
// const hypotenuse = Math.sqrt((legOne * legOne) + (legTwo * legTwo)); 
// console.log(`La hipotenusa es ${hypotenuse.toFixed(3)}`);

/*--------------Calculo de compra de 3 productos -------------------------*/
// let productOne = prompt('Ingrese el precio del producto uno'); 
// let productTwo = prompt('Ingrese el precio del producto dos'); 
// let productThree = prompt('Ingrese el precio del producto tres'); 
// let totalPurchase = Number(productOne) + Number(productTwo) + Number(productThree);
// console.log(`El precio total de la compra es: ${totalPurchase}`);

/*--------Conversion de minutos a horas y horas restantes --------------*/
// let minutesPrompt = Number(prompt('Ingrese los minutos')); 
// let hours = Math.floor(minutesPrompt / 60); 
// let remainingMinutes = minutesPrompt % 60;

// if(hours > 0 && remainingMinutes > 0) {
//     console.log(`${hours} hora(s) ${remainingMinutes} minuto(s)`);
// } else if(hours > 0) {
//     console.log(`${hours} hora(s)`);
// } else {
//     console.log(`${remainingMinutes} minuto(s)`);
// }

/*-----------Multiplicacion de 3 numeros---------*/
// let numberOne = prompt('Ingrese numero uno');
// let numberTwo = prompt('Ingrese numero uno');
// let numberThree = prompt('Ingrese numero uno');
// let result = numberOne * numberTwo * numberThree;
// console.log(`el resultado es: ${result}`);

/*-----------Calculo de interes simple----------*/
// let capital = prompt('Ingrese capital');
// let annualInterestRate = prompt('Ingrese tasa de interés anual');
// let numberOfYears = prompt('Ingrese número de años');
// let interest = capital * (annualInterestRate/100)  * numberOfYears; 
// console.log(`el interés simple es: ${interest}`);

/*-------Area de un circulo------------*/
// let circleRadius = Number(prompt('Ingrese el radio del circulo'));
// let areaCircle = Math.PI * Math.pow(circleRadius, 2);
// console.log(`el area del circulo es: ${areaCircle.toFixed(2)}`);


/*----------Conversion de segundos a horas---------*/
// let secondsPrompt = prompt('Ingrese los segundos'); 
// let hours = Math.floor(secondsPrompt/3600); 
// let remainingSecondsAfterHours = secondsPrompt%3600
// let minutes = Math.floor(remainingSecondsAfterHours/60); 
// let remainingSeconds = remainingSecondsAfterHours % 60; 

// if(hours > 0 && minutes > 0 && remainingSeconds > 0) {
//     console.log(`${hours} hora(s) ${minutes} minuto(s) ${remainingSeconds} segundo(s)`);
// } else if(hours > 0 && minutes > 0) {
//     console.log(`${hours} hora(s) ${minutes} minuto(s)`);
// } else if(hours > 0){
//     console.log(`${hours} hora(s)`);

// } else if(minutes > 0) {
//     console.log(`${minutes} minuto(s) ${remainingSeconds} segundo(s)`);
// } else {
//     console.log(`${remainingSeconds} segundo(s)`);
// }

/*----------- Calculo de volumen de un cilindro-------------*/
let radio = Number(prompt('Ingrese el radio del cilindro')); 
let height = Number(prompt('Ingrese la altura del cilindro')); 
let cylinderVolume = Math.PI * Math.pow(radio, 2) * height;
console.log(`el volumen del cilindro es ${cylinderVolume.toFixed(2)}`);