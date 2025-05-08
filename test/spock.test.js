'use-strict'

const Spock = require("../src/spock");
const Lagarto = require("../src/lagarto");
const Papel = require("../src/papel");
const Piedra = require("../src/piedra");
const Tijera = require("../src/tijera");

test("El resultado de spock contra spock es empate.", ()=>{
    const spock1 = new Spock();
    const spock2 = new Spock();

    expect(spock1.versus(spock2)).toBe("Empate");
})

test("El resultado de spock contra Papel es derrota.", ()=>{
    const spock = new Spock();
    const papel = new Papel();

    expect(spock.versus(papel)).toBe("Derrota");
})

test("El resultado de spock contra Piedra es victoria.", ()=>{
    const spock = new Spock();
    const piedra = new Piedra();

    expect(spock.versus(piedra)).toBe("Victoria");
})

test("El resultado de spock contra Tijera es victoria.", ()=>{
    const spock = new Spock();
    const tijera = new Tijera();

    expect(spock.versus(tijera)).toBe("Victoria");
})

test("El resultado de spock contra lagarto es derrota.", ()=>{
    const spock = new Spock();
    const lagarto = new Lagarto();

    expect(spock.versus(lagarto)).toBe("Derrota");
})