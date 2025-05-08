'use-strict'

const Tijera = require("../src/tijera");
const Piedra = require("../src/piedra");
const Papel = require("../src/papel");
const Lagarto = require("../src/lagarto");

test("El resultado de tijera contra tijera es empate.", ()=>{
    // setup
    const tijera1 = new Tijera();
    const tijera2 = new Tijera();

    // exercise
    const resultado = tijera1.versus(tijera2);
    
    // assert
    expect(resultado).toBe("Empate");
})

test("El resultado de tijera contra papel es victoria.", ()=>{
    // setup
    const tijera = new Tijera();
    const papel = new Papel();

    // exercise
    const resultado = tijera.versus(papel);
    
    // assert
    expect(resultado).toBe("Victoria");
})

test("El resultado de tijera contra piedra es derrota.", ()=>{
    // setup
    const tijera = new Tijera();
    const piedra = new Piedra();

    // exercise
    const resultado = tijera.versus(piedra);
    
    // assert
    expect(resultado).toBe("Derrota");
})

test("El resultado de tijera contra lagarto es victoria.", ()=>{
    const tijera = new Tijera();
    const lagarto = new Lagarto();
    
    expect(tijera.versus(lagarto)).toBe("Victoria");
})