// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollars){
let euro = dollars / oneEuroIs ["USD"]
let yen = euro * oneEuroIs ["JPY"]
return yen;
}

function fromEuroToDollar(euros){
    return euros * oneEuroIs ["USD"]

}

function fromYenToPound(yen){
    let euro = yen / oneEuroIs ["JPY"]
    let pound = euro * oneEuroIs ["GBP"]
    return pound;
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound, sum};