'use-strict'

const Lagarto = require("../src/lagarto");
const Papel = require("../src/papel");
const Piedra = require("../src/piedra");

test("El resultado de lagarto contra lagarto es empate.", ()=>{
    const lagarto1 = new Lagarto();
    const lagarto2 = new Lagarto();

    expect(lagarto1.versus(lagarto2)).toBe("Empate");
})

test("El resultado de lagarto contra Papel es victoria.", ()=>{
    const lagarto = new Lagarto();
    const papel = new Papel();

    expect(lagarto.versus(papel)).toBe("Victoria");
})

test("El resultado de lagarto contra Piedra es victoria.", ()=>{
    const lagarto = new Lagarto();
    const piedra = new Piedra();

    expect(lagarto.versus(piedra)).toBe("Derrota");
})