// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("10 dollar should be (10 / 1.07) * 156.5 yen", function() {
    const yenes = fromDollarToYen(10);
    const expected = (10 / 1.07) * 156.5;
    expect(yenes).toBeCloseTo(expected, 5); // Cambiado de toBe a toBeCloseTo
});

test("1000 yen should be (1000 / 156.5) * 0.87 gbp", function(){
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected, 5);
});