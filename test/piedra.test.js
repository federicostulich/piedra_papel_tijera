'use-strict'

const Tijera = require("../src/tijera");
const Piedra = require("../src/piedra");
const Papel = require("../src/papel");
const Lagarto = require("../src/lagarto");
const Spock = require("../src/spock");

test("El resultado de piedra contra piedra es empate.", ()=>{
    // setup
    const piedra1 = new Piedra();
    const piedra2 = new Piedra();

    // exercise
    const resultado = piedra1.versus(piedra2);
    
    // assert
    expect(resultado).toBe("Empate");
})

test("El resultado de piedra contra tijera es victoria.", ()=>{
    // setup
    const piedra = new Piedra();
    const tijera = new Tijera();

    // exercise
    const resultado = piedra.versus(tijera);
    
    // assert
    expect(resultado).toBe("Victoria");
})

test("El resultado de piedra contra papel es derrota.", ()=>{
    // setup
    const piedra = new Piedra();
    const papel = new Papel();

    // exercise
    const resultado = piedra.versus(papel);
    
    // assert
    expect(resultado).toBe("Derrota");
})

test("El resultado de piedra contra lagarto es victoria.", ()=>{
    const piedra = new Piedra();
    const lagarto = new Lagarto();
    
    expect(piedra.versus(lagarto)).toBe("Victoria");
})

test("El resultado de piedra contra spock es derrota.", ()=>{
    const piedra = new Piedra();
    const spock = new Spock();
    
    expect(piedra.versus(spock)).toBe("Derrota");
})