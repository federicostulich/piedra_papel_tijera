'use-strict'

const Lagarto = require("../src/lagarto");
const Papel = require("../src/papel");

test("El resultado de lagarto contra lagarto es empate.", ()=>{
    const lagarto1 = new Lagarto();
    const lagarto2 = new Lagarto();

    expect(lagarto1.versus(lagarto2)).toBe("Empate");
})
