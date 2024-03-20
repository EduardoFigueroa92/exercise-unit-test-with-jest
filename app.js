// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    // Retornamos el valor en yenes
    // return parseFloat(valueInYen.toFixed(2));
    return parseFloat(valueInYen.toFixed(2));
}
const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen / 156.5) * 0.87;
    // Retornamos el valor en yenes
    return parseFloat(valueInPound.toFixed(4));
}
// app.js file content
console.log("Hello World")
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
// Just a console log for ourselves
console.log(sum(7,3))
// Export the function to be used on other files
// (similar to the keyword "export" when using webpack)
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}