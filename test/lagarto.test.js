'use-strict'

const Lagarto = require("../src/lagarto");
const Papel = require("../src/papel");
const Piedra = require("../src/piedra");
const Tijera = require("../src/tijera");
const Spock = require("../src/spock");

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

test("El resultado de lagarto contra Piedra es derrota.", ()=>{
    const lagarto = new Lagarto();
    const piedra = new Piedra();

    expect(lagarto.versus(piedra)).toBe("Derrota");
})

test("El resultado de lagarto contra Tijera es derrota.", ()=>{
    const lagarto = new Lagarto();
    const tijera = new Tijera();

    expect(lagarto.versus(tijera)).toBe("Derrota");
})

test("El resultado de lagarto contra spock es derrota.", ()=>{
    const lagarto = new Lagarto();
    const spock = new Spock();

    expect(lagarto.versus(spock)).toBe("Victoria");
})